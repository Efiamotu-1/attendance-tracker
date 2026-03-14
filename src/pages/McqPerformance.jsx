import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useQuizAttempts } from "../features/mcq/useQuizAttempts";
import Spinner from "../ui/Spinner";
import {
  HiOutlineArrowLeft,
  HiOutlineTrophy,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineAcademicCap,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowTrendingDown,
  HiOutlineCalendarDays,
  HiOutlineFire,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

// Course colors (kept in sync with McqPastQuestions)
const COURSE_COLORS = {
  "Civil Litigation": { color: "#3b82f6", bg: "bg-blue-500" },
  "Criminal Litigation": { color: "#ef4444", bg: "bg-red-500" },
  "Corporate Law Practice": { color: "#a855f7", bg: "bg-purple-500" },
  "Property Law Practice": { color: "#10b981", bg: "bg-emerald-500" },
  "Law in Practice": { color: "#f59e0b", bg: "bg-amber-500" },
};

const getCourseColor = (name) =>
  COURSE_COLORS[name]?.color || "#6366f1";

// =========================================
// SVG LINE CHART COMPONENT
// Shows course names on X-axis and average score on Y-axis
// with a smooth curved line connecting the data points.
// =========================================

// Helper: generate a smooth Catmull-Rom spline SVG path through points
function smoothPath(points, tension = 0.3) {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(i + 2, points.length - 1)];

    const cp1x = p1.x + ((p2.x - p0.x) * tension);
    const cp1y = p1.y + ((p2.y - p0.y) * tension);
    const cp2x = p2.x - ((p3.x - p1.x) * tension);
    const cp2y = p2.y - ((p3.y - p1.y) * tension);

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

function ProgressLineChart({ courseData, isDarkMode }) {
  const count = courseData.length;
  // Dynamic width so labels don't overlap
  const width = Math.max(600, count * 100);
  const height = 300;
  const padding = { top: 20, right: 30, bottom: 55, left: 45 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const yTicks = [0, 20, 40, 60, 80, 100];
  const lineColor = "#10b981"; // primary green

  // Build data points — one per course
  const points = courseData.map((course, i) => {
    const x =
      count === 1
        ? padding.left + chartW / 2
        : padding.left + (i / (count - 1)) * chartW;
    const y = padding.top + chartH - (course.avgPercentage / 100) * chartH;
    return {
      x,
      y,
      name: course.name,
      avg: course.avgPercentage,
      score: course.avgScore,
      total: course.avgTotalQuestions,
    };
  });

  // Truncate long course names for the x-axis
  const truncate = (str, max = 12) =>
    str.length > max ? str.slice(0, max) + "…" : str;

  // Smooth curved path
  const curvedLine = smoothPath(points);

  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[400px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Y-axis grid lines + labels */}
        {yTicks.map((tick) => {
          const y = padding.top + chartH - (tick / 100) * chartH;
          return (
            <g key={tick}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke={isDarkMode ? "#1e293b" : "#e5e7eb"}
                strokeWidth={1}
              />
              <text
                x={padding.left - 8}
                y={y + 4}
                textAnchor="end"
                fill={isDarkMode ? "#64748b" : "#9ca3af"}
                fontSize={11}
                fontWeight={500}
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* Smooth curved line — no area fill, clean line only */}
        {curvedLine && (
          <path
            d={curvedLine}
            fill="none"
            stroke={lineColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Data points (solid dots) + X-axis labels */}
        {points.map((p, i) => (
          <g key={i}>
            {/* Solid filled circle */}
            <circle cx={p.x} cy={p.y} r={4.5} fill={lineColor} />

            {/* X-axis course name */}
            <text
              x={p.x}
              y={padding.top + chartH + 20}
              textAnchor="middle"
              fill={isDarkMode ? "#64748b" : "#9ca3af"}
              fontSize={11}
              fontWeight={500}
            >
              {truncate(p.name)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// =========================================
// HORIZONTAL BAR CHART COMPONENT
// =========================================
function CourseBarChart({ courseStats, isDarkMode }) {
  return (
    <div className="space-y-3">
      {courseStats.map((course) => {
        const color = getCourseColor(course.name);
        const pct = course.avgPercentage;
        return (
          <div key={course.name}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span
                  className={`text-xs sm:text-sm font-medium truncate ${
                    isDarkMode ? "text-dark-200" : "text-gray-700"
                  }`}
                >
                  {course.name}
                </span>
              </div>
              <span
                className={`text-xs sm:text-sm font-bold flex-shrink-0 ml-2 ${
                  pct >= 75
                    ? "text-green-500"
                    : pct >= 50
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {pct}%
              </span>
            </div>
            <div
              className={`h-2.5 sm:h-3 rounded-full overflow-hidden ${
                isDarkMode ? "bg-dark-700" : "bg-gray-200"
              }`}
            >
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${pct}%`,
                  backgroundColor: color,
                }}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-0.5 gap-0.5">
              <span
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-500" : "text-gray-400"
                }`}
              >
                {course.totalAttempts} attempt{course.totalAttempts !== 1 ? "s" : ""} · Avg: {course.avgScore}/{course.avgTotalQuestions}
              </span>
              <span
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-500" : "text-gray-400"
                }`}
              >
                Best: {course.bestScore}/{course.bestTotalQuestions} ({course.bestPercentage}%)
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// =========================================
// MAIN PERFORMANCE DASHBOARD
// =========================================
function McqPerformance() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { isLoading, attempts } = useQuizAttempts();
  const [selectedCourseFilter, setSelectedCourseFilter] = useState("all");

  // ===== Derived analytics =====
  const analytics = useMemo(() => {
    if (!attempts || attempts.length === 0) return null;

    // Group by course name
    const courseMap = {};
    attempts.forEach((a) => {
      if (!courseMap[a.course_name]) {
        courseMap[a.course_name] = [];
      }
      courseMap[a.course_name].push(a);
    });

    // Per-course stats
    const courseStats = Object.entries(courseMap)
      .map(([name, courseAttempts]) => {
        const sorted = [...courseAttempts].sort(
          (a, b) => new Date(a.completed_at) - new Date(b.completed_at)
        );
        const percentages = sorted.map((a) => a.percentage);
        const avg = Math.round(
          percentages.reduce((s, v) => s + v, 0) / percentages.length
        );
        const best = Math.max(...percentages);
        const latest = percentages[percentages.length - 1];
        const first = percentages[0];
        const improvement = latest - first;

        // Best attempt for this course
        const bestAttempt = sorted.reduce((best, a) =>
          a.percentage > (best?.percentage ?? -1) ? a : best
        , sorted[0]);
        // Latest attempt
        const latestAttempt = sorted[sorted.length - 1];
        // Average score fraction
        const avgScore = Math.round(
          sorted.reduce((s, a) => s + a.score, 0) / sorted.length
        );
        const avgTotal = Math.round(
          sorted.reduce((s, a) => s + a.total_questions, 0) / sorted.length
        );

        return {
          name,
          totalAttempts: courseAttempts.length,
          avgPercentage: avg,
          avgScore,
          avgTotalQuestions: avgTotal,
          bestPercentage: best,
          bestScore: bestAttempt.score,
          bestTotalQuestions: bestAttempt.total_questions,
          latestPercentage: latest,
          latestScore: latestAttempt.score,
          latestTotalQuestions: latestAttempt.total_questions,
          improvement,
          attempts: sorted.map((a) => ({
            percentage: a.percentage,
            timeElapsed: a.time_elapsed,
            score: a.score,
            totalQuestions: a.total_questions,
            completedAt: a.completed_at,
            sessionId: a.session_id,
            year: a.year,
            session: a.session,
          })),
        };
      })
      .sort((a, b) => b.avgPercentage - a.avgPercentage);

    // Overall stats
    const totalAttempts = attempts.length;
    const overallAvg = Math.round(
      attempts.reduce((s, a) => s + a.percentage, 0) / totalAttempts
    );
    // Find ALL courses tied for the highest average
    const topAvg = courseStats[0]?.avgPercentage ?? 0;
    const bestCourses = courseStats.filter((c) => c.avgPercentage === topAvg);
    const mostImproved = [...courseStats]
      .filter((c) => c.totalAttempts > 1)
      .sort((a, b) => b.improvement - a.improvement)[0];
    const totalTimeSpent = attempts.reduce(
      (s, a) => s + a.time_elapsed,
      0
    );

    // Recent activity (last 10)
    const recentActivity = [...attempts]
      .sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at))
      .slice(0, 10);

    // Unique quizzes taken
    const uniqueQuizzes = new Set(
      attempts.map((a) => `${a.session_id}-${a.course_id}`)
    ).size;

    return {
      courseStats,
      totalAttempts,
      overallAvg,
      bestCourses,
      mostImproved,
      totalTimeSpent,
      recentActivity,
      uniqueQuizzes,
    };
  }, [attempts]);

  // Chart data filtered by selected course
  const chartData = useMemo(() => {
    if (!analytics) return [];
    if (selectedCourseFilter === "all") return analytics.courseStats;
    return analytics.courseStats.filter(
      (c) => c.name === selectedCourseFilter
    );
  }, [analytics, selectedCourseFilter]);

  const formatDuration = (seconds) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins < 60) return `${mins}m ${secs}s`;
    const hrs = Math.floor(mins / 60);
    return `${hrs}h ${mins % 60}m`;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner />
      </div>
    );
  }

  // Empty state
  if (!analytics) {
    return (
      <div className="px-4 sm:px-6 py-8 max-w-3xl mx-auto text-center">
        <div className="p-4 bg-primary-500/20 rounded-2xl w-fit mx-auto mb-6">
          <HiOutlineChartBar className="w-10 h-10 sm:w-12 sm:h-12 text-primary-500" />
        </div>
        <h1
          className={`text-xl sm:text-2xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          No Quiz Data Yet
        </h1>
        <p
          className={`text-xs sm:text-sm mb-6 ${
            isDarkMode ? "text-dark-400" : "text-gray-500"
          }`}
        >
          Complete your first quiz to start tracking your performance!
        </p>
        <button
          onClick={() => navigate("/mcq-past-questions")}
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg active:scale-95"
        >
          Browse Quizzes
        </button>
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-5xl mx-auto">
      {/* ========== HEADER ========== */}
      <div className="mb-5 sm:mb-6">
        <button
          onClick={() => navigate("/mcq-past-questions")}
          className={`flex items-center gap-2 mb-2 text-sm font-medium transition-colors ${
            isDarkMode
              ? "text-dark-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Back to MCQ
        </button>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-primary-500/20 rounded-xl">
            <HiOutlineChartBar className="w-6 h-6 sm:w-7 sm:h-7 text-primary-500" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary-500">
              Performance Dashboard
            </h1>
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Track your MCQ quiz progress and identify areas to improve
            </p>
          </div>
        </div>
      </div>

      {/* ========== SUMMARY STATS ========== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {[
          {
            label: "Total Quizzes",
            value: analytics.totalAttempts,
            icon: HiOutlineAcademicCap,
            color: "text-primary-500",
          },
          {
            label: "Average Score",
            value: `${analytics.overallAvg}%`,
            icon: HiOutlineChartBar,
            color:
              analytics.overallAvg >= 75
                ? "text-green-500"
                : analytics.overallAvg >= 50
                ? "text-yellow-500"
                : "text-red-500",
          },
          {
            label: "Unique Quizzes",
            value: analytics.uniqueQuizzes,
            icon: HiOutlineQuestionMarkCircle,
            color: "text-blue-500",
          },
          {
            label: "Total Time",
            value: formatDuration(analytics.totalTimeSpent),
            icon: HiOutlineClock,
            color: "text-purple-500",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl border p-3 sm:p-4 ${
              isDarkMode
                ? "bg-dark-800/50 border-dark-700"
                : "bg-white border-gray-200"
            }`}
          >
            <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2 ${stat.color}`} />
            <p
              className={`text-lg sm:text-2xl font-bold leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`text-[10px] sm:text-xs font-medium mt-0.5 ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ========== HIGHLIGHT CARDS ========== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
        {/* Best Course(s) — shows all tied courses */}
        {analytics.bestCourses.length > 0 && (
          <div
            className={`rounded-xl border p-4 sm:p-5 ${
              isDarkMode
                ? "bg-dark-800/50 border-dark-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <div className="p-1.5 sm:p-2 bg-yellow-500/20 rounded-lg">
                <HiOutlineTrophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              </div>
              <div className="min-w-0">
                <p
                  className={`text-[10px] sm:text-xs font-medium ${
                    isDarkMode ? "text-dark-400" : "text-gray-500"
                  }`}
                >
                  Best Performing Course{analytics.bestCourses.length > 1 ? "s" : ""}
                  {analytics.bestCourses.length > 1 && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500 text-[10px] font-bold">
                      {analytics.bestCourses.length}-way tie
                    </span>
                  )}
                </p>
                <p
                  className={`text-sm sm:text-lg font-bold truncate ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {analytics.bestCourses.map((c) => c.name).join(" & ")}
                </p>
              </div>
            </div>

            {/* Stats for each tied course */}
            <div className={`space-y-3 ${analytics.bestCourses.length > 1 ? "divide-y" : ""} ${isDarkMode ? "divide-dark-600" : "divide-gray-200"}`}>
              {analytics.bestCourses.map((bc) => (
                <div key={bc.name} className={`${analytics.bestCourses.length > 1 ? "pt-3 first:pt-0" : ""}`}>
                  {analytics.bestCourses.length > 1 && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: getCourseColor(bc.name) }}
                      />
                      <span
                        className={`text-xs font-medium truncate ${
                          isDarkMode ? "text-dark-300" : "text-gray-600"
                        }`}
                      >
                        {bc.name}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-yellow-500">
                        {bc.avgPercentage}%
                      </p>
                      <p
                        className={`text-[10px] sm:text-xs ${
                          isDarkMode ? "text-dark-500" : "text-gray-400"
                        }`}
                      >
                        Avg ({bc.avgScore}/{bc.avgTotalQuestions})
                      </p>
                    </div>
                    <div
                      className={`h-8 w-px flex-shrink-0 ${
                        isDarkMode ? "bg-dark-600" : "bg-gray-200"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-xl sm:text-2xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {bc.bestPercentage}%
                      </p>
                      <p
                        className={`text-[10px] sm:text-xs ${
                          isDarkMode ? "text-dark-500" : "text-gray-400"
                        }`}
                      >
                        Best ({bc.bestScore}/{bc.bestTotalQuestions})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Most Improved */}
        {analytics.mostImproved && (
          <div
            className={`rounded-xl border p-4 sm:p-5 ${
              isDarkMode
                ? "bg-dark-800/50 border-dark-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <div className="p-1.5 sm:p-2 bg-green-500/20 rounded-lg">
                <HiOutlineFire className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </div>
              <div className="min-w-0">
                <p
                  className={`text-[10px] sm:text-xs font-medium ${
                    isDarkMode ? "text-dark-400" : "text-gray-500"
                  }`}
                >
                  Most Improved Course
                </p>
                <p
                  className={`text-sm sm:text-lg font-bold truncate ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {analytics.mostImproved.name}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div>
                <p
                  className={`text-xl sm:text-2xl font-bold ${
                    analytics.mostImproved.improvement >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analytics.mostImproved.improvement >= 0 ? "+" : ""}
                  {analytics.mostImproved.improvement}%
                </p>
                <p
                  className={`text-[10px] sm:text-xs ${
                    isDarkMode ? "text-dark-500" : "text-gray-400"
                  }`}
                >
                  Growth (first → last)
                </p>
              </div>
              <div
                className={`h-8 w-px flex-shrink-0 ${
                  isDarkMode ? "bg-dark-600" : "bg-gray-200"
                }`}
              />
              <div>
                <p
                  className={`text-xl sm:text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {analytics.mostImproved.totalAttempts}
                </p>
                <p
                  className={`text-[10px] sm:text-xs ${
                    isDarkMode ? "text-dark-500" : "text-gray-400"
                  }`}
                >
                  Attempts
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========== SCORE TREND LINE CHART ========== */}
      <div
        className={`rounded-xl border p-3.5 sm:p-5 mb-6 sm:mb-8 ${
          isDarkMode
            ? "bg-dark-800/50 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Title + Filter — stack on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <h2
              className={`text-base sm:text-lg font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Score Trend
            </h2>
            <p
              className={`text-[10px] sm:text-xs ${
                isDarkMode ? "text-dark-400" : "text-gray-500"
              }`}
            >
              Average score per course
            </p>
          </div>

          {/* Course filter for chart — scrollable on mobile */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 -mx-0.5 px-0.5">
            <button
              onClick={() => setSelectedCourseFilter("all")}
              className={`px-2.5 py-1.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedCourseFilter === "all"
                  ? "bg-primary-500 text-white"
                  : isDarkMode
                  ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {analytics.courseStats.map((c) => (
              <button
                key={c.name}
                onClick={() =>
                  setSelectedCourseFilter(
                    selectedCourseFilter === c.name ? "all" : c.name
                  )
                }
                className={`flex items-center gap-1 px-2.5 py-1.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedCourseFilter === c.name
                    ? "bg-primary-500 text-white"
                    : isDarkMode
                    ? "bg-dark-700 text-dark-300 hover:bg-dark-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: getCourseColor(c.name) }}
                />
                {c.name.replace(" Practice", "").replace(" Litigation", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Legend — scrollable on mobile */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3">
          {chartData.map((c) => (
            <div key={c.name} className="flex items-center gap-1.5 sm:gap-2">
              <span
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: getCourseColor(c.name) }}
              />
              <span
                className={`text-[10px] sm:text-xs font-medium ${
                  isDarkMode ? "text-dark-300" : "text-gray-600"
                }`}
              >
                {c.name}
              </span>
              <span
                className={`text-[10px] sm:text-xs font-bold ${
                  c.avgPercentage >= 75
                    ? "text-green-500"
                    : c.avgPercentage >= 50
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {c.avgScore}/{c.avgTotalQuestions} ({c.avgPercentage}%)
              </span>
            </div>
          ))}
        </div>

        <ProgressLineChart courseData={chartData} isDarkMode={isDarkMode} />
      </div>


      {/* ========== PER-COURSE DETAILED BREAKDOWN ========== */}
      <div
        className={`rounded-xl border p-3.5 sm:p-5 mb-6 sm:mb-8 ${
          isDarkMode
            ? "bg-dark-800/50 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h2
          className={`text-base sm:text-lg font-bold mb-1 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Course Breakdown
        </h2>
        <p
          className={`text-[10px] sm:text-xs mb-4 sm:mb-5 ${
            isDarkMode ? "text-dark-400" : "text-gray-500"
          }`}
        >
          Detailed attempt history per course
        </p>

        <div className="space-y-3 sm:space-y-4">
          {analytics.courseStats.map((course) => {
            const color = getCourseColor(course.name);
            return (
              <div
                key={course.name}
                className={`rounded-xl border p-3 sm:p-4 ${
                  isDarkMode ? "bg-dark-700/30 border-dark-600" : "bg-gray-50 border-gray-200"
                }`}
              >
                {/* Course header — stack stats below name on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span
                      className={`text-sm sm:text-base font-bold truncate ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 ml-5 sm:ml-0">
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isDarkMode ? "text-dark-300" : "text-gray-600"
                      }`}
                    >
                      Avg: {course.avgScore}/{course.avgTotalQuestions} ({course.avgPercentage}%)
                    </span>
                    {course.totalAttempts > 1 && (
                      <span
                        className={`text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          course.improvement >= 0
                            ? "bg-green-500/20 text-green-500"
                            : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {course.improvement >= 0 ? (
                          <HiOutlineArrowTrendingUp className="w-3 h-3" />
                        ) : (
                          <HiOutlineArrowTrendingDown className="w-3 h-3" />
                        )}
                        {course.improvement >= 0 ? "+" : ""}
                        {course.improvement}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Attempt rows */}
                <div className="space-y-1.5">
                  {course.attempts.map((attempt, idx) => {
                    const prevAttempt =
                      idx > 0 ? course.attempts[idx - 1] : null;
                    const diff = prevAttempt
                      ? attempt.percentage - prevAttempt.percentage
                      : 0;
                    const isBest =
                      attempt.percentage === course.bestPercentage;
                    const date = new Date(attempt.completedAt);

                    return (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-2.5 sm:px-3 py-2 rounded-lg text-sm ${
                          isDarkMode ? "bg-dark-800/50" : "bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span
                            className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 ${
                              isDarkMode
                                ? "bg-dark-600 text-dark-300"
                                : "bg-gray-200 text-gray-500"
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span
                            className={`text-xs sm:text-sm font-semibold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {attempt.percentage}%
                          </span>
                          <span
                            className={`text-[10px] sm:text-xs ${
                              isDarkMode ? "text-dark-500" : "text-gray-400"
                            }`}
                          >
                            ({attempt.score}/{attempt.totalQuestions})
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          {diff !== 0 && (
                            <span
                              className={`text-[10px] sm:text-xs font-bold px-1 sm:px-1.5 py-0.5 rounded-full ${
                                diff > 0
                                  ? "bg-green-500/15 text-green-500"
                                  : "bg-red-500/15 text-red-500"
                              }`}
                            >
                              {diff > 0 ? "↑" : "↓"}
                              {Math.abs(diff)}%
                            </span>
                          )}
                          {isBest && course.totalAttempts > 1 && (
                            <span className="text-[10px] sm:text-xs font-bold text-yellow-500">
                              ⭐
                            </span>
                          )}
                          <span
                            className={`text-[10px] sm:text-xs flex items-center gap-0.5 sm:gap-1 ${
                              isDarkMode ? "text-dark-500" : "text-gray-400"
                            }`}
                          >
                            <HiOutlineClock className="w-3 h-3" />
                            {Math.floor(attempt.timeElapsed / 60)}:
                            {(attempt.timeElapsed % 60)
                              .toString()
                              .padStart(2, "0")}
                          </span>
                          <span
                            className={`text-[10px] sm:text-xs hidden xs:inline ${
                              isDarkMode ? "text-dark-500" : "text-gray-400"
                            }`}
                          >
                            {date.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========== RECENT ACTIVITY ========== */}
      <div
        className={`rounded-xl border p-3.5 sm:p-5 ${
          isDarkMode
            ? "bg-dark-800/50 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h2
          className={`text-base sm:text-lg font-bold mb-1 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Recent Activity
        </h2>
        <p
          className={`text-[10px] sm:text-xs mb-3 sm:mb-4 ${
            isDarkMode ? "text-dark-400" : "text-gray-500"
          }`}
        >
          Your latest quiz attempts
        </p>
        <div className="space-y-1.5 sm:space-y-2">
          {analytics.recentActivity.map((attempt) => {
            const color = getCourseColor(attempt.course_name);
            const date = new Date(attempt.completed_at);
            const timeAgo = getTimeAgo(date);

            return (
              <div
                key={attempt.id}
                className={`flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-colors ${
                  isDarkMode ? "hover:bg-dark-700/50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-medium truncate ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {attempt.course_name}
                    </p>
                    <p
                      className={`text-[10px] sm:text-xs ${
                        isDarkMode ? "text-dark-500" : "text-gray-400"
                      }`}
                    >
                      {attempt.session} {attempt.year} · {timeAgo}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                  <div className="text-right">
                    <span
                      className={`text-xs sm:text-sm font-bold ${
                        attempt.percentage >= 75
                          ? "text-green-500"
                          : attempt.percentage >= 50
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {attempt.score}/{attempt.total_questions}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs ml-0.5 sm:ml-1 ${
                        isDarkMode ? "text-dark-400" : "text-gray-500"
                      }`}
                    >
                      ({attempt.percentage}%)
                    </span>
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-medium items-center gap-1 hidden sm:flex ${
                      isDarkMode ? "text-dark-400" : "text-gray-500"
                    }`}
                  >
                    <HiOutlineClock className="w-3 h-3" />
                    {Math.floor(attempt.time_elapsed / 60)}:
                    {(attempt.time_elapsed % 60).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Helper: relative time
function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default McqPerformance;
