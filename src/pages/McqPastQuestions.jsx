import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import mcqQuestions from "../data/mcqQuestions";
import { useQuizAttempts } from "../features/mcq/useQuizAttempts";
import {
  HiOutlineDocumentArrowDown,
  HiOutlineDocumentText,
  HiOutlineMagnifyingGlass,
  HiOutlineAcademicCap,
  HiOutlinePlayCircle,
  HiOutlineClock,
  HiOutlineQuestionMarkCircle,
  HiOutlineFunnel,
  HiOutlineXMark,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineChartBarSquare,
  HiOutlineTrophy,
} from "react-icons/hi2";

// Downloadable files
const downloadableFiles = [
  {
    id: 1,
    name: "2009 (August) Bar Finals MCQs",
    fileName: "2009 (August) Bar Finals MCQs.docx",
    year: 2009,
    session: "August",
    fileType: "docx",
  },
  {
    id: 2,
    name: "2011 (August) Bar Finals MCQs",
    fileName: "2011 (August) Bar Finals MCQs.docx",
    year: 2011,
    session: "August",
    fileType: "docx",
  },
];

// Course color mapping
const COURSE_COLORS = {
  "Civil Litigation": {
    key: "blue",
    dot: "bg-blue-500",
    bg: "bg-blue-500/10 dark-bg-blue",
    border: "border-blue-500/30 dark-border-blue",
    text: "text-blue-500",
    badge: "bg-blue-100 text-blue-700",
    badgeDark: "bg-blue-500/20 text-blue-400",
  },
  "Criminal Litigation": {
    key: "red",
    dot: "bg-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-500",
    badge: "bg-red-100 text-red-700",
    badgeDark: "bg-red-500/20 text-red-400",
  },
  "Corporate Law Practice": {
    key: "purple",
    dot: "bg-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-500",
    badge: "bg-purple-100 text-purple-700",
    badgeDark: "bg-purple-500/20 text-purple-400",
  },
  "Property Law Practice": {
    key: "emerald",
    dot: "bg-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    badgeDark: "bg-emerald-500/20 text-emerald-400",
  },
  "Law in Practice": {
    key: "amber",
    dot: "bg-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-500",
    badge: "bg-amber-100 text-amber-700",
    badgeDark: "bg-amber-500/20 text-amber-400",
  },
};

const getColor = (name) =>
  COURSE_COLORS[name] || {
    key: "primary",
    dot: "bg-primary-500",
    bg: "bg-primary-500/10",
    border: "border-primary-500/30",
    text: "text-primary-500",
    badge: "bg-primary-100 text-primary-700",
    badgeDark: "bg-primary-500/20 text-primary-400",
  };

