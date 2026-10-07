import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";
import drafts from "../data/drafts";
import { paperHtml, plainText } from "../features/drafts/draftPaper";
import DraftPaperStyles from "../features/drafts/DraftPaperStyles";
import QuestionReportModal from "../features/feedback/QuestionReportModal";
import {
  HiOutlineArrowLeft,
  HiOutlineDocumentText,
  HiOutlineDocumentDuplicate,
  HiOutlineCheck,
  HiOutlineSparkles,
  HiOutlineBars3BottomLeft,
  HiOutlineBars3,
  HiOutlineBars3BottomRight,
  HiOutlineBars4,
  HiOutlineFlag,
} from "react-icons/hi2";

const courseEntries = Object.entries(drafts); // [[courseId, {courseName, drafts}], ...]

function DraftPaper({ html, red, redTitle }) {
  // The paper itself is deliberately always white/black-serif, regardless of
  // the app's dark/light theme — it's meant to look like a real printed
  // letter or court document, not a themed UI card. In the original draft
  // book, the only red ink is a handwritten title centered just above each
  // page (e.g. "ARBITRATION CLAUSE") — it sits outside the letter itself,
  // not inside the letterhead/heading, so it's rendered as its own line
  // above the white sheet, matching the source exactly.
  return (
    <div className="mx-auto" style={{ maxWidth: 700 }}>
      {red && (
        <p
          className="text-center font-bold uppercase tracking-wide mb-2"
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif', color: "#c4001a", fontSize: "18px" }}
        >
          {redTitle}
        </p>
      )}
      <div
        className="bg-white text-gray-900 rounded-sm"
        style={{
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          fontSize: "16px",
          lineHeight: 1.65,
          padding: "40px 32px",
          boxShadow: "0 2px 4px rgba(0,0,0,.25), 0 14px 40px rgba(0,0,0,.35)",
          minHeight: 400,
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

// A real editable "white page" for Practice mode — contentEditable, so
// users can actually place their cursor and justify/center/right-align
// paragraphs the way a real document editor works, instead of typing into
// a plain flat textarea. Alignment is applied per-paragraph via
// document.execCommand, same mechanism every basic WYSIWYG toolbar uses.
function DraftEditor({ isDarkMode }) {
  const editorRef = React.useRef(null);

  const applyAlign = (align) => {
    editorRef.current?.focus();
    document.execCommand(align);
  };
  const applyBold = () => {
    editorRef.current?.focus();
    document.execCommand("bold");
  };

  const toolbarBtn = `p-2 rounded-lg border transition-colors ${
    isDarkMode
      ? "bg-dark-800 border-dark-600 text-dark-200 hover:border-primary-500/50"
      : "bg-white border-gray-200 text-gray-700 hover:border-primary-300"
  }`;

  return (
    <div className="mx-auto" style={{ maxWidth: 700 }}>
      <div
        className={`flex items-center gap-1.5 mb-2 p-1.5 rounded-xl border ${
          isDarkMode ? "bg-dark-800/60 border-dark-700" : "bg-gray-50 border-gray-200"
        }`}
      >
        <button type="button" className={toolbarBtn} title="Align left" onClick={() => applyAlign("justifyLeft")}>
          <HiOutlineBars3BottomLeft className="w-4 h-4" />
        </button>
        <button type="button" className={toolbarBtn} title="Center" onClick={() => applyAlign("justifyCenter")}>
          <HiOutlineBars3 className="w-4 h-4" />
        </button>
        <button type="button" className={toolbarBtn} title="Align right" onClick={() => applyAlign("justifyRight")}>
          <HiOutlineBars3BottomRight className="w-4 h-4" />
        </button>
        <button type="button" className={toolbarBtn} title="Justify" onClick={() => applyAlign("justifyFull")}>
          <HiOutlineBars4 className="w-4 h-4" />
        </button>
        <span className={`w-px h-5 mx-1 ${isDarkMode ? "bg-dark-600" : "bg-gray-300"}`} />
        <button type="button" className={`${toolbarBtn} font-bold`} title="Bold" onClick={applyBold}>
          B
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="bg-white text-gray-900 rounded-sm outline-none"
        style={{
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          fontSize: "16px",
          lineHeight: 1.65,
          padding: "40px 32px",
          boxShadow: "0 2px 4px rgba(0,0,0,.25), 0 14px 40px rgba(0,0,0,.35)",
          minHeight: 400,
        }}
        data-placeholder="Write your own draft here before revealing the model..."
      />
    </div>
  );
}

// Lecturer notes are written as dense prose, but several of them are really
// an acronym broken into semicolon/period-separated clauses (e.g. "D -
// Defendant; D - Date the offence was committed; P - Place..."). Splitting
// those into a bullet list makes them scannable instead of a wall of text.
// A plain one-sentence note (no acronym-style clauses) just renders as-is.
function NoteContent({ note, isDarkMode }) {
  // Split into sentences first, then split any sentence that itself has
  // several semicolon-joined clauses into its own sub-items. A sentence
  // ending in ":" right before the clause list is kept as a plain lead-in
  // line above the bullets, not bulleted itself.
  const sentences = note
    .split(/(?<=[.:])\s+(?=[A-Z*])/)
    .map((s) => s.trim())
    .filter(Boolean);

  let lead = null;
  const items = [];
  sentences.forEach((s) => {
    const clauses = s.split(/;\s*/).map((c) => c.trim()).filter(Boolean);
    if (clauses.length > 2) {
      items.push(...clauses);
    } else if (!items.length && !lead && s.endsWith(":")) {
      lead = s;
    } else {
      items.push(s);
    }
  });

  if (items.length <= 1 && !lead) {
    return <p className="italic leading-relaxed">{note}</p>;
  }

  return (
    <>
      {lead && <p className="font-semibold mb-2 leading-relaxed">{lead}</p>}
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 leading-relaxed">
            <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isDarkMode ? "bg-primary-400" : "bg-primary-500"}`} />
            <span>{item.replace(/\.$/, "")}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function DraftViewer({ draft, courseName, isDarkMode, onBack }) {
  const [mode, setMode] = useState("read"); // "read" | "practice"
  const [revealed, setRevealed] = useState(false);
  const [ticked, setTicked] = useState({});
  const [copied, setCopied] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  // Draft reports are UI-only, same approach as flashcard reports — nothing
  // is sent to Supabase or any backend, just a local toast acknowledgement.

  const html = useMemo(() => paperHtml(draft), [draft]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainText(draft));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard may be unavailable (e.g. no permission) — fail quietly
    }
  };

  const handleSubmitReport = () => {
    setReportModalOpen(false);
    toast.success("Thanks — noted for this draft.");
  };

  const tickedCount = Object.values(ticked).filter(Boolean).length;

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto">
      <DraftPaperStyles />
      <button
        onClick={onBack}
        className={`flex items-center gap-2 mb-4 text-sm font-medium transition-colors ${
          isDarkMode ? "text-dark-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
        }`}
      >
        <HiOutlineArrowLeft className="w-4 h-4" />
        Back to drafts
      </button>

      <h1 className={`text-xl sm:text-2xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        {draft.title}
      </h1>
      <p className={`text-xs sm:text-sm mb-1 ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
        {draft.category}
      </p>

      {draft.note && (
        <div
          className={`mt-3 rounded-xl border-l-4 border-primary-500 p-3.5 text-sm ${
            isDarkMode ? "bg-primary-500/10 text-dark-300" : "bg-primary-50 text-gray-700"
          }`}
        >
          <NoteContent note={draft.note} isDarkMode={isDarkMode} />
        </div>
      )}

      {/* Mode toggle + copy */}
      <div className="flex flex-wrap items-center justify-between gap-2 my-4">
        <div className="flex gap-1.5">
          {["read", "practice"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-colors ${
                mode === m
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : isDarkMode
                  ? "bg-dark-800/60 text-dark-300 hover:bg-dark-700 border border-dark-700"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
              isDarkMode
                ? "bg-dark-800 border-dark-600 text-dark-200 hover:border-primary-500/50"
                : "bg-white border-gray-200 text-gray-700 hover:border-primary-300"
            }`}
          >
            {copied ? <HiOutlineCheck className="w-4 h-4 text-emerald-500" /> : <HiOutlineDocumentDuplicate className="w-4 h-4" />}
            {copied ? "Copied" : "Copy as template"}
          </button>
          <button
            onClick={() => setReportModalOpen(true)}
            className={`flex items-center gap-1 text-xs font-medium transition-colors ${
              isDarkMode ? "text-dark-500 hover:text-red-400" : "text-gray-400 hover:text-red-500"
            }`}
          >
            <HiOutlineFlag className="w-3.5 h-3.5" />
            Report this draft
          </button>
        </div>
      </div>

      {mode === "read" && (
        <>
          <DraftPaper html={html} red={draft.red} redTitle={draft.title} />
          <div
            className={`rounded-2xl border p-4 mt-4 ${
              isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
            }`}
          >
            <h4 className={`text-sm font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Key points to remember
            </h4>
            <ul className="space-y-1.5">
              {draft.keyPoints.map((k) => (
                <li key={k} className="flex gap-2 text-sm leading-relaxed">
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isDarkMode ? "bg-primary-400" : "bg-primary-500"}`} />
                  <span className={isDarkMode ? "text-dark-200" : "text-gray-700"}>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {mode === "practice" && (
        <>
          <div
            className={`rounded-2xl border p-4 mb-3 ${
              isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
            }`}
          >
            <h4 className={`text-sm font-bold mb-1.5 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Scenario</h4>
            <p className={`text-sm leading-relaxed ${isDarkMode ? "text-dark-300" : "text-gray-700"}`}>
              {draft.scenario}
            </p>
          </div>

          <DraftEditor isDarkMode={isDarkMode} />

          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              className="mt-3 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary-500 hover:bg-primary-600 text-white transition-colors shadow-lg shadow-primary-500/20"
            >
              Reveal model draft
            </button>
          )}

          {revealed && (
            <>
              <div
                className={`rounded-2xl border p-4 my-3 ${
                  isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Did your draft include these?
                  </h4>
                  <span className={`text-xs font-semibold ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
                    {tickedCount} / {draft.keyPoints.length}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {draft.keyPoints.map((k) => (
                    <label key={k} className="flex items-start gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!ticked[k]}
                        onChange={(e) => setTicked((prev) => ({ ...prev, [k]: e.target.checked }))}
                        className="mt-1 w-4 h-4 rounded accent-primary-500 flex-shrink-0"
                      />
                      <span className={isDarkMode ? "text-dark-200" : "text-gray-700"}>{k}</span>
                    </label>
                  ))}
                </div>
              </div>
              <DraftPaper html={html} red={draft.red} redTitle={draft.title} />
            </>
          )}
        </>
      )}

      <QuestionReportModal
        isDarkMode={isDarkMode}
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onSubmit={handleSubmitReport}
        isSubmitting={false}
        answerFormat="text"
        question={{
          id: draft.id,
          questionNumber: null,
          question: draft.title,
        }}
        quizContext={{
          quizType: "draft",
          examSession: draft.category,
          courseName: courseName,
        }}
      />
    </div>
  );
}

function Drafts() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeCourseId, setActiveCourseId] = useState(courseEntries[0]?.[0] ?? null);
  const [activeDraft, setActiveDraft] = useState(null);

  if (activeDraft) {
    const activeCourseForDraft = courseEntries.find(([id]) => id === activeCourseId)?.[1];
    return (
      <DraftViewer
        draft={activeDraft}
        courseName={activeCourseForDraft?.courseName}
        isDarkMode={isDarkMode}
        onBack={() => setActiveDraft(null)}
      />
    );
  }

  const activeCourse = courseEntries.find(([id]) => id === activeCourseId)?.[1];

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-5 sm:mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className={`flex items-center gap-2 mb-2 text-sm font-medium transition-colors ${
            isDarkMode ? "text-dark-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-amber-500/20 rounded-xl">
            <HiOutlineDocumentText className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary-500">Drafts</h1>
            <p className={`text-xs sm:text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
              Practice letters, memoranda and clauses, laid out like real court documents
            </p>
          </div>
        </div>
      </div>

      {/* Info card */}
      <div
        className={`flex items-start gap-3 rounded-2xl border p-3.5 sm:p-4 mb-5 ${
          isDarkMode ? "bg-primary-500/5 border-primary-500/20" : "bg-primary-50 border-primary-200/60"
        }`}
      >
        <HiOutlineSparkles className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
        <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-dark-300" : "text-gray-700"}`}>
          Read mode shows the full draft laid out like a real letter or memo. Practice mode gives you
          only the scenario — write your own attempt, then reveal the model draft and tick off the key
          points you included.
        </p>
      </div>

      {/* Course tabs */}
      <div className="flex gap-1 overflow-x-auto mb-4 sm:mb-5 -mx-0.5 px-0.5 pb-0.5 border-b border-dashed border-transparent">
        <div className={`flex gap-1.5 flex-nowrap ${isDarkMode ? "" : ""}`}>
          {courseEntries.map(([id, course]) => {
            const count = course.drafts.length;
            return (
              <button
                key={id}
                onClick={() => setActiveCourseId(id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeCourseId === id
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                    : isDarkMode
                    ? "bg-dark-800/60 text-dark-300 hover:bg-dark-700 border border-dark-700"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {course.courseName}
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeCourseId === id
                        ? "bg-white/20 text-white"
                        : isDarkMode
                        ? "bg-dark-700 text-dark-400"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Draft list for active course */}
      {!activeCourse || activeCourse.drafts.length === 0 ? (
        <div
          className={`rounded-2xl border p-8 sm:p-10 text-center ${
            isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
          }`}
        >
          <div className={`inline-flex p-3 rounded-2xl mb-3 ${isDarkMode ? "bg-dark-700" : "bg-gray-100"}`}>
            <HiOutlineDocumentText className={`w-6 h-6 ${isDarkMode ? "text-dark-400" : "text-gray-400"}`} />
          </div>
          <h2 className={`text-base font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            No drafts yet for {activeCourse?.courseName}
          </h2>
          <p className={`text-xs sm:text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
            Practice drafts for this course are coming soon.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {activeCourse.drafts.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDraft(d)}
              className={`w-full flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all hover:scale-[1.01] active:scale-[0.99] ${
                isDarkMode
                  ? "bg-dark-800/50 border-dark-700 hover:border-primary-500/50"
                  : "bg-white border-gray-200 hover:border-primary-300 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${isDarkMode ? "bg-primary-500/15" : "bg-primary-50"}`}>
                  <HiOutlineDocumentText className="w-5 h-5 text-primary-500" />
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${
                      d.red ? "text-red-500" : isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {d.title}
                  </p>
                  <p className={`text-xs mt-0.5 ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>{d.category}</p>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-500/15 text-primary-500 flex-shrink-0">
                Open
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Drafts;
