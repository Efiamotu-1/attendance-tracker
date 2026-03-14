import { supabase } from "./supabase";

/**
 * Get all quiz attempts for the current user
 */
export async function getQuizAttempts() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Get quiz attempts for a specific quiz (session + course)
 */
export async function getQuizAttemptsByCourse(sessionId, courseId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .eq("user_id", user.id)
    .eq("session_id", sessionId)
    .eq("course_id", courseId)
    .order("completed_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Save a new quiz attempt
 */
export async function saveQuizAttempt({
  sessionId,
  courseId,
  courseName,
  year,
  session,
  score,
  totalQuestions,
  percentage,
  timeElapsed,
  correctCount,
  incorrectCount,
  skippedCount,
  bonusCount,
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("quiz_attempts")
    .insert({
      user_id: user.id,
      session_id: sessionId,
      course_id: courseId,
      course_name: courseName,
      year,
      session,
      score,
      total_questions: totalQuestions,
      percentage,
      time_elapsed: timeElapsed,
      correct_count: correctCount,
      incorrect_count: incorrectCount,
      skipped_count: skippedCount,
      bonus_count: bonusCount,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Delete a specific quiz attempt
 */
export async function deleteQuizAttempt(id) {
  const { error } = await supabase
    .from("quiz_attempts")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return { message: "Quiz attempt deleted" };
}

/**
 * Clear all quiz attempts for the current user
 */
export async function clearAllQuizAttempts() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { error } = await supabase
    .from("quiz_attempts")
    .delete()
    .eq("user_id", user.id);

  if (error) {
    throw new Error(error.message);
  }

  return { message: "All quiz attempts cleared" };
}