function McqPastQuestions() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { attempts: allAttempts } = useQuizAttempts();

  // Helper to get best score for a specific quiz
  const getQuizStats = (sessionId, courseId) => {
    if (!allAttempts) return null;
    const quizAttempts = allAttempts.filter(
      (a) => a.session_id === sessionId && a.course_id === courseId
    );
    if (quizAttempts.length === 0) return null;
    const bestAttempt = quizAttempts.reduce((best, a) =>
      a.percentage > (best?.percentage ?? -1) ? a : best
    , quizAttempts[0]);
    return {
      best: bestAttempt.percentage,
      bestScore: bestAttempt.score,
      bestTotal: bestAttempt.total_questions,
      attempts: quizAttempts.length,
    };
  };

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [collapsedYears, setCollapsedYears] = useState({});
  const [showDownloads, setShowDownloads] = useState(false);

  // Derive all quiz data
  const allQuizzes = useMemo(
    () =>
      Object.entries(mcqQuestions).flatMap(([sessionId, session]) =>
        session.courses.map((course) => ({
          sessionId,
          courseId: course.id,
          courseName: course.name,
          year: session.year,
          session: session.session,
          examTitle: session.examTitle,
          questionsCount: course.questionsCount,
        }))
      ),
    []
  );

  // Derive unique years and courses for filter chips
  const years = useMemo(
    () => [...new Set(allQuizzes.map((q) => q.year))].sort((a, b) => b - a),
    [allQuizzes]
  );

  const courseNames = useMemo(
    () => [...new Set(allQuizzes.map((q) => q.courseName))],
    [allQuizzes]
  );

  // Apply filters
  const filteredQuizzes = useMemo(() => {
    return allQuizzes.filter((q) => {
      const matchesYear =
        selectedYear === "all" || q.year === Number(selectedYear);
      const matchesCourse =
        selectedCourse === "all" || q.courseName === selectedCourse;
      const matchesSearch =
        !searchQuery ||
        q.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.year.toString().includes(searchQuery) ||
        q.session.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesCourse && matchesSearch;
    });
  }, [allQuizzes, selectedYear, selectedCourse, searchQuery]);

  // Group filtered quizzes by year (descending)
  const groupedByYear = useMemo(() => {
    const groups = {};
    filteredQuizzes.forEach((q) => {
      const key = `${q.year}-${q.session}`;
      if (!groups[key]) {
        groups[key] = {
          year: q.year,
          session: q.session,
          examTitle: q.examTitle,
          quizzes: [],
        };
      }
      groups[key].quizzes.push(q);
    });
    return Object.values(groups).sort((a, b) => b.year - a.year);
  }, [filteredQuizzes]);

  const hasActiveFilters =
    selectedYear !== "all" || selectedCourse !== "all" || searchQuery;

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedCourse("all");
    setSearchQuery("");
  };

  const toggleYearCollapse = (key) => {
    setCollapsedYears((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    link.href = `/mcq-past-questions/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats
  const totalQuizzes = allQuizzes.length;
  const totalYears = years.length;
  const totalQuestions = allQuizzes.reduce(
    (sum, q) => sum + q.questionsCount,
    0
  );

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-5xl mx-auto">
      {/* ========== HEADER ========== */}
      <div className="mb-5 sm:mb-8">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
          <div className="p-1.5 sm:p-2 bg-primary-500/20 rounded-xl">
            <HiOutlineAcademicCap className="w-6 h-6 sm:w-7 sm:h-7 text-primary-500" />
          </div>
          <h1 className="text-xl sm:text-3xl font-bold text-primary-500">
            MCQ Past Questions
          </h1>
        </div>
        <p
          className={`text-xs sm:text-sm mt-1 ${
            isDarkMode ? "text-dark-400" : "text-gray-500"
          }`}
        >
          Practice with past Bar Finals MCQ questions. Select a year and course
          to start a timed quiz.
        </p>
        {allAttempts && allAttempts.length > 0 && (
          <button
            onClick={() => navigate("/mcq-performance")}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl text-sm font-semibold transition-all hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
          >
            <HiOutlineChartBarSquare className="w-4 h-4" />
            View Performance Dashboard
          </button>
        )}
      </div>

      {/* ========== STATS BANNER ========== */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
        {[
          { label: "Years", value: totalYears, icon: "📅" },
          { label: "Quizzes", value: totalQuizzes, icon: "📝" },
          { label: "Questions", value: totalQuestions, icon: "❓" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl p-2.5 sm:p-3 text-center border ${
              isDarkMode
                ? "bg-dark-800/50 border-dark-700"
                : "bg-white border-gray-200"
            }`}
          >
            <p className="text-base sm:text-lg mb-0.5">{stat.icon}</p>
            <p
              className={`text-lg sm:text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`text-[10px] sm:text-xs ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ========== SEARCH + FILTERS ========== */}
      <div
        className={`rounded-xl border p-3 sm:p-4 mb-5 sm:mb-6 space-y-2.5 sm:space-y-3 ${
          isDarkMode
            ? "bg-dark-800/30 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Search bar */}
        <div className="relative">
          <HiOutlineMagnifyingGlass
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${
              isDarkMode ? "text-dark-500" : "text-gray-400"
            }`}
          />
          <input
            type="text"
            placeholder="Search by course, year, or session..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-9 sm:pl-10 pr-4 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${
              isDarkMode
                ? "bg-dark-800 border-dark-600 text-white placeholder-dark-500"
                : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
            }`}
          />
        </div>

        {/* Filter chips */}
        <div className="space-y-2">
          {/* Year filter chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 -mx-0.5 px-0.5">
            <HiOutlineFunnel
              className={`w-4 h-4 flex-shrink-0 ${
                isDarkMode ? "text-dark-500" : "text-gray-400"
              }`}
            />
            <div className="flex gap-1.5 flex-nowrap sm:flex-wrap">
              <button
                onClick={() => setSelectedYear("all")}
                className={`px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedYear === "all"
                    ? "bg-primary-500 text-white"
                    : isDarkMode
                    ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() =>
                    setSelectedYear(
                      selectedYear === String(year) ? "all" : String(year)
                    )
                  }
                  className={`px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                    selectedYear === String(year)
                      ? "bg-primary-500 text-white"
                      : isDarkMode
                      ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Course filter chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 -mx-0.5 px-0.5">
            <div className="w-4 flex-shrink-0" /> {/* Spacer to align with funnel icon */}
            <div className="flex gap-1.5 flex-nowrap sm:flex-wrap">
              <button
                onClick={() => setSelectedCourse("all")}
                className={`px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedCourse === "all"
                    ? "bg-primary-500 text-white"
                    : isDarkMode
                    ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Courses
              </button>
              {courseNames.map((name) => {
                const color = getColor(name);
                const isActive = selectedCourse === name;
                return (
                  <button
                    key={name}
                    onClick={() =>
                      setSelectedCourse(isActive ? "all" : name)
                    }
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : isDarkMode
                        ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${color.dot} ${
                        isActive ? "opacity-80" : ""
                      }`}
                    />
                    {name.replace(" Practice", "")}
                  </button>
                );
              })}
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-red-500 bg-red-500/10 hover:bg-red-500/20 transition-colors ml-auto flex-shrink-0"
              >
                <HiOutlineXMark className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========== RESULTS COUNT ========== */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <p
          className={`text-xs sm:text-sm font-medium ${
            isDarkMode ? "text-dark-400" : "text-gray-500"
          }`}
        >
          {filteredQuizzes.length} quiz
          {filteredQuizzes.length !== 1 ? "zes" : ""} found
          {hasActiveFilters && (
            <span className="text-primary-500"> (filtered)</span>
          )}
        </p>
      </div>

      {/* ========== GROUPED QUIZ LIST ========== */}
      {groupedByYear.length === 0 ? (
        <div
          className={`text-center py-12 sm:py-16 rounded-xl border ${
            isDarkMode
              ? "bg-dark-800/30 border-dark-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <HiOutlineQuestionMarkCircle
            className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 ${
              isDarkMode ? "text-dark-600" : "text-gray-300"
            }`}
          />
          <p
            className={`font-medium mb-1 text-sm sm:text-base ${
              isDarkMode ? "text-dark-400" : "text-gray-500"
            }`}
          >
            No quizzes match your filters
          </p>
          <button
            onClick={clearFilters}
            className="text-sm text-primary-500 hover:text-primary-400 font-medium"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {groupedByYear.map((group) => {
            const yearKey = `${group.year}-${group.session}`;
            const isCollapsed = collapsedYears[yearKey];

            return (
              <div key={yearKey}>
                {/* Year header — collapsible */}
                <button
                  onClick={() => toggleYearCollapse(yearKey)}
                  className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl mb-2 sm:mb-3 transition-colors group active:scale-[0.99] ${
                    isDarkMode
                      ? "bg-dark-800/60 hover:bg-dark-800"
                      : "bg-gray-100 hover:bg-gray-150"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className={`text-xl sm:text-2xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {group.year}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full ${
                        isDarkMode
                          ? "bg-primary-500/20 text-primary-400"
                          : "bg-primary-100 text-primary-700"
                      }`}
                    >
                      {group.session}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs ${
                        isDarkMode ? "text-dark-500" : "text-gray-400"
                      }`}
                    >
                      {group.quizzes.length} course
                      {group.quizzes.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  {isCollapsed ? (
                    <HiOutlineChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isDarkMode ? "text-dark-400" : "text-gray-400"
                      }`}
                    />
                  ) : (
                    <HiOutlineChevronUp
                      className={`w-5 h-5 transition-transform ${
                        isDarkMode ? "text-dark-400" : "text-gray-400"
                      }`}
                    />
                  )}
                </button>

                {/* Course cards — hidden when collapsed */}
                {!isCollapsed && (
                  <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                    {group.quizzes.map((quiz) => {
                      const colors = getColor(quiz.courseName);
                      const stats = getQuizStats(quiz.sessionId, quiz.courseId);
                      return (
                        <button
                          key={quiz.courseId}
                          onClick={() =>
                            navigate(
                              `/mcq-past-questions/${quiz.sessionId}/${quiz.courseId}`
                            )
                          }
                          className={`text-left rounded-xl border-2 p-3.5 sm:p-5 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group ${
                            isDarkMode
                              ? `${colors.bg} ${colors.border}`
                              : `${colors.bg} ${colors.border}`
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2 sm:mb-3">
                            <span
                              className={`text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${
                                isDarkMode ? colors.badgeDark : colors.badge
                              }`}
                            >
                              {quiz.courseName.replace(" Practice", "")}
                            </span>
                            <HiOutlinePlayCircle
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`}
                            />
                          </div>

                          <h3
                            className={`text-sm sm:text-base font-bold mb-1.5 sm:mb-2 ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {quiz.courseName}
                          </h3>

                          <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                            <div className="flex items-center gap-1.5">
                              <HiOutlineQuestionMarkCircle
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                                  isDarkMode ? "text-dark-400" : "text-gray-400"
                                }`}
                              />
                              <span
                                className={`text-[10px] sm:text-xs font-medium ${
                                  isDarkMode ? "text-dark-400" : "text-gray-500"
                                }`}
                              >
                                {quiz.questionsCount} Qs
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <HiOutlineClock
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                                  isDarkMode ? "text-dark-400" : "text-gray-400"
                                }`}
                              />
                              <span
                                className={`text-[10px] sm:text-xs font-medium ${
                                  isDarkMode ? "text-dark-400" : "text-gray-500"
                                }`}
                              >
                                Timed
                              </span>
                            </div>
                          </div>

                          {/* Best score & attempts badge */}
                          {stats && (
                            <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
                              <span
                                className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ${
                                  isDarkMode
                                    ? "bg-primary-500/20 text-primary-400"
                                    : "bg-primary-100 text-primary-700"
                                }`}
                              >
                                <HiOutlineTrophy className="w-3 h-3" />
                                Best: {stats.bestScore}/{stats.bestTotal} ({stats.best}%)
                              </span>
                              <span
                                className={`text-[10px] sm:text-xs font-medium ${
                                  isDarkMode ? "text-dark-500" : "text-gray-400"
                                }`}
                              >
                                {stats.attempts} attempt{stats.attempts !== 1 ? "s" : ""}
                              </span>
                            </div>
                          )}

                          <div
                            className={`text-[10px] sm:text-xs font-semibold ${colors.text} flex items-center gap-1 group-hover:gap-2 transition-all`}
                          >
                            {stats ? "Retake Quiz →" : "Start Quiz →"}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ========== DOWNLOAD SECTION ========== */}
      <div className="mt-8 sm:mt-10">
        <button
          onClick={() => setShowDownloads(!showDownloads)}
          className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-colors active:scale-[0.99] ${
            isDarkMode
              ? "bg-dark-800/40 hover:bg-dark-800/60"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <span
            className={`text-xs sm:text-sm font-bold flex items-center gap-2 ${
              isDarkMode ? "text-dark-300" : "text-gray-700"
            }`}
          >
            <HiOutlineDocumentArrowDown className="w-4 h-4" />
            Download Original Files ({downloadableFiles.length})
          </span>
          {showDownloads ? (
            <HiOutlineChevronUp
              className={`w-4 h-4 ${
                isDarkMode ? "text-dark-400" : "text-gray-400"
              }`}
            />
          ) : (
            <HiOutlineChevronDown
              className={`w-4 h-4 ${
                isDarkMode ? "text-dark-400" : "text-gray-400"
              }`}
            />
          )}
        </button>

        {showDownloads && (
          <div className="mt-2 sm:mt-3 grid gap-2">
            {downloadableFiles.map((file) => (
              <div
                key={file.id}
                className={`flex items-center justify-between gap-3 sm:gap-4 rounded-xl border p-3 sm:p-4 transition-colors ${
                  isDarkMode
                    ? "bg-dark-800/30 border-dark-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <HiOutlineDocumentText
                    className={`w-5 h-5 flex-shrink-0 ${
                      isDarkMode ? "text-dark-400" : "text-gray-400"
                    }`}
                  />
                  <div className="min-w-0">
                    <p
                      className={`font-medium text-xs sm:text-sm truncate ${
                        isDarkMode ? "text-dark-200" : "text-gray-700"
                      }`}
                    >
                      {file.name}
                    </p>
                    <p
                      className={`text-[10px] sm:text-xs ${
                        isDarkMode ? "text-dark-500" : "text-gray-400"
                      }`}
                    >
                      .{file.fileType} file
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(file.fileName)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors active:scale-95"
                >
                  <HiOutlineDocumentArrowDown className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default McqPastQuestions;
