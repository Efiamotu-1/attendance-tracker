import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import flashcards from "../data/flashcards";
import QuestionReportModal from "../features/feedback/QuestionReportModal";
import { useCreateQuestionReport } from "../features/feedback/useCreateQuestionReport";
import {
  HiOutlineArrowLeft,
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineFunnel,
  HiOutlineArrowUturnLeft,
  HiOutlineCheck,
  HiOutlineXMark,
  HiOutlineRectangleStack,
  HiOutlineSparkles,
  HiOutlineFlag,
  HiOutlineFolderOpen,
  HiOutlineMagnifyingGlass,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

const courseEntries = Object.entries(flashcards); // [[courseId, {courseName, decks}], ...]

// Flat index of every card across every deck/course, built once at module
// load (the data is static), so global search has no per-keystroke cost
// beyond filtering this array.
const allCardsIndex = courseEntries.flatMap(([courseId, course]) =>
  course.decks.flatMap((deck, deckIdx) =>
    deck.cards.map((card, cardIdx) => ({
      courseId,
      courseName: course.courseName,
      deck,
      deckIdx,
      cardIdx,
      card,
      // Stable per-card identity (survives re-sorting/filtering), used by
      // Random Card mode to track how many distinct cards have been seen.
      seenKey: `${deck.id}-${cardIdx}`,
      // Pre-lowercased haystack for fast, case-insensitive matching.
      haystack: [card.category, card.question, ...(card.answer || []), card.source]
        .filter(Boolean)
        .join(" \n ")
        .toLowerCase(),
    }))
  )
);

// Total card count per course, for the Random Card progress counter's
// denominator when scoped to a single course.
const cardCountByCourse = Object.fromEntries(
  courseEntries.map(([courseId, course]) => [
    courseId,
    course.decks.reduce((sum, deck) => sum + deck.cards.length, 0),
  ])
);

function searchCards(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allCardsIndex.filter((entry) => entry.haystack.includes(q)).slice(0, 40);
}

// Picks a random card, either from the entire index (every course, every
// week) or, when courseId is given, scoped to just that course's cards
// (still spanning every week/deck within it). Avoids immediately repeating
// the same card twice in a row where possible.
function pickRandomCard(excludeIndex, courseId) {
  const pool = courseId ? allCardsIndex.filter((e) => e.courseId === courseId) : allCardsIndex;
  if (pool.length <= 1) return pool[0] ?? null;
  let next;
  do {
    next = pool[Math.floor(Math.random() * pool.length)];
  } while (excludeIndex != null && next === excludeIndex);
  return next;
}

// Wraps the first match of `query` in the given text with a <mark>-style
// highlight, for showing why a result matched.
function Highlight({ text, query, isDarkMode }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.trim().toLowerCase());
  if (idx === -1) return <>{text}</>;
  const end = idx + query.trim().length;
  return (
    <>
      {text.slice(0, idx)}
      <mark
        className={`rounded px-0.5 ${
          isDarkMode ? "bg-primary-500/30 text-primary-200" : "bg-primary-200 text-primary-900"
        }`}
      >
        {text.slice(idx, end)}
      </mark>
      {text.slice(end)}
    </>
  );
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let a = copy.length - 1; a > 0; a--) {
    const b = Math.floor(Math.random() * (a + 1));
    [copy[a], copy[b]] = [copy[b], copy[a]];
  }
  return copy;
}

