import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";
import flashcards from "../data/flashcards";
import QuestionReportModal from "../features/feedback/QuestionReportModal";
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
} from "react-icons/hi2";

const courseEntries = Object.entries(flashcards); // [[courseId, {courseName, decks}], ...]

function shuffleArray(arr) {
  const copy = [...arr];
  for (let a = copy.length - 1; a > 0; a--) {
    const b = Math.floor(Math.random() * (a + 1));
    [copy[a], copy[b]] = [copy[b], copy[a]];
  }
  return copy;
}

function DeckPlayer({ deck, courseName, isDarkMode, onBack }) {
  const categories = useMemo(
    () => ["All", ...new Set(deck.cards.map((c) => c.category))],
    [deck]
  );
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState([]);
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [results, setResults] = useState({}); // cardIdx -> "got" | "miss"
  const [missedOnly, setMissedOnly] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [reportModalOpen, setReportModalOpen] = useState(false);
  // Card reports are UI-only for flashcards — nothing is sent to Supabase or
  // any backend. We just acknowledge it locally so the person feels heard.

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
    setIndex(0);
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

  const handleSubmitReport = () => {
    // Local-only: no API call, nothing persisted. Just close the modal and
    // let the person know their note was noted for this session.
    setReportModalOpen(false);
    toast.success("Thanks — noted for this card.");
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
            isSubmitting={false}
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

function McqFlashcards() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeCourseId, setActiveCourseId] = useState(courseEntries[0]?.[0] ?? null);
  const [activeDeck, setActiveDeck] = useState(null); // deck object

  if (activeDeck) {
    const deckCourse = courseEntries.find(([id]) => id === activeCourseId)?.[1];
    return (
      <DeckPlayer
        deck={activeDeck}
        courseName={deckCourse?.courseName}
        isDarkMode={isDarkMode}
        onBack={() => setActiveDeck(null)}
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
            <HiOutlineBolt className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary-500">Flashcards</h1>
            <p className={`text-xs sm:text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
              Active recall decks — try to answer before revealing, then mark what you still need to review
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
              onClick={() => setActiveDeck(deck)}
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
    </div>
  );
}

export default McqFlashcards;
