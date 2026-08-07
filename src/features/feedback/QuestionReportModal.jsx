import React, { useState } from "react";
import { HiOutlineXMark, HiOutlineExclamationTriangle } from "react-icons/hi2";

const BUG_TYPES = [
  {
    value: "incomplete_question",
    label: "Incomplete Question",
    requiresReason: true,
    requiresAnswer: false,
  },
  {
    value: "incorrect_answer",
    label: "Incorrect Answer",
    requiresReason: true,
    requiresAnswer: true,
  },
  {
    value: "missing_option",
    label: "Missing Option",
    requiresReason: true,
    requiresAnswer: true,
  },
  {
    value: "missing_question",
    label: "Missing Question",
    requiresReason: true,
    requiresAnswer: false,
  },
];

const ANSWER_OPTIONS = ["A", "B", "C", "D"];

export default function QuestionReportModal({
  isDarkMode,
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
  question,
  quizContext,
}) {
  const [bugType, setBugType] = useState("");
  const [proposedAnswer, setProposedAnswer] = useState("");
  const [reason, setReason] = useState("");

  if (!isOpen || !question) return null;

  const selectedBugType = BUG_TYPES.find((t) => t.value === bugType);
  const requiresReason = selectedBugType?.requiresReason ?? true;
  const requiresAnswer = selectedBugType?.requiresAnswer ?? false;

  function handleSubmit(e) {
    e.preventDefault();
    if (!bugType.trim() || !reason.trim()) return;
    if (requiresAnswer && !proposedAnswer.trim()) return;

    onSubmit({
      bugType,
      proposedAnswer: proposedAnswer || null,
      reason: reason.trim(),
      question,
      quizContext,
    });

    // Reset form
    setBugType("");
    setProposedAnswer("");
    setReason("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl border shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[85vh] flex flex-col ${
          isDarkMode
            ? "bg-dark-900 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div
          className={`px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0 ${
            isDarkMode ? "border-dark-700" : "border-gray-100"
          }`}
        >
          <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-dark-600 mx-auto mb-3 sm:hidden" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-red-500/10" : "bg-red-50"
                }`}
              >
                <HiOutlineExclamationTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3
                className={`text-base sm:text-lg font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Report This Question
              </h3>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "hover:bg-dark-800 text-dark-400"
                  : "hover:bg-gray-100 text-gray-400"
              }`}
            >
              <HiOutlineXMark className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-4 sm:px-6 py-4 sm:py-5 space-y-4 sm:space-y-5 overflow-y-auto flex-1"
        >
          {/* Bug Type */}
          <div>
            <label
              className={`text-xs font-semibold uppercase tracking-wide block mb-2 ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Bug Type *
            </label>
            <select
              value={bugType}
              onChange={(e) => setBugType(e.target.value)}
              required
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-red-500/30 cursor-pointer ${
                isDarkMode
                  ? "bg-dark-800 border-dark-700 text-white"
                  : "bg-gray-50 border-gray-200 text-gray-900"
              }`}
            >
              <option value="">Select a bug type...</option>
              {BUG_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Proposed Answer — only show if required for this bug type */}
          {requiresAnswer && (
            <div>
              <label
                className={`text-xs font-semibold uppercase tracking-wide block mb-2 ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Proposed Correct Answer *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ANSWER_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setProposedAnswer(option)}
                    className={`py-2.5 rounded-lg font-semibold text-sm transition-all border ${
                      proposedAnswer === option
                        ? "bg-green-500 text-white border-green-600"
                        : isDarkMode
                        ? "bg-dark-800 border-dark-700 text-dark-300 hover:border-dark-600"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reason */}
          {requiresReason && (
            <div>
              <label
                className={`text-xs font-semibold uppercase tracking-wide block mb-2 ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                {bugType === "incorrect_answer" || bugType === "missing_option"
                  ? "Why This is the Correct Answer"
                  : "Details"}
                *
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={
                  bugType === "incorrect_answer"
                    ? "Explain why your proposed answer is correct and why the marked answer is wrong..."
                    : bugType === "missing_option"
                    ? "Explain which option should be added and why..."
                    : bugType === "incomplete_question"
                    ? "Explain what information is missing from the question..."
                    : "Explain the issue with this question..."
                }
                required
                rows={4}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm font-medium transition-colors outline-none resize-none focus:ring-2 focus:ring-red-500/30 ${
                  isDarkMode
                    ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>
          )}

          {/* Context Info */}
          {quizContext && (
            <div
              className={`rounded-xl p-3 sm:p-4 border ${
                isDarkMode
                  ? "bg-dark-800/50 border-dark-700"
                  : "bg-blue-50/50 border-blue-200/50"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                  isDarkMode ? "text-dark-400" : "text-blue-600"
                }`}
              >
                Question Context
              </p>
              <div
                className={`space-y-1 text-xs ${
                  isDarkMode ? "text-dark-300" : "text-gray-600"
                }`}
              >
                {quizContext.quizType && (
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {quizContext.quizType === "exam"
                      ? "Exam Styled MCQ"
                      : "Topic Quiz"}
                  </p>
                )}
                {quizContext.examSession && (
                  <p>
                    <span className="font-semibold">Session:</span>{" "}
                    {quizContext.examSession}
                  </p>
                )}
                {quizContext.courseName && (
                  <p>
                    <span className="font-semibold">Course:</span>{" "}
                    {quizContext.courseName}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Form buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-5 py-3 sm:py-2.5 rounded-xl text-sm font-medium transition-colors text-center ${
                isDarkMode
                  ? "bg-dark-800 text-dark-200 hover:bg-dark-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !bugType.trim() ||
                !reason.trim() ||
                (requiresAnswer && !proposedAnswer.trim())
              }
              className="px-5 py-3 sm:py-2.5 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center"
            >
              {isSubmitting ? "Submitting…" : "Submit Report"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
