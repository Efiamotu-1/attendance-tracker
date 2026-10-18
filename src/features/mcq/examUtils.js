// Practice sessions (practice-1..practice-N) and Snap Test sessions
// (snap-test-*) each share a synthetic numeric "year" so they group into
// their own bucket in the exam-session list — it isn't a real year, so it
// must never be appended to the displayed label. "Practice 1", not
// "Practice 1 9999"; "Snap Test (Lagos Campus)", not "... 9998".
export const PRACTICE_YEAR = 9999;
export const SNAP_TEST_YEAR = 9998;
export const isSyntheticYear = (year) => year === PRACTICE_YEAR || year === SNAP_TEST_YEAR;

// Single source of truth for rendering a session's label. Accepts either
// { session, year } or the quiz_attempts shape { session, year } directly.
export function formatExamSessionLabel(session) {
  if (!session) return "";
  return isSyntheticYear(session.year) ? session.session : `${session.session} ${session.year}`;
}

export function getCompleteExamSessions(mcqQuestions) {
  return Object.entries(mcqQuestions)
    .flatMap(([sessionId, session]) => {
      if (!session?.courses || session.courses.length !== 5) return [];

      return [
        {
          sessionId,
          year: session.year,
          session: session.session,
          examTitle: session.examTitle,
          courseCount: session.courses.length,
          totalQuestions: session.courses.reduce(
            (sum, course) => sum + (course.questionsCount || course.questions.length || 0),
            0
          ),
          courses: session.courses.map((course) => ({
            id: course.id,
            name: course.name,
            questionsCount: course.questionsCount || course.questions.length || 0,
          })),
        },
      ];
    })
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return a.session.localeCompare(b.session, undefined, { numeric: true });
    });
}

export function getCompleteExamYears(mcqQuestions) {
  return [...new Set(getCompleteExamSessions(mcqQuestions).map((session) => session.year))].sort(
    (a, b) => b - a
  );
}
