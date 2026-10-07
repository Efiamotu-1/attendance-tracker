import React from "react";

// The draft body is built as raw HTML (see draftPaper.js) and injected via
// dangerouslySetInnerHTML, so Tailwind utility classes can't reach inside it
// — it needs real CSS selectors. This is the one scoped <style> block for
// that HTML's internal layout (letterhead centered, refs spread left/right,
// numbered paragraphs, memo FROM/TO rows, etc.), rendered once per page.
// Everything is scoped under .dp-paper so it can't leak into the rest of
// the app's Tailwind-only styling.
export default function DraftPaperStyles() {
  return (
    <style>{`
      .dp-paper {
        background: #fff;
        color: #111;
        font-family: "Times New Roman", Times, Georgia, serif;
        font-size: 16px;
        line-height: 1.7;
      }
      .dp-paper p { margin: 0 0 14px; }

      .dp-letterhead { text-align: center; margin-bottom: 22px; }
      .dp-letterhead strong { font-size: 1.2em; letter-spacing: .03em; }

      .dp-sender { text-align: right; margin-bottom: 22px; }

      .dp-refs {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 18px;
      }
      .dp-refs-right { text-align: right; }

      .dp-address { margin-bottom: 18px; }
      .dp-salutation { margin-bottom: 14px; }

      .dp-heading {
        font-weight: 700;
        text-transform: uppercase;
        margin: 10px 0 18px;
      }
      .dp-center { text-align: center; }
      .dp-left { text-align: left; }
      .dp-right { text-align: right; }
      .dp-ul { text-decoration: underline; text-underline-offset: 4px; }

      .dp-para { text-align: justify; margin-bottom: 14px; }

      /* Tailwind's Preflight base strips list-style/margin/padding from
         every <ol>/<ul> globally, which otherwise hides the numbers here —
         force them back explicitly. */
      .dp-numbered { list-style: decimal; margin: 0 0 14px; padding-left: 28px; text-align: justify; }
      .dp-numbered li { display: list-item; margin-bottom: 10px; padding-left: 6px; }

      .dp-memo { border-collapse: collapse; margin: 6px 0 22px; width: 100%; }
      .dp-memo th { text-align: left; vertical-align: top; padding: 2px 16px 6px 0; width: 100px; font-weight: 700; white-space: nowrap; }
      .dp-memo td { padding: 2px 0 6px; }

      .dp-signoff { margin-top: 28px; }
      .dp-signoff p { margin-bottom: 4px; }
      .dp-sigline { width: 180px; border-bottom: 1px solid #111; height: 38px; margin-bottom: 6px; }
      .dp-signoff.dp-right .dp-sigline { margin-left: auto; }
      .dp-signoff.dp-center .dp-sigline { margin-left: auto; margin-right: auto; }

      .dp-line { margin-bottom: 10px; }

      .dp-section { font-weight: 700; margin: 20px 0 8px; }

      .dp-fields { margin-left: 22px; margin-bottom: 10px; }
      .dp-fields-label { font-weight: 700; margin-top: 10px; }
      .dp-field { margin-bottom: 4px; }
      .dp-field span { display: inline-block; min-width: 170px; font-weight: 600; }

      .dp-spread { margin-left: 22px; margin-bottom: 10px; }
      .dp-spread-row { display: flex; justify-content: space-between; gap: 18px; margin-bottom: 4px; }

      .dp-items { margin-left: 22px; margin-bottom: 10px; }
      .dp-items > div { margin-bottom: 3px; }

      .dp-spacer { height: 22px; }

      /* Charge sheets: centered court/division heading, with CHARGE NO.
         on its own right-aligned line underneath, then a BETWEEN / ... AND
         ... parties block with dashed leader lines to COMPLAINANT /
         DEFENDANT, matching a real charge sheet layout. */
      .dp-courtheading { text-align: center; font-weight: 700; margin-bottom: 4px; }
      .dp-courtheading div { margin-bottom: 2px; }
      .dp-chargeno { text-align: right; font-weight: 700; margin-bottom: 20px; }
      .dp-parties { margin-bottom: 20px; }
      .dp-parties-between, .dp-parties-and { font-weight: 700; margin: 6px 0; }
      .dp-parties-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
      .dp-parties-row > span:first-child { font-weight: 700; white-space: nowrap; }
      .dp-parties-leader {
        flex: 1;
        border-bottom: 1px dashed #555;
        margin: 0 8px;
        min-width: 40px;
        transform: translateY(-4px);
      }
      .dp-parties-role { font-weight: 700; white-space: nowrap; }

      /* Two signatories side by side on a resolution (e.g. Director left,
         Company Secretary right), each with their own signature line. */
      .dp-signoff-pair { display: flex; justify-content: space-between; gap: 24px; margin-top: 32px; }
      .dp-signoff-pair-col { flex: 1; }

      /* Generic bordered table (e.g. the Memorandum's subscription box). */
      .dp-table { width: 100%; border-collapse: collapse; margin: 10px 0 16px; font-size: 0.92em; }
      .dp-table th, .dp-table td { border: 1px solid #333; padding: 6px 8px; text-align: left; vertical-align: top; }
      .dp-table th { font-weight: 700; background: #f3f3f3; color: #111; }

      /* Divider between a covering letter and an attached document within
         the same draft (e.g. the search report attached to its letter). */
      .dp-pagebreak {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 36px 0 28px;
        padding-top: 24px;
        border-top: 2px dashed #ccc;
        text-align: center;
        justify-content: center;
        font-size: 0.78em;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #888;
      }

      @media (max-width: 640px) {
        .dp-paper { font-size: 14.5px; }
        .dp-field span { min-width: 120px; }
        .dp-signoff-pair { flex-direction: column; gap: 20px; }
        .dp-refs { flex-direction: column; gap: 6px; }
        .dp-refs-right { text-align: left; }
      }

      [data-placeholder]:empty:before {
        content: attr(data-placeholder);
        color: #9ca3af;
        font-style: italic;
      }
    `}</style>
  );
}
