// Practice sessions (practice-1..practice-N), Pre-Bar sessions (pre-bar-*),
// Snap Test sessions (snap-test-*) and CPC sessions (cpc-*) each share a
// synthetic numeric "year" so they group into their own bucket in the
// exam-session list — it isn't a real year, so it must never be appended
// to the displayed label. "Practice 1", not "Practice 1 9999"; "Pre-Bar",
// not "... 9998"; "Snap Test (Lagos Campus)", not "... 9997"; "CPC Test 1",
// not "... 9996". The exam-session tab list sorts by this number
// descending, so the numbers below are chosen to land the tabs in the
// order Practice, Pre-Bar, Snap Tests, CPC, then real years. The real
// sitting date for a Pre-Bar session lives in its `session`/`examTitle`
// text instead (same pattern Snap Test uses), so a later Pre-Bar sitting
// (e.g. 2025) gets its own session key without needing its own bucket.
export const PRACTICE_YEAR = 9999;
export const PRE_BAR_YEAR = 9998;
export const SNAP_TEST_YEAR = 9997;
export const CPC_YEAR = 9996;
export const isSyntheticYear = (year) =>
  year === PRACTICE_YEAR || year === PRE_BAR_YEAR || year === SNAP_TEST_YEAR || year === CPC_YEAR;

// CPC (cpc-*) sessions are visible only to this account, everywhere they
// could surface — the past-questions session list, quiz access, and the
// leaderboard. Not a security boundary (client-side only); just keeps the
// in-progress CPC content from appearing for other users.
export const CPC_VISIBLE_TO_EMAIL = "musahabeebefy12@gmail.com";
export const isCpcSession = (year) => year === CPC_YEAR;

// Single source of truth for rendering a session's label. Accepts either
// { session, year } or the quiz_attempts shape { session, year } directly.
export function formatExamSessionLabel(session) {
  if (!session) return "";
  return isSyntheticYear(session.year) ? session.session : `${session.session} ${session.year}`;
}

export function getCompleteExamSessions(mcqQuestions) {
  return Object.entries(mcqQuestions)
    .flatMap(([sessionId, session]) => {
      if (!session?.courses || session.courses.length === 0) return [];

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
