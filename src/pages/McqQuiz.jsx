import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import mcqQuestions from "../data/mcqQuestions";
import { useSaveQuizAttempt } from "../features/mcq/useSaveQuizAttempt";
import { useQuizAttempts } from "../features/mcq/useQuizAttempts";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineTrophy,
  HiOutlineChartBar,
  HiOutlineArrowPath,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

function McqQuiz() {
  const { sessionId, courseId } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [resultsSaved, setResultsSaved] = useState(false);
  const timerRef = useRef(null);
  const savedRef = useRef(false);

  // Hooks for saving and loading quiz history
  const { saveAttempt, isSaving } = useSaveQuizAttempt();
  const { attempts: allAttempts } = useQuizAttempts();

  // Find the course data
  const session = mcqQuestions[sessionId];
  const course = session?.courses?.find((c) => c.id === courseId);

  // Previous attempts for THIS specific quiz
  const previousAttempts = useMemo(() => {
    if (!allAttempts || !courseId || !sessionId) return [];
    return allAttempts
      .filter((a) => a.session_id === sessionId && a.course_id === courseId)
      .sort((a, b) => new Date(a.completed_at) - new Date(b.completed_at));
  }, [allAttempts, sessionId, courseId]);

  // Timer
  useEffect(() => {
    if (quizStarted && !quizFinished) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [quizStarted, quizFinished]);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, []);

  if (!session || !course) {
    return (
      <div className="px-4 sm:px-6 py-8 max-w-3xl mx-auto text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
          Quiz Not Found
        </h1>
        <p className={`text-sm ${isDarkMode ? "text-dark-400" : "text-gray-500"}`}>
          The quiz you&apos;re looking for doesn&apos;t exist.
        </p>
        <button
          onClick={() => navigate("/mcq-past-questions")}
          className="mt-4 px-6 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 active:bg-primary-700 transition-colors"
        >
          Back to MCQ
        </button>
      </div>
    );
  }

  const questions = course.questions;
  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleSelectAnswer = (questionId, optionKey) => {
    if (quizFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleFinishQuiz = () => {
    clearInterval(timerRef.current);
    setQuizFinished(true);

    // Auto-save results (prevent double-save)
    if (!savedRef.current && session && course) {
      savedRef.current = true;
      const results = calculateResults();
      saveAttempt(
        {
          sessionId,
          courseId: course.id,
          courseName: course.name,
          year: session.year,
          session: session.session,
          score: results.correct,
          totalQuestions: questions.length,
          percentage: results.percentage,
          timeElapsed: elapsedTime,
          correctCount: results.correct,
          incorrectCount: results.incorrect,
          skippedCount: results.unanswered,
          bonusCount: results.bonusCount,
        },
        {
          onSuccess: () => setResultsSaved(true),
        }
      );
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizFinished(false);
    setElapsedTime(0);
    setQuizStarted(true);
    setResultsSaved(false);
    savedRef.current = false;
  };

  // Calculate results
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let bonusCount = 0;

    questions.forEach((q) => {
      if (q.answer === "bonus") {
        bonusCount++;
        correct++; // Everyone gets bonus marks
      } else if (!selectedAnswers[q.id]) {
        unanswered++;
      } else if (selectedAnswers[q.id] === q.answer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const percentage = Math.round((correct / totalQuestions) * 100);
    return { correct, incorrect, unanswered, bonusCount, percentage };
  };

  // Pre-quiz start screen
  if (!quizStarted) {
    return (
      <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/mcq-past-questions")}
          className={`flex items-center gap-2 mb-4 sm:mb-6 font-medium transition-colors ${
            isDarkMode
              ? "text-dark-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <HiOutlineArrowLeft className="w-5 h-5" />
          Back to MCQ
        </button>

        <div
          className={`rounded-2xl border p-5 sm:p-8 text-center ${
            isDarkMode
              ? "bg-dark-800/50 border-dark-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="p-3 sm:p-4 bg-primary-500/20 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
            <HiOutlineTrophy className="w-10 h-10 sm:w-12 sm:h-12 text-primary-500" />
          </div>
          <h1
            className={`text-xl sm:text-2xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {course.name}
          </h1>
          <p
            className={`text-xs sm:text-sm mb-1 ${
              isDarkMode ? "text-dark-400" : "text-gray-500"
            }`}
          >
            {session.examTitle} — {session.session} {session.year}
          </p>

          {/* Info cards — responsive grid */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-5 sm:mt-6 mb-6 sm:mb-8">
            <div
              className={`px-3 sm:px-4 py-2 rounded-xl flex-1 max-w-[110px] ${
                isDarkMode ? "bg-dark-700" : "bg-gray-100"
              }`}
            >
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Questions
              </p>
              <p
                className={`text-lg sm:text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {totalQuestions}
              </p>
            </div>
            <div
              className={`px-3 sm:px-4 py-2 rounded-xl flex-1 max-w-[110px] ${
                isDarkMode ? "bg-dark-700" : "bg-gray-100"
              }`}
            >
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Format
              </p>
              <p
                className={`text-lg sm:text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                MCQ
              </p>
            </div>
            <div
              className={`px-3 sm:px-4 py-2 rounded-xl flex-1 max-w-[110px] ${
                isDarkMode ? "bg-dark-700" : "bg-gray-100"
              }`}
            >
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Timer
              </p>
              <p
                className={`text-lg sm:text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                ⏱️
              </p>
            </div>
          </div>
          <p
            className={`text-xs sm:text-sm mb-6 sm:mb-8 ${
              isDarkMode ? "text-dark-400" : "text-gray-500"
            }`}
          >
            A timer will start once you begin. Answer all questions and submit
            to see your score and completion time.
          </p>

          {/* Previous attempts summary */}
          {previousAttempts.length > 0 && (
            <div
              className={`rounded-xl p-3 sm:p-4 mb-5 sm:mb-6 text-left ${
                isDarkMode ? "bg-dark-700/50" : "bg-gray-50"
              }`}
            >
              <p
                className={`text-[10px] sm:text-xs font-semibold mb-2 flex items-center gap-1.5 ${
                  isDarkMode ? "text-dark-300" : "text-gray-600"
                }`}
              >
                <HiOutlineArrowTrendingUp className="w-3.5 h-3.5" />
                Previous Attempts ({previousAttempts.length})
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div>
                  <p
                    className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-primary-400" : "text-primary-600"
                    }`}
                  >
                    {Math.max(...previousAttempts.map((a) => a.percentage))}%
                  </p>
                  <p
                    className={`text-[10px] sm:text-xs ${
                      isDarkMode ? "text-dark-400" : "text-gray-500"
                    }`}
                  >
                    Best Score
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
                    {previousAttempts[previousAttempts.length - 1].percentage}%
                  </p>
                  <p
                    className={`text-[10px] sm:text-xs ${
                      isDarkMode ? "text-dark-400" : "text-gray-500"
                    }`}
                  >
                    Last Score
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
                    {Math.floor(
                      Math.min(
                        ...previousAttempts.map((a) => a.time_elapsed)
                      ) / 60
                    )}:{(Math.min(...previousAttempts.map((a) => a.time_elapsed)) % 60).toString().padStart(2, "0")}
                  </p>
                  <p
                    className={`text-[10px] sm:text-xs ${
                      isDarkMode ? "text-dark-400" : "text-gray-500"
                    }`}
                  >
                    Best Time
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleStartQuiz}
            className="w-full sm:w-auto px-8 py-3 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
          >
            {previousAttempts.length > 0 ? "Retake Quiz" : "Start Quiz"}
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (quizFinished) {
    const results = calculateResults();
    const getGrade = (pct) => {
      if (pct >= 75) return { label: "Excellent!", color: "text-green-500", emoji: "🎉" };
      if (pct >= 50) return { label: "Good Job!", color: "text-yellow-500", emoji: "👍" };
      if (pct >= 40) return { label: "Fair", color: "text-orange-500", emoji: "📚" };
      return { label: "Keep Studying", color: "text-red-500", emoji: "💪" };
    };
    const grade = getGrade(results.percentage);

    return (
      <div className="px-3 sm:px-6 py-5 sm:py-6 max-w-3xl mx-auto">
        <div
          className={`rounded-2xl border p-5 sm:p-8 text-center mb-5 sm:mb-6 ${
            isDarkMode
              ? "bg-dark-800/50 border-dark-700"
              : "bg-white border-gray-200"
          }`}
        >
          <p className="text-4xl sm:text-5xl mb-3 sm:mb-4">{grade.emoji}</p>
          <h1
            className={`text-2xl sm:text-3xl font-bold mb-1 ${grade.color}`}
          >
            {grade.label}
          </h1>
          <p
            className={`text-xs sm:text-sm mb-5 sm:mb-6 ${
              isDarkMode ? "text-dark-400" : "text-gray-500"
            }`}
          >
            {course.name} — {session.session} {session.year}
          </p>

          {/* Score & Time */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div
              className={`rounded-xl p-3 sm:p-4 ${
                isDarkMode ? "bg-dark-700" : "bg-gray-50"
              }`}
            >
              <HiOutlineChartBar
                className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 ${
                  isDarkMode ? "text-primary-400" : "text-primary-500"
                }`}
              />
              <p
                className={`text-2xl sm:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {results.correct}/{totalQuestions}
              </p>
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Score ({results.percentage}%)
              </p>
            </div>
            <div
              className={`rounded-xl p-3 sm:p-4 ${
                isDarkMode ? "bg-dark-700" : "bg-gray-50"
              }`}
            >
              <HiOutlineClock
                className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 ${
                  isDarkMode ? "text-primary-400" : "text-primary-500"
                }`}
              />
              <p
                className={`text-2xl sm:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {formatTime(elapsedTime)}
              </p>
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Time Taken
              </p>
            </div>
          </div>

          {/* Stats breakdown */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <p className="text-base sm:text-lg font-bold text-green-500">
                {results.correct}
              </p>
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Correct
              </p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg font-bold text-red-500">
                {results.incorrect}
              </p>
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Wrong
              </p>
            </div>
            <div className="text-center">
              <p
                className={`text-base sm:text-lg font-bold ${
                  isDarkMode ? "text-dark-300" : "text-gray-400"
                }`}
              >
                {results.unanswered}
              </p>
              <p
                className={`text-[10px] sm:text-xs ${
                  isDarkMode ? "text-dark-400" : "text-gray-500"
                }`}
              >
                Skipped
              </p>
            </div>
            {results.bonusCount > 0 && (
              <div className="text-center">
                <p className="text-base sm:text-lg font-bold text-yellow-500">
                  {results.bonusCount}
                </p>
                <p
                  className={`text-[10px] sm:text-xs ${
                    isDarkMode ? "text-dark-400" : "text-gray-500"
                  }`}
                >
                  Bonus
                </p>
              </div>
            )}
          </div>

          {/* Previous Attempts History */}
          {previousAttempts.length > 1 && (
            <div className="mb-6 sm:mb-8">
              <h3
                className={`text-xs sm:text-sm font-semibold mb-2.5 sm:mb-3 flex items-center gap-2 ${
                  isDarkMode ? "text-dark-300" : "text-gray-600"
                }`}
              >
                <HiOutlineArrowTrendingUp className="w-4 h-4" />
                Your Progress ({previousAttempts.length} attempts)
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {previousAttempts.map((attempt, idx) => {
                  const prevAttempt = idx > 0 ? previousAttempts[idx - 1] : null;
                  const improvement = prevAttempt
                    ? attempt.percentage - prevAttempt.percentage
                    : 0;
                  const isBest =
                    attempt.percentage ===
                    Math.max(...previousAttempts.map((a) => a.percentage));
                  const attemptDate = new Date(attempt.completed_at);

                  return (
                    <div
                      key={attempt.id}
                      className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl text-sm ${
                        isDarkMode ? "bg-dark-700/50" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 ${
                            isDarkMode
                              ? "bg-dark-600 text-dark-300"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          #{idx + 1}
                        </span>
                        <div>
                          <span
                            className={`text-xs sm:text-sm font-semibold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {attempt.percentage}%
                          </span>
                          <span
                            className={`ml-1.5 sm:ml-2 text-[10px] sm:text-xs ${
                              isDarkMode ? "text-dark-400" : "text-gray-500"
                            }`}
                          >
                            ({attempt.score}/{attempt.total_questions})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-3">
                        {improvement !== 0 && (
                          <span
                            className={`text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full ${
                              improvement > 0
                                ? "bg-green-500/20 text-green-500"
                                : "bg-red-500/20 text-red-500"
                            }`}
                          >
                            {improvement > 0 ? "↑" : "↓"} {Math.abs(improvement)}%
                          </span>
                        )}
                        {isBest && previousAttempts.length > 1 && (
                          <span className="text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500">
                            ⭐ Best
                          </span>
                        )}
                        <span
                          className={`text-[10px] sm:text-xs items-center gap-1 hidden sm:flex ${
                            isDarkMode ? "text-dark-500" : "text-gray-400"
                          }`}
                        >
                          <HiOutlineCalendarDays className="w-3 h-3" />
                          {attemptDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span
                          className={`text-[10px] sm:text-xs ${
                            isDarkMode ? "text-dark-500" : "text-gray-400"
                          }`}
                        >
                          {Math.floor(attempt.time_elapsed / 60)}:{(attempt.time_elapsed % 60).toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action buttons — stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl font-medium transition-all hover:shadow-lg active:scale-95"
            >
              <HiOutlineArrowPath className="w-5 h-5" />
              Retry Quiz
            </button>
            <button
              onClick={() => navigate("/mcq-performance")}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl font-medium transition-all hover:shadow-lg active:scale-95"
            >
              <HiOutlineChartBar className="w-5 h-5" />
              View Performance
            </button>
            <button
              onClick={() => navigate("/mcq-past-questions")}
              className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-medium border transition-colors ${
                isDarkMode
                  ? "border-dark-600 text-dark-300 hover:bg-dark-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <HiOutlineArrowLeft className="w-5 h-5" />
              Back to MCQ
            </button>
          </div>
        </div>

        {/* Review Answers */}
        <h2
          className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Review Answers
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {questions.map((q, idx) => {
            const userAnswer = selectedAnswers[q.id];
            const isBonus = q.answer === "bonus";
            const isCorrect = isBonus || userAnswer === q.answer;
            const wasAnswered = !!userAnswer;

            return (
              <div
                key={q.id}
                className={`rounded-xl border p-3.5 sm:p-5 ${
                  isDarkMode
                    ? "bg-dark-800/50 border-dark-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-start gap-2.5 sm:gap-3 mb-3">
                  <span
                    className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                      isBonus
                        ? "bg-yellow-500/20 text-yellow-500"
                        : isCorrect
                        ? "bg-green-500/20 text-green-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    {q.context && (
                      <p
                        className={`text-[10px] sm:text-xs mb-2 break-words ${
                          isDarkMode ? "text-dark-500" : "text-gray-400"
                        }`}
                      >
                        {q.context}
                      </p>
                    )}
                    <p
                      className={`font-medium text-xs sm:text-sm break-words ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {q.question}
                    </p>
                  </div>
                </div>

                {/* Options — reduced left margin on mobile */}
                <div className="grid gap-1.5 sm:gap-2 ml-8 sm:ml-10">
                  {Object.entries(q.options).map(([key, text]) => {
                    const isThisCorrect = key === q.answer;
                    const isThisSelected = userAnswer === key;

                    let optionStyle = isDarkMode
                      ? "bg-dark-700/50 border-dark-600 text-dark-300"
                      : "bg-gray-50 border-gray-200 text-gray-600";

                    if (isThisCorrect) {
                      optionStyle =
                        "bg-green-500/10 border-green-500/50 text-green-500 font-medium";
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle =
                        "bg-red-500/10 border-red-500/50 text-red-500 line-through";
                    }

                    return (
                      <div
                        key={key}
                        className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border text-xs sm:text-sm ${optionStyle}`}
                      >
                        <span className="font-bold uppercase w-4 sm:w-5 flex-shrink-0">{key}.</span>
                        <span className="flex-1 break-words">{text}</span>
                        {isThisCorrect && (
                          <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        )}
                        {isThisSelected && !isThisCorrect && (
                          <HiOutlineXCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {isBonus && (
                  <p className="ml-8 sm:ml-10 mt-2 text-[10px] sm:text-xs text-yellow-500 font-medium">
                    ⭐ Bonus Question — All candidates get this mark
                  </p>
                )}
                {!wasAnswered && !isBonus && (
                  <p className="ml-8 sm:ml-10 mt-2 text-[10px] sm:text-xs text-gray-400 font-medium">
                    ⚠️ You did not answer this question
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active quiz screen
  return (
    <div className="px-3 sm:px-6 py-4 sm:py-6 max-w-3xl mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <button
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to leave? Your progress will be lost."
              )
            ) {
              clearInterval(timerRef.current);
              navigate("/mcq-past-questions");
            }
          }}
          className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors ${
            isDarkMode
              ? "text-dark-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Exit
        </button>

        <div
          className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full font-mono text-xs sm:text-sm font-bold ${
            isDarkMode
              ? "bg-dark-800 text-primary-400"
              : "bg-primary-50 text-primary-600"
          }`}
        >
          <HiOutlineClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          {formatTime(elapsedTime)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between text-[10px] sm:text-xs mb-1.5">
          <span className={isDarkMode ? "text-dark-400" : "text-gray-500"}>
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className={isDarkMode ? "text-dark-400" : "text-gray-500"}>
            {answeredCount} answered
          </span>
        </div>
        <div
          className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${
            isDarkMode ? "bg-dark-700" : "bg-gray-200"
          }`}
        >
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div
        className={`rounded-2xl border p-4 sm:p-6 mb-4 sm:mb-6 ${
          isDarkMode
            ? "bg-dark-800/50 border-dark-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Context / Scenario */}
        {question.context && (
          <div
            className={`mb-3 sm:mb-4 p-3 sm:p-4 rounded-xl text-xs sm:text-sm leading-relaxed border-l-4 border-primary-500 ${
              isDarkMode
                ? "bg-dark-700/50 text-dark-300"
                : "bg-primary-50/50 text-gray-600"
            }`}
          >
            <p className="text-[10px] sm:text-xs font-semibold text-primary-500 mb-1">
              📋 Scenario
            </p>
            {question.context}
          </div>
        )}

        {/* Question */}
        <h2
          className={`text-sm sm:text-lg font-semibold mb-4 sm:mb-6 leading-relaxed ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="text-primary-500 mr-1.5 sm:mr-2">Q{question.id}.</span>
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-2 sm:space-y-3">
          {Object.entries(question.options).map(([key, text]) => {
            const isSelected = selectedAnswers[question.id] === key;
            return (
              <button
                key={key}
                onClick={() => handleSelectAnswer(question.id, key)}
                className={`w-full text-left flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 group active:scale-[0.98] ${
                  isSelected
                    ? "border-primary-500 bg-primary-500/10"
                    : isDarkMode
                    ? "border-dark-600 hover:border-dark-500 hover:bg-dark-700/50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm uppercase transition-colors ${
                    isSelected
                      ? "bg-primary-500 text-white"
                      : isDarkMode
                      ? "bg-dark-700 text-dark-300 group-hover:bg-dark-600"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  }`}
                >
                  {key}
                </span>
                <span
                  className={`flex-1 text-xs sm:text-sm font-medium break-words ${
                    isSelected
                      ? "text-primary-500"
                      : isDarkMode
                      ? "text-dark-200"
                      : "text-gray-700"
                  }`}
                >
                  {text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation & Question dots */}
      <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center mb-4 sm:mb-6">
        {questions.map((q, idx) => {
          const isAnswered = !!selectedAnswers[q.id];
          const isCurrent = idx === currentQuestion;
          return (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(idx)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                isCurrent
                  ? "bg-primary-500 text-white scale-110"
                  : isAnswered
                  ? isDarkMode
                    ? "bg-primary-500/20 text-primary-400"
                    : "bg-primary-100 text-primary-600"
                  : isDarkMode
                  ? "bg-dark-700 text-dark-400 hover:bg-dark-600"
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
              title={`Question ${idx + 1}${isAnswered ? " (answered)" : ""}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
            currentQuestion === 0
              ? "opacity-40 cursor-not-allowed"
              : isDarkMode
              ? "hover:bg-dark-800 text-dark-300"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Previous
        </button>

        {currentQuestion === totalQuestions - 1 ? (
          <button
            onClick={handleFinishQuiz}
            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-lg active:scale-95"
          >
            <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl text-xs sm:text-sm font-medium transition-all hover:shadow-lg active:scale-95"
          >
            Next
            <HiOutlineArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default McqQuiz;
