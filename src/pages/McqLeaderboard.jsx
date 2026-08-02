import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  useExamLeaderboard,
  useExamLeaderboardSessions,
} from "../features/mcq/useExamLeaderboard";
import Spinner from "../ui/Spinner";
import {
  HiOutlineArrowLeft,
  HiOutlineTrophy,
  HiOutlineClock,
} from "react-icons/hi2";

function McqLeaderboard() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [selectedLeaderboardSession, setSelectedLeaderboardSession] = useState(null);
  const { sessions: leaderboardSessions } = useExamLeaderboardSessions();
  const { isLoading: leaderboardLoading, leaderboard } = useExamLeaderboard(
    10,
    selectedLeaderboardSession
  );

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto">
      {/* ========== HEADER ========== */}
      <div className="mb-5 sm:mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className={`flex items-center gap-2 mb-2 text-sm font-medium transition-colors ${
            isDarkMode
              ? "text-dark-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-yellow-500/20 rounded-xl">
            <HiOutlineTrophy className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary-500">
              Exam Leaderboard
            </h1>
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Top 10 by best exam-styled score, fastest time breaks ties
            </p>
          </div>
        </div>
      </div>

      {/* ========== LEADERBOARD CARD ========== */}
      <div
        className={`rounded-xl border p-3.5 sm:p-5 ${
          isDarkMode
            ? "bg-dark-800/50 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Session tabs — filter leaderboard by exam session */}
        {leaderboardSessions && leaderboardSessions.length > 0 && (
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 -mx-0.5 px-0.5 mb-3 sm:mb-4">
            <button
              onClick={() => setSelectedLeaderboardSession(null)}
              className={`px-2.5 py-1.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedLeaderboardSession === null
                  ? "bg-primary-500 text-white"
                  : isDarkMode
                  ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Sessions
            </button>
            {leaderboardSessions.map((s) => (
              <button
                key={s.session_id}
                onClick={() => setSelectedLeaderboardSession(s.session_id)}
                className={`px-2.5 py-1.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedLeaderboardSession === s.session_id
                    ? "bg-primary-500 text-white"
                    : isDarkMode
                    ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {s.session} {s.year}
              </button>
            ))}
          </div>
        )}

        {leaderboardLoading ? (
          <div className="flex items-center justify-center py-8">
            <Spinner />
          </div>
        ) : !leaderboard || leaderboard.length === 0 ? (
          <p className={`text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
            No exam-styled attempts yet. Be the first to make the leaderboard!
          </p>
        ) : (
          <div className="space-y-1.5 sm:space-y-2">
            {leaderboard.map((entry) => {
              const isTopThree = entry.rank <= 3;
              const medalColor =
                entry.rank === 1
                  ? "text-yellow-500"
                  : entry.rank === 2
                  ? "text-gray-400"
                  : entry.rank === 3
                  ? "text-amber-600"
                  : isDarkMode
                  ? "text-dark-400"
                  : "text-gray-400";

              return (
                <div
                  key={`${entry.rank}-${entry.user_name}`}
                  className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5 sm:py-3 ${
                    isTopThree
                      ? isDarkMode
                        ? "border-yellow-500/30 bg-yellow-500/5"
                        : "border-yellow-300 bg-yellow-50"
                      : isDarkMode
                      ? "border-dark-700 bg-dark-800/30"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 ${
                        isTopThree
                          ? "bg-yellow-500/20"
                          : isDarkMode
                          ? "bg-dark-700"
                          : "bg-gray-200"
                      } ${medalColor}`}
                    >
                      {entry.rank}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {entry.user_name}
                      </p>
                      <p
                        className={`text-[10px] sm:text-xs ${
                          isDarkMode ? "text-dark-500" : "text-gray-400"
                        }`}
                      >
                        {entry.session} {entry.year} · {entry.attempts} attempt
                        {entry.attempts !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p
                        className={`text-xs sm:text-sm font-bold ${
                          entry.best_percentage >= 75
                            ? "text-green-500"
                            : entry.best_percentage >= 50
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {entry.best_percentage}%
                      </p>
                      <p
                        className={`text-[10px] sm:text-xs ${
                          isDarkMode ? "text-dark-500" : "text-gray-400"
                        }`}
                      >
                        {entry.best_score}/{entry.best_total_questions}
                      </p>
                    </div>
                    <div className="text-right hidden xs:block">
                      <div
                        className={`text-[10px] sm:text-xs font-medium flex items-center justify-end gap-1 ${
                          isDarkMode ? "text-dark-400" : "text-gray-500"
                        }`}
                      >
                        <HiOutlineClock className="w-3 h-3" />
                        {Math.floor(entry.best_time_elapsed / 60)}:
                        {(entry.best_time_elapsed % 60).toString().padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default McqLeaderboard;