function DeckPlayer({ deck, courseName, isDarkMode, onBack, startCardIdx }) {
  const categories = useMemo(
    () => ["All", ...new Set(deck.cards.map((c) => c.category))],
    [deck]
  );
  // Jumping in from search lands on the matched card's own category filter,
  // so the card is actually reachable in the pool (not filtered out).
  const [filter, setFilter] = useState(
    startCardIdx != null ? deck.cards[startCardIdx]?.category ?? "All" : "All"
  );
  const [order, setOrder] = useState([]);
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [results, setResults] = useState({}); // cardIdx -> "got" | "miss"
  const [missedOnly, setMissedOnly] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const { submitQuestionReport, isSubmitting } = useCreateQuestionReport();

  const basePool = useMemo(
    () =>
      deck.cards
        .map((c, idx) => idx)
        .filter((idx) => filter === "All" || deck.cards[idx].category === filter),
    [deck, filter]
  );

  useEffect(() => {
    const pool = missedOnly ? basePool.filter((idx) => results[idx] === "miss") : basePool;
    setOrder(pool);
    const landingIdx = startCardIdx != null ? pool.indexOf(startCardIdx) : -1;
    setIndex(landingIdx !== -1 ? landingIdx : 0);
    setShown(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, missedOnly, deck]);

  const gotCount = basePool.filter((idx) => results[idx] === "got").length;
  const missCount = basePool.filter((idx) => results[idx] === "miss").length;
  const progressPct = basePool.length ? Math.round((gotCount / basePool.length) * 100) : 0;

  const mark = (value) => {
    setResults((prev) => ({ ...prev, [order[index]]: value }));
    setIndex((i) => i + 1);
    setShown(false);
    setTypedAnswer("");
  };

  const handleShuffle = () => {
    setOrder((prev) => shuffleArray(prev));
    setIndex(0);
    setShown(false);
    setTypedAnswer("");
  };

  const handleReset = () => {
    setResults({});
    setMissedOnly(false);
    setIndex(0);
    setShown(false);
    setTypedAnswer("");
  };

  const handleReveal = () => {
    setShown(true);
  };

  const handleSubmitReport = (reportData) => {
    submitQuestionReport(reportData, {
      onSuccess: () => setReportModalOpen(false),
    });
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      // Don't hijack keystrokes while the user is typing in the recall
      // textarea (or any other field) — Space/1/2/arrows should type
      // normally there instead of triggering reveal/mark/navigate.
      const tag = e.target?.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT" || e.target?.isContentEditable) return;

      if (e.code === "Space") {
        e.preventDefault();
        if (!shown && index < order.length) setShown(true);
      } else if (e.key === "1" && shown) {
        mark("got");
      } else if (e.key === "2" && shown) {
        mark("miss");
      } else if (e.key === "ArrowRight") {
        setIndex((i) => Math.min(i + 1, order.length));
        setShown(false);
        setTypedAnswer("");
      } else if (e.key === "ArrowLeft" && index > 0) {
        setIndex((i) => i - 1);
        setShown(false);
        setTypedAnswer("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown, index, order]);

  const card = index < order.length ? deck.cards[order[index]] : null;

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className={`flex items-center gap-2 mb-4 text-sm font-medium transition-colors ${
          isDarkMode ? "text-dark-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
        }`}
      >
        <HiOutlineArrowLeft className="w-4 h-4" />
        Back to decks
      </button>

      <h1 className={`text-xl sm:text-2xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        {deck.title}
      </h1>
      <p className={`text-xs sm:text-sm ${deck.preClassUrl ? "mb-2" : "mb-4"} ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
        {deck.instructions}
      </p>
      {deck.preClassUrl && (
        <a
          href={deck.preClassUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-4 transition-colors ${
            isDarkMode ? "text-primary-400 hover:text-primary-300" : "text-primary-600 hover:text-primary-700"
          }`}
        >
          <HiOutlineFolderOpen className="w-4 h-4" />
          View pre-class Questions & Answers (Google Drive)
        </a>
      )}

      {/* Category tabs — lets users jump straight to a topic instead of
          scrolling the whole deck */}
      <div
        className={`flex gap-1 overflow-x-auto mb-3.5 -mx-0.5 px-0.5 pb-0.5 border-b ${
          isDarkMode ? "border-dark-700" : "border-gray-200"
        }`}
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative flex-shrink-0 px-3.5 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              filter === c
                ? "text-primary-500"
                : isDarkMode
                ? "text-dark-400 hover:text-dark-200"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {c}
            {filter === c && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-0.5 rounded-full bg-primary-500" />
            )}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div
        className={`flex flex-wrap items-center gap-2 mb-4 rounded-2xl border p-2.5 sm:p-3 ${
          isDarkMode ? "bg-dark-800/40 border-dark-700" : "bg-gray-50 border-gray-200"
        }`}
      >
        <button
          onClick={handleShuffle}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
            isDarkMode
              ? "bg-dark-800 border-dark-600 text-dark-200 hover:border-primary-500/50"
              : "bg-white border-gray-200 text-gray-700 hover:border-primary-300"
          }`}
        >
          <HiOutlineArrowPath className="w-4 h-4" />
          Shuffle
        </button>
        <button
          onClick={() => setMissedOnly((v) => !v)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
            missedOnly
              ? "border-amber-500 text-amber-500 bg-amber-500/10"
              : isDarkMode
              ? "bg-dark-800 border-dark-600 text-dark-200 hover:border-primary-500/50"
              : "bg-white border-gray-200 text-gray-700 hover:border-primary-300"
          }`}
        >
          <HiOutlineFunnel className="w-4 h-4" />
          Missed only
        </button>
        <button
          onClick={handleReset}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
            isDarkMode
              ? "bg-dark-800 border-dark-600 text-dark-200 hover:border-primary-500/50"
              : "bg-white border-gray-200 text-gray-700 hover:border-primary-300"
          }`}
        >
          <HiOutlineArrowUturnLeft className="w-4 h-4" />
          Reset
        </button>
        <div className="flex-1 min-w-[90px] flex items-center gap-2">
          <div className={`flex-1 h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-dark-700" : "bg-gray-200"}`}>
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-primary-500 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
        <span className={`text-[11px] sm:text-xs whitespace-nowrap font-medium ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
          {gotCount} got &middot; {missCount} to review &middot; {basePool.length} cards
        </span>
      </div>

      {/* Card */}
      {!order.length ? (
        <div
          className={`rounded-2xl border p-8 text-center ${
            isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className={`text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {missedOnly ? "No missed cards here 🎉" : "No cards"}
          </h2>
          {missedOnly && (
            <p className={`text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
              Switch off "Missed only" or pick another topic.
            </p>
          )}
        </div>
      ) : !card ? (
        <div
          className={`rounded-2xl border p-8 text-center ${
            isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="inline-flex p-3 rounded-2xl bg-emerald-500/15 mb-3">
            <HiOutlineCheck className="w-7 h-7 text-emerald-500" />
          </div>
          <h2 className={`text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Round complete
          </h2>
          <p className={`text-sm mb-4 ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
            {order.filter((idx) => results[idx] === "miss").length} card(s) marked for review.
          </p>
          <button
            onClick={() => {
              setIndex(0);
              setShown(false);
            }}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20"
          >
            Go again
          </button>
        </div>
      ) : (
        <>
          <div
            className={`relative overflow-hidden rounded-2xl border p-5 sm:p-7 min-h-[280px] flex flex-col shadow-xl ${
              isDarkMode ? "bg-dark-800/70 border-dark-700 shadow-black/20" : "bg-white border-gray-200 shadow-gray-200/60"
            }`}
          >
            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none ${
              isDarkMode ? "bg-primary-500/10" : "bg-primary-500/10"
            }`} />
            <div className="relative flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-primary-500/15 text-primary-500">
                {card.category}
              </span>
              <span className={`text-xs font-medium ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                {index + 1} / {order.length}
                {results[order[index]] ? ` · ${results[order[index]] === "got" ? "✓" : "↺"}` : ""}
              </span>
            </div>
            <p className={`relative text-base sm:text-xl font-semibold leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {card.question}
            </p>

            {shown ? (
              <div
                className={`relative mt-5 pt-4 border-t border-dashed animate-fade-in ${
                  isDarkMode ? "border-dark-600" : "border-gray-300"
                }`}
              >
                {typedAnswer.trim() && (
                  <div className={`mb-3.5 rounded-xl border p-3 ${isDarkMode ? "bg-dark-900/60 border-dark-600" : "bg-gray-50 border-gray-200"}`}>
                    <p className={`text-[10px] font-semibold uppercase tracking-wide mb-1 ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                      Your answer
                    </p>
                    <p className={`text-sm whitespace-pre-wrap leading-relaxed ${isDarkMode ? "text-dark-300" : "text-gray-600"}`}>
                      {typedAnswer}
                    </p>
                  </div>
                )}
                <ul className="space-y-1.5">
                  {card.answer.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed">
                      <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isDarkMode ? "bg-primary-400" : "bg-primary-500"}`} />
                      <span className={isDarkMode ? "text-dark-200" : "text-gray-700"}>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-2 mt-3.5 flex-wrap">
                  {card.source ? (
                    <p className={`text-[11px] ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                      Source: {card.source}
                    </p>
                  ) : (
                    <span />
                  )}
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className={`flex items-center gap-1 text-[11px] font-medium transition-colors flex-shrink-0 ${
                      isDarkMode ? "text-dark-500 hover:text-red-400" : "text-gray-400 hover:text-red-500"
                    }`}
                  >
                    <HiOutlineFlag className="w-3.5 h-3.5" />
                    Report this card
                  </button>
                </div>
                {deck.preClassUrl && card.source?.toLowerCase().includes("pre-class") && (
                  <a
                    href={deck.preClassUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${
                      isDarkMode ? "text-primary-400 hover:text-primary-300" : "text-primary-600 hover:text-primary-700"
                    }`}
                  >
                    <HiOutlineFolderOpen className="w-3.5 h-3.5" />
                    View pre-class material
                  </a>
                )}
              </div>
            ) : (
              <div className="relative mt-5 flex-1 flex flex-col">
                <label className={`text-[11px] font-semibold uppercase tracking-wide mb-1.5 ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                  Type your answer (optional)
                </label>
                <textarea
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  placeholder="Jot down what you recall, then reveal to check yourself..."
                  rows={3}
                  className={`w-full px-3 py-2.5 rounded-xl border text-sm transition-colors outline-none resize-none focus:ring-2 focus:ring-primary-500/30 ${
                    isDarkMode
                      ? "bg-dark-900/50 border-dark-600 text-white placeholder:text-dark-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
                <p className={`mt-auto pt-3 text-center text-xs italic ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                  Recall your answer first, then reveal — we'll show it next to the real answer so you can self-mark.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2.5 mt-3.5">
            {shown ? (
              <>
                <button
                  onClick={() => mark("miss")}
                  className="flex-1 py-3 rounded-xl text-sm font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-red-600/20"
                >
                  <HiOutlineXMark className="w-4 h-4" />
                  Review again
                </button>
                <button
                  onClick={() => mark("got")}
                  className="flex-1 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/20"
                >
                  <HiOutlineCheck className="w-4 h-4" />
                  Got it
                </button>
              </>
            ) : (
              <button
                onClick={handleReveal}
                className="flex-1 py-3 rounded-xl text-sm font-semibold bg-primary-500 hover:bg-primary-600 text-white transition-colors shadow-lg shadow-primary-500/20"
              >
                Show answer
              </button>
            )}
          </div>

          {/* Prev/Next */}
          <div className="flex justify-between mt-2.5">
            <button
              onClick={() => {
                if (index > 0) {
                  setIndex((i) => i - 1);
                  setShown(false);
                  setTypedAnswer("");
                }
              }}
              disabled={index === 0}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-colors disabled:opacity-40 ${
                isDarkMode
                  ? "border-dark-600 text-dark-300 hover:bg-dark-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              ← Prev
            </button>
            <button
              onClick={() => {
                setIndex((i) => Math.min(i + 1, order.length));
                setShown(false);
                setTypedAnswer("");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                isDarkMode
                  ? "border-dark-600 text-dark-300 hover:bg-dark-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Next →
            </button>
          </div>

          <QuestionReportModal
            isDarkMode={isDarkMode}
            isOpen={reportModalOpen}
            onClose={() => setReportModalOpen(false)}
            onSubmit={handleSubmitReport}
            isSubmitting={isSubmitting}
            answerFormat="text"
            question={{
              id: `${deck.id}-${order[index]}`,
              questionNumber: index + 1,
              question: card.question,
            }}
            quizContext={{
              quizType: "flashcard",
              examSession: deck.title,
              courseName: courseName,
            }}
          />
        </>
      )}
    </div>
  );
}

// Standalone mode: one random card drawn from every course and every week,
// reveal it, answer it, then draw another random one — repeat indefinitely.
// Unlike DeckPlayer, there is no deck/category scoping and no got/miss
// tracking; it's a pure shuffle-and-recall loop across the whole bank.
// Progress ("X of N seen") persists in localStorage per scope (global, or
// per course), so leaving and returning to Random Card keeps the count —
// it resets only if the user explicitly resets it.
const seenStorageKey = (courseId) => `mcq-random-card-seen:${courseId ?? "all"}`;

function loadSeenSet(courseId) {
  try {
    const raw = localStorage.getItem(seenStorageKey(courseId));
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveSeenSet(courseId, set) {
  try {
    localStorage.setItem(seenStorageKey(courseId), JSON.stringify([...set]));
  } catch {
    // localStorage unavailable — progress just won't persist across visits
  }
}

function RandomCardMode({ isDarkMode, onBack, courseId, courseName: scopedCourseName }) {
  const [entry, setEntry] = useState(() => pickRandomCard(null, courseId));
  const [shown, setShown] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const { submitQuestionReport, isSubmitting } = useCreateQuestionReport();
  const [seenSet, setSeenSet] = useState(() => {
    const s = loadSeenSet(courseId);
    if (entry) s.add(entry.seenKey);
    return s;
  });
  const totalForScope = courseId ? cardCountByCourse[courseId] : allCardsIndex.length;

  useEffect(() => {
    saveSeenSet(courseId, seenSet);
  }, [seenSet, courseId]);

  const resetProgress = () => {
    const fresh = new Set();
    if (entry) fresh.add(entry.seenKey);
    setSeenSet(fresh);
  };

  const drawAnother = () => {
    setEntry((prev) => {
      const next = pickRandomCard(prev, courseId);
      if (next) setSeenSet((s) => new Set(s).add(next.seenKey));
      return next;
    });
    setShown(false);
    setTypedAnswer("");
  };

  const handleSubmitReport = (reportData) => {
    submitQuestionReport(reportData, {
      onSuccess: () => setReportModalOpen(false),
    });
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT" || e.target?.isContentEditable) return;
      if (e.code === "Space") {
        e.preventDefault();
        if (!shown) setShown(true);
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        drawAnother();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown, entry]);

  if (!entry) {
    return (
      <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto text-center">
        <p className={isDarkMode ? "text-dark-300" : "text-gray-600"}>
          No flashcards available{scopedCourseName ? ` for ${scopedCourseName}` : ""}.
        </p>
        <button onClick={onBack} className="mt-4 text-primary-500 font-semibold">
          Back to decks
        </button>
      </div>
    );
  }

  const { card, courseName, deck } = entry;

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className={`flex items-center gap-2 mb-4 text-sm font-medium transition-colors ${
          isDarkMode ? "text-dark-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
        }`}
      >
        <HiOutlineArrowLeft className="w-4 h-4" />
        Back to decks
      </button>

      <h1 className={`text-xl sm:text-2xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Random Card{scopedCourseName ? ` — ${scopedCourseName}` : ""}
      </h1>
      <p className={`text-xs sm:text-sm mb-2 ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
        {scopedCourseName
          ? `One random card from any week in ${scopedCourseName}. Try to answer out loud or on paper before revealing.`
          : "One random card from any course, any week. Try to answer out loud or on paper before revealing."}
      </p>

      {/* Progress counter — how many distinct cards drawn so far in this
          scope, out of the total available. Persists across visits via
          localStorage; "Reset" starts the count over. */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className={`text-xs sm:text-sm font-semibold ${isDarkMode ? "text-primary-400" : "text-primary-600"}`}>
          {seenSet.size} of {totalForScope} seen
        </span>
        <button
          onClick={resetProgress}
          className={`text-[11px] sm:text-xs font-medium transition-colors ${
            isDarkMode ? "text-dark-500 hover:text-dark-300" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Reset count
        </button>
      </div>

      <div
        className={`relative overflow-hidden rounded-2xl border p-5 sm:p-7 min-h-[280px] flex flex-col shadow-xl ${
          isDarkMode ? "bg-dark-800/70 border-dark-700 shadow-black/20" : "bg-white border-gray-200 shadow-gray-200/60"
        }`}
      >
        <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none bg-primary-500/10`} />
        <div className="relative flex flex-wrap items-center gap-1.5 mb-4">
          <span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-primary-500/15 text-primary-500">
            {courseName}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold ${
              isDarkMode ? "bg-dark-700 text-dark-300" : "bg-gray-100 text-gray-600"
            }`}
          >
            {deck.title}
          </span>
          <span className={`text-[11px] sm:text-xs font-medium ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
            {card.category}
          </span>
        </div>
        <p className={`relative text-base sm:text-xl font-semibold leading-relaxed ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {card.question}
        </p>

        {shown ? (
          <div
            className={`relative mt-5 pt-4 border-t border-dashed animate-fade-in ${
              isDarkMode ? "border-dark-600" : "border-gray-300"
            }`}
          >
            {typedAnswer.trim() && (
              <div className={`mb-3.5 rounded-xl border p-3 ${isDarkMode ? "bg-dark-900/60 border-dark-600" : "bg-gray-50 border-gray-200"}`}>
                <p className={`text-[10px] font-semibold uppercase tracking-wide mb-1 ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                  Your answer
                </p>
                <p className={`text-sm whitespace-pre-wrap leading-relaxed ${isDarkMode ? "text-dark-300" : "text-gray-600"}`}>
                  {typedAnswer}
                </p>
              </div>
            )}
            <ul className="space-y-1.5">
              {card.answer.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed">
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isDarkMode ? "bg-primary-400" : "bg-primary-500"}`} />
                  <span className={isDarkMode ? "text-dark-200" : "text-gray-700"}>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-2 mt-3.5 flex-wrap">
              {card.source ? (
                <p className={`text-[11px] ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
                  Source: {card.source}
                </p>
              ) : (
                <span />
              )}
              <button
                onClick={() => setReportModalOpen(true)}
                className={`flex items-center gap-1 text-[11px] font-medium transition-colors flex-shrink-0 ${
                  isDarkMode ? "text-dark-500 hover:text-red-400" : "text-gray-400 hover:text-red-500"
                }`}
              >
                <HiOutlineFlag className="w-3.5 h-3.5" />
                Report this card
              </button>
            </div>
            {deck.preClassUrl && card.source?.toLowerCase().includes("pre-class") && (
              <a
                href={deck.preClassUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${
                  isDarkMode ? "text-primary-400 hover:text-primary-300" : "text-primary-600 hover:text-primary-700"
                }`}
              >
                <HiOutlineFolderOpen className="w-3.5 h-3.5" />
                View pre-class material
              </a>
            )}
          </div>
        ) : (
          <div className="relative mt-5 flex-1 flex flex-col">
            <label className={`text-[11px] font-semibold uppercase tracking-wide mb-1.5 ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
              Type your answer (optional)
            </label>
            <textarea
              value={typedAnswer}
              onChange={(e) => setTypedAnswer(e.target.value)}
              placeholder="Jot down what you recall, then reveal to check yourself..."
              rows={3}
              className={`w-full px-3 py-2.5 rounded-xl border text-sm transition-colors outline-none resize-none focus:ring-2 focus:ring-primary-500/30 ${
                isDarkMode
                  ? "bg-dark-900/50 border-dark-600 text-white placeholder:text-dark-500"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
              }`}
            />
            <p className={`mt-auto pt-3 text-center text-xs italic ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}>
              Recall your answer first, then reveal — we'll show it next to the real answer so you can self-mark.
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-2.5 mt-3.5">
        {shown ? (
          <button
            onClick={drawAnother}
            className="flex-1 py-3 rounded-xl text-sm font-semibold bg-primary-500 hover:bg-primary-600 text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-primary-500/20"
          >
            <HiOutlineArrowPath className="w-4 h-4" />
            Next random card
          </button>
        ) : (
          <button
            onClick={() => setShown(true)}
            className="flex-1 py-3 rounded-xl text-sm font-semibold bg-primary-500 hover:bg-primary-600 text-white transition-colors shadow-lg shadow-primary-500/20"
          >
            Show answer
          </button>
        )}
      </div>

      <QuestionReportModal
        isDarkMode={isDarkMode}
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onSubmit={handleSubmitReport}
        isSubmitting={isSubmitting}
        answerFormat="text"
        question={{
          id: `${deck.id}-${entry.cardIdx}`,
          questionNumber: null,
          question: card.question,
        }}
        quizContext={{
          quizType: "flashcard",
          examSession: deck.title,
          courseName,
        }}
      />
    </div>
  );
}

function McqFlashcards() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeCourseId, setActiveCourseId] = useState(courseEntries[0]?.[0] ?? null);
  const [activeDeck, setActiveDeck] = useState(null); // deck object
  const [activeDeckCourseName, setActiveDeckCourseName] = useState(null);
  const [startCardIdx, setStartCardIdx] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [randomMode, setRandomMode] = useState(false);

  const searchResults = useMemo(() => searchCards(searchQuery), [searchQuery]);

  const openResult = (result) => {
    setActiveCourseId(result.courseId);
    setActiveDeckCourseName(result.courseName);
    setStartCardIdx(result.cardIdx);
    setActiveDeck(result.deck);
  };

  if (randomMode) {
    // randomMode is either `true` (global, every course) or a courseId
    // string (scoped to just that course, every week within it).
    const scopedCourseId = typeof randomMode === "string" ? randomMode : null;
    const scopedCourseName = scopedCourseId ? flashcards[scopedCourseId]?.courseName : null;
    return (
      <RandomCardMode
        isDarkMode={isDarkMode}
        onBack={() => setRandomMode(false)}
        courseId={scopedCourseId}
        courseName={scopedCourseName}
      />
    );
  }

  if (activeDeck) {
    return (
      <DeckPlayer
        deck={activeDeck}
        courseName={activeDeckCourseName}
        isDarkMode={isDarkMode}
        startCardIdx={startCardIdx}
        onBack={() => {
          setActiveDeck(null);
          setStartCardIdx(null);
        }}
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
        <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-amber-500/20 rounded-xl">
              <HiOutlineBolt className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-primary-500">Flashcards</h1>
              <p className={`text-xs sm:text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
                Active recall decks — try to answer before revealing, then mark what you still need to review
              </p>
            </div>
          </div>
          <button
            onClick={() => setRandomMode(true)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary-500 hover:bg-primary-600 text-white transition-colors shadow-lg shadow-primary-500/20 flex-shrink-0"
          >
            <HiOutlineQuestionMarkCircle className="w-4 h-4" />
            Random Card
          </button>
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
          Unlike MCQs, these test free recall — try to answer out loud or on paper{" "}
          <span className="font-semibold">before</span> revealing the answer. Use{" "}
          <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isDarkMode ? "bg-dark-700 text-dark-200" : "bg-white text-gray-700 border border-gray-200"}`}>Space</kbd>{" "}
          to reveal,{" "}
          <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isDarkMode ? "bg-dark-700 text-dark-200" : "bg-white text-gray-700 border border-gray-200"}`}>1</kbd>{" "}
          for got it,{" "}
          <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isDarkMode ? "bg-dark-700 text-dark-200" : "bg-white text-gray-700 border border-gray-200"}`}>2</kbd>{" "}
          to review again.
        </p>
      </div>

      {/* Global search — searches every card's question, answer, category
          and source across every deck and every course at once, live as
          the user types, so they don't have to guess which week/course a
          recall lives under. */}
      <div className="relative mb-4 sm:mb-5">
        <HiOutlineMagnifyingGlass
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${
            isDarkMode ? "text-dark-500" : "text-gray-400"
          }`}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search every course & week — e.g. 'Madukolu v Nkemdilim' or 'subject matter jurisdiction'"
          className={`w-full pl-10 sm:pl-11 pr-9 py-2.5 sm:py-3 rounded-xl text-sm border outline-none transition-colors focus:ring-2 focus:ring-primary-500/30 ${
            isDarkMode
              ? "bg-dark-800/60 border-dark-700 text-white placeholder:text-dark-500"
              : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
          }`}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className={`absolute right-3 top-1/2 -translate-y-1/2 ${
              isDarkMode ? "text-dark-500 hover:text-dark-300" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <HiOutlineXMark className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchQuery.trim() ? (
        <div className="mb-5 sm:mb-6">
          <p className={`text-xs font-semibold mb-2 ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
            {searchResults.length === 0
              ? "No matches"
              : `${searchResults.length} match${searchResults.length === 1 ? "" : "es"} across all courses`}
          </p>
          {searchResults.length === 0 ? (
            <div
              className={`rounded-2xl border p-6 text-center text-sm ${
                isDarkMode ? "bg-dark-800/50 border-dark-700 text-dark-400" : "bg-white border-gray-200 text-gray-500"
              }`}
            >
              Try a shorter phrase, a case name, or a keyword from the principle.
            </div>
          ) : (
            <div className="space-y-2">
              {searchResults.map((result, i) => {
                const q = searchQuery;
                const matchedAnswer = (result.card.answer || []).find((a) =>
                  a.toLowerCase().includes(q.trim().toLowerCase())
                );
                const questionMatches = result.card.question.toLowerCase().includes(q.trim().toLowerCase());
                return (
                  <button
                    key={`${result.deck.id}-${result.cardIdx}-${i}`}
                    onClick={() => openResult(result)}
                    className={`w-full text-left rounded-2xl border p-3.5 sm:p-4 transition-all hover:scale-[1.005] active:scale-[0.995] ${
                      isDarkMode
                        ? "bg-dark-800/50 border-dark-700 hover:border-primary-500/50"
                        : "bg-white border-gray-200 hover:border-primary-300 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary-500/15 text-primary-500">
                        {result.courseName}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          isDarkMode ? "bg-dark-700 text-dark-300" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {result.deck.title}
                      </span>
                      <span
                        className={`text-[10px] font-medium ${isDarkMode ? "text-dark-500" : "text-gray-400"}`}
                      >
                        {result.card.category}
                      </span>
                    </div>
                    <p
                      className={`text-sm font-semibold leading-snug ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      <Highlight text={result.card.question} query={q} isDarkMode={isDarkMode} />
                    </p>
                    {!questionMatches && matchedAnswer && (
                      <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? "text-dark-300" : "text-gray-600"}`}>
                        <Highlight text={matchedAnswer} query={q} isDarkMode={isDarkMode} />
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <>
      {/* Course tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-0.5 -mx-0.5 px-0.5 mb-4 sm:mb-5">
        {courseEntries.map(([id, course]) => {
          const deckCount = course.decks.length;
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
              {deckCount > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    activeCourseId === id
                      ? "bg-white/20 text-white"
                      : isDarkMode
                      ? "bg-dark-700 text-dark-400"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {deckCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Course-scoped random card — pulls from any week within just this
          course, unlike the header's Random Card which spans every course. */}
      {activeCourse && activeCourse.decks.length > 0 && (
        <button
          onClick={() => setRandomMode(activeCourseId)}
          className={`w-full flex items-center justify-center gap-2 mb-4 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
            isDarkMode
              ? "bg-dark-800/60 border-dark-700 text-dark-200 hover:border-primary-500/50"
              : "bg-white border-gray-200 text-gray-700 hover:border-primary-300"
          }`}
        >
          <HiOutlineQuestionMarkCircle className="w-4 h-4 text-primary-500" />
          Random Card — {activeCourse.courseName} only
        </button>
      )}

      {/* Deck list for active course */}
      {!activeCourse || activeCourse.decks.length === 0 ? (
        <div
          className={`rounded-2xl border p-8 sm:p-10 text-center ${
            isDarkMode ? "bg-dark-800/50 border-dark-700" : "bg-white border-gray-200"
          }`}
        >
          <div className={`inline-flex p-3 rounded-2xl mb-3 ${isDarkMode ? "bg-dark-700" : "bg-gray-100"}`}>
            <HiOutlineRectangleStack className={`w-6 h-6 ${isDarkMode ? "text-dark-400" : "text-gray-400"}`} />
          </div>
          <h2 className={`text-base font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            No decks yet for {activeCourse?.courseName}
          </h2>
          <p className={`text-xs sm:text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
            Active recall decks for this course are coming soon.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {activeCourse.decks.map((deck) => (
            <button
              key={deck.id}
              onClick={() => {
                setActiveDeckCourseName(activeCourse.courseName);
                setActiveDeck(deck);
              }}
              className={`w-full flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all hover:scale-[1.01] active:scale-[0.99] ${
                isDarkMode
                  ? "bg-dark-800/50 border-dark-700 hover:border-primary-500/50"
                  : "bg-white border-gray-200 hover:border-primary-300 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${isDarkMode ? "bg-primary-500/15" : "bg-primary-50"}`}>
                  <HiOutlineRectangleStack className="w-5 h-5 text-primary-500" />
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold truncate ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {deck.title}
                  </p>
                  <p className={`text-xs mt-0.5 ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
                    {deck.cards.length} cards
                  </p>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-500/15 text-primary-500 flex-shrink-0">
                Study
              </span>
            </button>
          ))}
        </div>
      )}
        </>
      )}
    </div>
  );
}

export default McqFlashcards;
