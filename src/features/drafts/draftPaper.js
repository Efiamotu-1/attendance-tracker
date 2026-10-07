// Turns one draft into the HTML of a white "court paper" page.
// Single source of truth: used by Drafts.jsx (React) and by preview.html.

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const br = (arr) => arr.map(esc).join("<br>");

export function blockHtml(b) {
  switch (b.t) {
    case "letterhead": {
      const [first, ...rest] = b.lines;
      return `<div class="dp-letterhead"><strong>${esc(first)}</strong>${rest.length ? "<br>" + br(rest) : ""}</div>`;
    }
    case "sender":
      return `<div class="dp-sender">${br(b.lines)}</div>`;
    case "refs":
      return `<div class="dp-refs"><span>Our Ref: ________</span><span class="dp-refs-right">Your Ref: ________${
        b.date ? "<br>" + esc(b.date) : ""
      }</span></div>`;
    case "address":
      return `<div class="dp-address">${br(b.lines)}</div>`;
    case "salutation":
      return `<p class="dp-salutation">${esc(b.text)}</p>`;
    case "heading":
      return `<div class="dp-heading dp-${b.align || "left"}${b.underline ? " dp-ul" : ""}">${br(b.lines)}</div>`;
    case "para":
      return `<p class="dp-para">${esc(b.text)}</p>`;
    case "numbered":
      return `<ol class="dp-numbered">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ol>`;
    case "memo":
      return `<table class="dp-memo">${b.rows
        .map(([k, v]) => `<tr><th>${esc(k)}:</th><td>${esc(v)}</td></tr>`)
        .join("")}</table>`;
    case "signoff":
      return `<div class="dp-signoff dp-${b.align || "left"}">${b.closing ? `<p>${esc(b.closing)}</p>` : ""}${
        b.sign ? '<div class="dp-sigline"></div>' : ""
      }<div>${br(b.lines)}</div></div>`;
    case "line":
      return `<p class="dp-line dp-${b.align || "left"}">${esc(b.text)}</p>`;
    case "section":
      return `<div class="dp-section">${b.n}. ${esc(b.title)}</div>`;
    case "fields":
      return `<div class="dp-fields">${b.label ? `<div class="dp-fields-label">${esc(b.label)}</div>` : ""}${b.rows
        .map(([k, v]) => `<div class="dp-field"><span>${esc(k)}:</span> ${esc(v)}</div>`)
        .join("")}</div>`;
    case "spread":
      return `<div class="dp-spread">${b.rows
        .map(([l, r]) => `<div class="dp-spread-row"><span>${esc(l)}</span><span>${esc(r)}</span></div>`)
        .join("")}</div>`;
    case "items":
      return `<div class="dp-items">${b.items.map((i) => `<div>${esc(i)}</div>`).join("")}</div>`;
    case "spacer":
      return `<div class="dp-spacer"></div>`;
    case "courtheading": {
      // Centered court/division/"Holden at" lines, then (if given) a
      // separate right-aligned "CHARGE NO." line underneath.
      const heading = `<div class="dp-courtheading">${b.lines.map((l) => `<div>${esc(l)}</div>`).join("")}</div>`;
      const chargeNo =
        b.chargeNo !== undefined
          ? `<div class="dp-chargeno">CHARGE NO: ${esc(b.chargeNo || "________")}</div>`
          : "";
      return heading + chargeNo;
    }
    case "parties":
      // BETWEEN / complainant ... COMPLAINANT / AND / defendant(s) ... DEFENDANT,
      // each name padded out to a dashed leader line, as on a real charge sheet.
      return `<div class="dp-parties"><div class="dp-parties-between">BETWEEN</div>${b.rows
        .map(
          ([name, role]) =>
            `<div class="dp-parties-row"><span>${esc(name)}</span><span class="dp-parties-leader"></span><span class="dp-parties-role">${esc(
              role
            )}</span></div>`
        )
        .join('<div class="dp-parties-and">AND</div>')}</div>`;
    case "signoffPair":
      // Two signatories side by side (e.g. Director on the left, Company
      // Secretary on the right), each with their own signature line, as on
      // a board/ordinary resolution.
      return `<div class="dp-signoff-pair">${b.people
        .map(
          (p) =>
            `<div class="dp-signoff-pair-col"><div class="dp-sigline"></div><div>${br(p)}</div></div>`
        )
        .join("")}</div>`;
    case "table":
      // A generic bordered grid — used for the Memorandum's subscription
      // box (name/address, beneficial owner, shares taken, signature).
      return `<table class="dp-table"><thead><tr>${b.headers
        .map((h) => `<th>${esc(h)}</th>`)
        .join("")}</tr></thead><tbody>${b.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table>`;
    case "pageBreak":
      // A visual divider marking where an attached document (e.g. a search
      // report) begins within the same draft, matching how a covering
      // letter and its enclosure sit on consecutive pages in the source.
      return `<div class="dp-pagebreak">${b.label ? `<span>${esc(b.label)}</span>` : ""}</div>`;
    default:
      return "";
  }
}

export function paperHtml(draft) {
  return `<div class="dp-paper">${draft.blocks.map(blockHtml).join("")}</div>`;
}

// Plain text version, for the "Copy as template" button.
export function plainText(draft) {
  const out = [];
  for (const b of draft.blocks) {
    if (b.t === "parties") {
      out.push(["BETWEEN", ...b.rows.map(([n, r]) => `${n}  ...  ${r}`)].join("\nAND\n"));
      continue;
    }
    if (b.t === "signoffPair") {
      out.push(b.people.map((p) => p.join("\n")).join("\n\n"));
      continue;
    }
    if (b.t === "table") {
      out.push([b.headers.join(" | "), ...b.rows.map((row) => row.join(" | "))].join("\n"));
      continue;
    }
    if (b.lines) {
      const chargeNo = b.t === "courtheading" && b.chargeNo !== undefined ? `\nCHARGE NO: ${b.chargeNo || "________"}` : "";
      out.push(b.lines.join("\n") + chargeNo);
    } else if (b.text) out.push(b.text);
    else if (b.items) out.push(b.items.map((x, i) => (b.t === "numbered" ? `${i + 1}. ${x}` : x)).join("\n"));
    else if (b.rows) out.push(b.rows.map((r) => (b.t === "memo" ? `${r[0]}: ${r[1]}` : `${r[0]}  ${r[1]}`)).join("\n"));
    if (b.t === "signoff" && b.closing) out.splice(out.length - 1, 0, b.closing);
    if (b.t === "section") out[out.length - 1] = `${b.n}. ${b.title}`;
  }
  return out.join("\n\n");
}
