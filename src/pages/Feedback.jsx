import React, { useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import { useIsAdmin } from "../features/feedback/useIsAdmin";
import { useUserFeedback } from "../features/feedback/useUserFeedback";
import { useCreateFeedback } from "../features/feedback/useCreateFeedback";
import { useDeleteFeedback } from "../features/feedback/useDeleteFeedback";
import { useUpdateFeedback } from "../features/feedback/useUpdateFeedbackStatus";
import Spinner from "../ui/Spinner";
import {
  HiOutlineBugAnt,
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePlusCircle,
  HiOutlineFunnel,
  HiOutlineXMark,
  HiOutlineTrash,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineMagnifyingGlass,
  HiOutlineInboxStack,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

// ==========================================
// CONSTANTS
// ==========================================
const TYPES = [
  {
    value: "bug",
    label: "Bug / Wrong Answer",
    icon: HiOutlineBugAnt,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    badgeBg: "bg-red-500",
  },
  {
    value: "feature",
    label: "Feature Request",
    icon: HiOutlineLightBulb,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    badgeBg: "bg-amber-500",
  },
  {
    value: "feedback",
    label: "General Feedback",
    icon: HiOutlineChatBubbleLeftRight,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    badgeBg: "bg-blue-500",
  },
];

const STATUSES = {
  pending: {
    label: "Pending",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/15",
    borderColor: "border-yellow-500/30",
    icon: HiOutlineClock,
  },
  in_review: {
    label: "In Review",
    color: "text-blue-500",
    bgColor: "bg-blue-500/15",
    borderColor: "border-blue-500/30",
    icon: HiOutlineEye,
  },
  resolved: {
    label: "Resolved",
    color: "text-green-500",
    bgColor: "bg-green-500/15",
    borderColor: "border-green-500/30",
    icon: HiOutlineCheckCircle,
  },
  closed: {
    label: "Closed",
    color: "text-gray-500",
    bgColor: "bg-gray-500/15",
    borderColor: "border-gray-500/30",
    icon: HiOutlineXMark,
  },
};

const getTypeConfig = (type) =>
  TYPES.find((t) => t.value === type) || TYPES[2];
const getStatusConfig = (status) => STATUSES[status] || STATUSES.pending;

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
};

// ==========================================
// DETAIL MODAL
// ==========================================
function FeedbackDetailModal({
  item,
  isDarkMode,
  isAdmin,
  onClose,
  onDelete,
  isDeleting,
  onSaveAdminChanges,
  isUpdating,
}) {
  const [editStatus, setEditStatus] = useState(item?.status || "pending");
  const [editComment, setEditComment] = useState(item?.admin_comment || "");

  if (!item) return null;

  const typeConfig = getTypeConfig(item.type);
  const statusConfig = getStatusConfig(item.status);
  const TypeIcon = typeConfig.icon;
  const StatusIcon = statusConfig.icon;

  const statusChanged = editStatus !== item.status;
  const commentChanged = editComment !== (item.admin_comment || "");
  const canUpdate = statusChanged || commentChanged;

  function handleSave() {
    onSaveAdminChanges({
      id: item.id,
      status: editStatus,
      admin_comment: editComment.trim() || null,
    });
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
        {/* Header */}
        <div
          className={`px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0 ${
            isDarkMode ? "border-dark-700" : "border-gray-100"
          }`}
        >
          {/* Mobile drag handle */}
          <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-dark-600 mx-auto mb-3 sm:hidden" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${typeConfig.bgColor}`}
              >
                <TypeIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${typeConfig.color}`} />
              </div>
              <div className="min-w-0">
                <span
                  className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wide ${typeConfig.color}`}
                >
                  {typeConfig.label}
                </span>
                <h3
                  className={`text-base sm:text-lg font-bold leading-tight truncate ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                isDarkMode
                  ? "hover:bg-dark-800 text-dark-400"
                  : "hover:bg-gray-100 text-gray-400"
              }`}
            >
              <HiOutlineXMark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body — scrollable */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-4 overflow-y-auto flex-1">
          {/* Status badge — read-only for everyone */}
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Status:
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConfig.bgColor} ${statusConfig.color} ${statusConfig.borderColor}`}
            >
              <StatusIcon className="w-3.5 h-3.5" />
              {statusConfig.label}
            </span>
          </div>

          {/* Related quiz info */}
          {item.related_quiz && (
            <div
              className={`rounded-lg p-3 border ${
                isDarkMode
                  ? "bg-dark-800/50 border-dark-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <span
                className={`text-xs font-medium block mb-1 ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Related Quiz
              </span>
              <span
                className={`text-sm font-semibold break-words ${
                  isDarkMode ? "text-dark-200" : "text-gray-800"
                }`}
              >
                {item.related_quiz}
                {item.related_question_number
                  ? ` — Question ${item.related_question_number}`
                  : ""}
              </span>
            </div>
          )}

          {/* Description */}
          <div>
            <span
              className={`text-xs font-medium block mb-2 ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Description
            </span>
            <p
              className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${
                isDarkMode ? "text-dark-300" : "text-gray-700"
              }`}
            >
              {item.description}
            </p>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1.5">
            <HiOutlineClock
              className={`w-3.5 h-3.5 flex-shrink-0 ${
                isDarkMode ? "text-dark-500" : "text-gray-400"
              }`}
            />
            <span
              className={`text-xs ${
                isDarkMode ? "text-dark-500" : "text-gray-400"
              }`}
            >
              Submitted{" "}
              {new Date(item.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {/* Admin comment — read-only display for regular users */}
          {!isAdmin && item.admin_comment && (
            <div
              className={`rounded-lg p-3 border ${
                isDarkMode
                  ? "bg-dark-800/80 border-primary-500/20"
                  : "bg-primary-50 border-primary-200/50"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <HiOutlineShieldCheck
                  className={`w-3.5 h-3.5 ${
                    isDarkMode ? "text-primary-400" : "text-primary-600"
                  }`}
                />
                <span
                  className={`text-[10px] font-semibold ${
                    isDarkMode ? "text-primary-400" : "text-primary-600"
                  }`}
                >
                  Admin Response
                </span>
              </div>
              <p
                className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${
                  isDarkMode ? "text-dark-300" : "text-gray-700"
                }`}
              >
                {item.admin_comment}
              </p>
            </div>
          )}

          {/* ====== ADMIN ACTIONS — only visible to admins ====== */}
          {isAdmin && (
            <div
              className={`rounded-xl p-3 sm:p-4 border space-y-3 sm:space-y-4 ${
                isDarkMode
                  ? "bg-dark-800/50 border-primary-500/30"
                  : "bg-primary-50/50 border-primary-200/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <HiOutlineShieldCheck
                  className={`w-4 h-4 ${
                    isDarkMode ? "text-primary-400" : "text-primary-600"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-wide ${
                    isDarkMode ? "text-primary-400" : "text-primary-600"
                  }`}
                >
                  Admin Actions
                </span>
              </div>

              {/* Status dropdown */}
              <div>
                <label
                  className={`text-xs font-semibold block mb-1.5 ${
                    isDarkMode ? "text-dark-300" : "text-gray-600"
                  }`}
                >
                  Status
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg text-sm font-semibold border outline-none cursor-pointer transition-colors focus:ring-2 focus:ring-primary-500/30 ${
                    isDarkMode
                      ? "bg-dark-800 border-dark-700 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  {Object.entries(STATUSES).map(([key, cfg]) => (
                    <option key={key} value={key}>
                      {cfg.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Admin comment textarea */}
              <div>
                <label
                  className={`text-xs font-semibold block mb-1.5 ${
                    isDarkMode ? "text-dark-300" : "text-gray-600"
                  }`}
                >
                  Comment{" "}
                  <span
                    className={`font-normal ${
                      isDarkMode ? "text-dark-500" : "text-gray-400"
                    }`}
                  >
                    (optional)
                  </span>
                </label>
                <textarea
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  placeholder="Add a response or note..."
                  rows={3}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm outline-none resize-none transition-colors focus:ring-2 focus:ring-primary-500/30 ${
                    isDarkMode
                      ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                      : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
              </div>

              {/* Single Update button */}
              <button
                onClick={handleSave}
                disabled={isUpdating || !canUpdate}
                className="w-full px-4 py-3 rounded-lg text-sm font-semibold bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdating ? "Updating…" : "Update"}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`px-4 sm:px-6 py-3 sm:py-4 border-t flex items-center justify-between flex-shrink-0 ${
            isDarkMode ? "border-dark-700" : "border-gray-100"
          }`}
        >
          <button
            onClick={() => onDelete(item.id)}
            disabled={isDeleting}
            className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 active:bg-red-500/20 transition-colors disabled:opacity-50"
          >
            <HiOutlineTrash className="w-4 h-4" />
            {isDeleting ? "Deleting…" : "Delete"}
          </button>
          <button
            onClick={onClose}
            className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isDarkMode
                ? "bg-dark-800 text-dark-200 hover:bg-dark-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// CREATE FORM MODAL
// ==========================================
function CreateFeedbackModal({ isDarkMode, onClose, onCreate, isCreating }) {
  const [type, setType] = useState("bug");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [relatedQuiz, setRelatedQuiz] = useState("");
  const [relatedQuestionNumber, setRelatedQuestionNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onCreate(
      {
        type,
        title: title.trim(),
        description: description.trim(),
        relatedQuiz: relatedQuiz.trim() || null,
        relatedQuestionNumber: relatedQuestionNumber
          ? parseInt(relatedQuestionNumber, 10)
          : null,
      },
      { onSuccess: () => onClose() }
    );
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
          {/* Mobile drag handle */}
          <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-dark-600 mx-auto mb-3 sm:hidden" />

          <div className="flex items-center justify-between">
            <h3
              className={`text-base sm:text-lg font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Submit Feedback
            </h3>
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
          {/* Type selection */}
          <div>
            <label
              className={`text-xs font-semibold uppercase tracking-wide block mb-2 ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Type *
            </label>
            <div className="grid grid-cols-3 gap-2">
              {TYPES.map((t) => {
                const Icon = t.icon;
                const isSelected = type === t.value;
                return (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setType(t.value)}
                    className={`flex flex-col items-center gap-1 sm:gap-1.5 p-2.5 sm:p-3 rounded-xl border-2 transition-all ${
                      isSelected
                        ? `${t.borderColor} ${t.bgColor}`
                        : isDarkMode
                        ? "border-dark-700 hover:border-dark-600 bg-dark-800/50"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isSelected
                          ? t.color
                          : isDarkMode
                          ? "text-dark-400"
                          : "text-gray-400"
                      }`}
                    />
                    <span
                      className={`text-[10px] sm:text-xs font-semibold text-center leading-tight ${
                        isSelected
                          ? t.color
                          : isDarkMode
                          ? "text-dark-300"
                          : "text-gray-600"
                      }`}
                    >
                      {t.value === "bug"
                        ? "Bug"
                        : t.value === "feature"
                        ? "Feature"
                        : "Feedback"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title */}
          <div>
            <label
              className={`text-xs font-semibold uppercase tracking-wide block mb-2 ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Brief summary"
              required
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-primary-500/30 ${
                isDarkMode
                  ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>

          {/* Description */}
          <div>
            <label
              className={`text-xs font-semibold uppercase tracking-wide block mb-2 ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                type === "bug"
                  ? "Describe the issue clearly. E.g., 'Question 5 in 2009 Civil Litigation shows option A as correct, but the correct answer should be option C because...'"
                  : type === "feature"
                  ? "Describe the feature you'd like to see..."
                  : "Share your thoughts..."
              }
              required
              rows={4}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm font-medium transition-colors outline-none resize-none focus:ring-2 focus:ring-primary-500/30 ${
                isDarkMode
                  ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>

          {/* Related quiz fields (only for bugs) */}
          {type === "bug" && (
            <div
              className={`rounded-xl p-3 sm:p-4 border space-y-3 ${
                isDarkMode
                  ? "bg-dark-800/50 border-dark-700"
                  : "bg-red-50/50 border-red-200/50"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wide ${
                  isDarkMode ? "text-dark-400" : "text-red-400"
                }`}
              >
                Quiz Details (optional)
              </p>
              <input
                type="text"
                value={relatedQuiz}
                onChange={(e) => setRelatedQuiz(e.target.value)}
                placeholder="E.g., 2009 August - Civil Litigation"
                className={`w-full px-3 sm:px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-primary-500/30 ${
                  isDarkMode
                    ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                }`}
              />
              <input
                type="number"
                min="1"
                value={relatedQuestionNumber}
                onChange={(e) => setRelatedQuestionNumber(e.target.value)}
                placeholder="Question number (e.g. 5)"
                className={`w-full px-3 sm:px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-primary-500/30 ${
                  isDarkMode
                    ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>
          )}

          {/* Form buttons — stack on mobile, row on desktop */}
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
              disabled={isCreating || !title.trim() || !description.trim()}
              className="px-5 py-3 sm:py-2.5 rounded-xl text-sm font-semibold bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center"
            >
              {isCreating ? "Submitting…" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// FEEDBACK LIST ITEM CARD
// ==========================================
function FeedbackCard({ item, isDarkMode, onClick }) {
  const typeConfig = getTypeConfig(item.type);
  const statusConfig = getStatusConfig(item.status);
  const TypeIcon = typeConfig.icon;
  const StatusIcon = statusConfig.icon;

  return (
    <button
      onClick={() => onClick(item)}
      className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all hover:shadow-md active:scale-[0.99] group ${
        isDarkMode
          ? "bg-dark-800/50 border-dark-700 hover:border-dark-600 hover:bg-dark-800"
          : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
      }`}
    >
      <div className="flex items-start gap-2.5 sm:gap-3">
        <div
          className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${typeConfig.bgColor}`}
        >
          <TypeIcon className={`w-4 h-4 ${typeConfig.color}`} />
        </div>

        <div className="flex-1 min-w-0">
          <h4
            className={`text-sm font-semibold truncate mb-0.5 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {item.title}
          </h4>
          <p
            className={`text-xs leading-relaxed line-clamp-2 mb-2 ${
              isDarkMode ? "text-dark-400" : "text-gray-500"
            }`}
          >
            {item.description}
          </p>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${statusConfig.bgColor} ${statusConfig.color} ${statusConfig.borderColor}`}
            >
              <StatusIcon className="w-3 h-3" />
              {statusConfig.label}
            </span>

            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold text-white ${typeConfig.badgeBg}`}
            >
              {typeConfig.label}
            </span>

            {item.related_quiz && (
              <span
                className={`text-[10px] font-medium truncate max-w-[120px] sm:max-w-[150px] ${
                  isDarkMode ? "text-dark-500" : "text-gray-400"
                }`}
              >
                📝 {item.related_quiz}
                {item.related_question_number
                  ? ` Q${item.related_question_number}`
                  : ""}
              </span>
            )}

            <span
              className={`text-[10px] ml-auto flex-shrink-0 ${
                isDarkMode ? "text-dark-500" : "text-gray-400"
              }`}
            >
              {timeAgo(item.created_at)}
            </span>
          </div>

          {/* Admin comment preview */}
          {item.admin_comment && (
            <div
              className={`mt-2 rounded-lg px-2.5 sm:px-3 py-2 border ${
                isDarkMode
                  ? "bg-dark-800/80 border-primary-500/20"
                  : "bg-primary-50 border-primary-200/50"
              }`}
            >
              <div className="flex items-center gap-1 mb-0.5">
                <HiOutlineShieldCheck
                  className={`w-3 h-3 flex-shrink-0 ${
                    isDarkMode ? "text-primary-400" : "text-primary-600"
                  }`}
                />
                <span
                  className={`text-[10px] font-semibold ${
                    isDarkMode ? "text-primary-400" : "text-primary-600"
                  }`}
                >
                  Admin Response
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed line-clamp-2 break-words ${
                  isDarkMode ? "text-dark-300" : "text-gray-600"
                }`}
              >
                {item.admin_comment}
              </p>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

// ==========================================
// MAIN FEEDBACK PAGE (API-connected)
// ==========================================
export default function Feedback() {
  const { isDarkMode } = useTheme();
  const { isAdmin, isLoading: isLoadingAdmin } = useIsAdmin();
  const { isLoading, feedbackItems, error } = useUserFeedback(isAdmin);
  const { createFeedback, isCreating } = useCreateFeedback();
  const { deleteFeedback, isDeleting } = useDeleteFeedback();
  const { updateFeedbackItem, isUpdating } = useUpdateFeedback();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered items
  const filteredItems = useMemo(() => {
    if (!feedbackItems) return [];
    return feedbackItems.filter((item) => {
      if (filterType !== "all" && item.type !== filterType) return false;
      if (filterStatus !== "all" && item.status !== filterStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.related_quiz && item.related_quiz.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [feedbackItems, filterType, filterStatus, searchQuery]);

  // Stats
  const stats = useMemo(() => {
    if (!feedbackItems) return { total: 0, pending: 0, resolved: 0, bugs: 0 };
    return {
      total: feedbackItems.length,
      pending: feedbackItems.filter((i) => i.status === "pending").length,
      resolved: feedbackItems.filter((i) => i.status === "resolved").length,
      bugs: feedbackItems.filter((i) => i.type === "bug").length,
    };
  }, [feedbackItems]);

  function handleDelete(id) {
    deleteFeedback(id, {
      onSuccess: () => setSelectedItem(null),
    });
  }

  // When admin saves changes (status + comment), update local selectedItem instantly
  function handleSaveAdminChanges({ id, status, admin_comment }) {
    updateFeedbackItem(
      { id, status, admin_comment },
      {
        onSuccess: () => {
          setSelectedItem((prev) =>
            prev && prev.id === id
              ? { ...prev, status, admin_comment }
              : prev
          );
        },
      }
    );
  }

  if (isLoading || isLoadingAdmin) return <Spinner />;

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h1
              className={`text-xl sm:text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Feedback & Issues
            </h1>
            {isAdmin && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-500 text-white">
                ADMIN
              </span>
            )}
          </div>
          <p
            className={`text-xs sm:text-sm mt-1 ${
              isDarkMode ? "text-dark-400" : "text-gray-500"
            }`}
          >
            {isAdmin
              ? "Manage all user submissions"
              : "Report wrong answers, request features, or share feedback"}
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 transition-colors shadow-lg shadow-primary-500/25 w-full sm:w-auto justify-center"
        >
          <HiOutlinePlusCircle className="w-5 h-5" />
          New Submission
        </button>
      </div>

      {/* Stats cards — admin only */}
      {isAdmin && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-6">
          {[
            {
              label: "Total",
              value: stats.total,
              icon: HiOutlineInboxStack,
              color: "text-primary-500",
              bg: "bg-primary-500/10",
            },
            {
              label: "Pending",
              value: stats.pending,
              icon: HiOutlineClock,
              color: "text-yellow-500",
              bg: "bg-yellow-500/10",
            },
            {
              label: "Resolved",
              value: stats.resolved,
              icon: HiOutlineCheckCircle,
              color: "text-green-500",
              bg: "bg-green-500/10",
            },
            {
              label: "Bugs",
              value: stats.bugs,
              icon: HiOutlineBugAnt,
              color: "text-red-500",
              bg: "bg-red-500/10",
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`rounded-xl border p-3 sm:p-4 ${
                  isDarkMode
                    ? "bg-dark-800/50 border-dark-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${stat.bg}`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div>
                    <p
                      className={`text-lg sm:text-xl font-bold leading-none ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`text-[10px] sm:text-xs mt-0.5 ${
                        isDarkMode ? "text-dark-400" : "text-gray-500"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Filters & Search */}
      <div
        className={`rounded-xl border p-3 sm:p-4 mb-5 sm:mb-6 ${
          isDarkMode
            ? "bg-dark-800/50 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="space-y-2.5 sm:space-y-0 sm:flex sm:flex-row sm:gap-3 sm:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <HiOutlineMagnifyingGlass
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-dark-500" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search feedback..."
              className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-primary-500/30 ${
                isDarkMode
                  ? "bg-dark-800 border-dark-700 text-white placeholder:text-dark-500"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>

          {/* Type filters — visible to everyone */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 -mx-0.5 px-0.5">
            <HiOutlineFunnel
              className={`w-4 h-4 flex-shrink-0 ${
                isDarkMode ? "text-dark-500" : "text-gray-400"
              }`}
            />
            <div className="flex gap-1 flex-nowrap sm:flex-wrap">
              <button
                onClick={() => setFilterType("all")}
                className={`px-2.5 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  filterType === "all"
                    ? "bg-primary-500 text-white"
                    : isDarkMode
                    ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  onClick={() =>
                    setFilterType(filterType === t.value ? "all" : t.value)
                  }
                  className={`px-2.5 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                    filterType === t.value
                      ? `${t.badgeBg} text-white`
                      : isDarkMode
                      ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t.value === "bug"
                    ? "Bugs"
                    : t.value === "feature"
                    ? "Features"
                    : "Feedback"}
                </button>
              ))}
            </div>
          </div>

          {/* Status filters — admin only */}
          {isAdmin && (
            <div className="flex gap-1 flex-nowrap sm:flex-wrap overflow-x-auto pb-0.5 -mx-0.5 px-0.5">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-2.5 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  filterStatus === "all"
                    ? "bg-primary-500 text-white"
                    : isDarkMode
                    ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {Object.entries(STATUSES).map(([key, cfg]) => (
                <button
                  key={key}
                  onClick={() =>
                    setFilterStatus(filterStatus === key ? "all" : key)
                  }
                  className={`px-2.5 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                    filterStatus === key
                      ? "bg-primary-500 text-white"
                      : isDarkMode
                      ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cfg.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 mb-5 sm:mb-6">
          <p className="text-sm font-medium text-red-500">
            Failed to load feedback. Make sure you&apos;ve run the SQL migration
            in Supabase.
          </p>
        </div>
      )}

      {/* Empty state */}
      {!error && filteredItems.length === 0 && (
        <div
          className={`rounded-xl border p-8 sm:p-12 text-center ${
            isDarkMode
              ? "bg-dark-800/50 border-dark-700"
              : "bg-white border-gray-200"
          }`}
        >
          <HiOutlineInboxStack
            className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 ${
              isDarkMode ? "text-dark-600" : "text-gray-300"
            }`}
          />
          <h3
            className={`text-base sm:text-lg font-semibold mb-1 ${
              isDarkMode ? "text-dark-300" : "text-gray-600"
            }`}
          >
            {!feedbackItems || feedbackItems.length === 0
              ? "No submissions yet"
              : "No results found"}
          </h3>
          <p
            className={`text-xs sm:text-sm ${
              isDarkMode ? "text-dark-500" : "text-gray-400"
            }`}
          >
            {!feedbackItems || feedbackItems.length === 0
              ? "Report a wrong answer, request a feature, or share feedback."
              : "Try adjusting your filters or search query."}
          </p>
          {(!feedbackItems || feedbackItems.length === 0) && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 transition-colors"
            >
              <HiOutlinePlusCircle className="w-5 h-5" />
              Submit First Feedback
            </button>
          )}
        </div>
      )}

      {/* List */}
      {!error && filteredItems.length > 0 && (
        <div className="space-y-2 sm:space-y-3">
          {filteredItems.map((item) => (
            <FeedbackCard
              key={item.id}
              item={item}
              isDarkMode={isDarkMode}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      )}

      {/* Create modal */}
      {showCreateModal && (
        <CreateFeedbackModal
          isDarkMode={isDarkMode}
          onClose={() => setShowCreateModal(false)}
          onCreate={createFeedback}
          isCreating={isCreating}
        />
      )}

      {/* Detail modal */}
      {selectedItem && (
        <FeedbackDetailModal
          item={selectedItem}
          isDarkMode={isDarkMode}
          isAdmin={isAdmin}
          onClose={() => setSelectedItem(null)}
          onDelete={handleDelete}
          isDeleting={isDeleting}
          onSaveAdminChanges={handleSaveAdminChanges}
          isUpdating={isUpdating}
        />
      )}
    </div>
  );
}
