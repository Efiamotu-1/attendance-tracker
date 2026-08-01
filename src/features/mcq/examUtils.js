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
      return a.session.localeCompare(b.session);
    });
}

export function getCompleteExamYears(mcqQuestions) {
  return [...new Set(getCompleteExamSessions(mcqQuestions).map((session) => session.year))].sort(
    (a, b) => b - a
  );
}
