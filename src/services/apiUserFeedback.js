import { supabase } from "./supabase";

/**
 * Get current user's profile (to check admin role)
 */
export async function getProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    // If profile doesn't exist yet, return default
    if (error.code === "PGRST116") return { id: user.id, role: "user" };
    throw new Error(error.message);
  }
  return data;
}

/**
 * Get feedback items — admin sees all, regular user sees own
 */
export async function getUserFeedback(isAdmin = false) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("User not authenticated");

  let query = supabase
    .from("user_feedback")
    .select("*")
    .order("created_at", { ascending: false });

  // Regular users only see their own
  if (!isAdmin) {
    query = query.eq("user_id", user.id);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  // Admin-only: attach the reporting user's name/email so admins can see who
  // sent each report. `user_feedback.user_id` references auth.users, not
  // profiles, so there's no automatic join — fetch profiles separately and
  // merge them in by id. Never exposed to regular users (query above already
  // scopes non-admins to their own rows, but we also just skip this fetch).
  if (isAdmin && data && data.length > 0) {
    const userIds = [...new Set(data.map((item) => item.user_id))];
    const { data: profiles, error: profilesError } = await supabase
      .from("profiles")
      .select("id, name, email")
      .in("id", userIds);

    if (!profilesError && profiles) {
      const profileById = new Map(profiles.map((p) => [p.id, p]));
      return data.map((item) => ({
        ...item,
        reporter_name: profileById.get(item.user_id)?.name || null,
        reporter_email: profileById.get(item.user_id)?.email || null,
      }));
    }
  }

  return data;
}

/**
 * Create a new feedback item
 */
export async function createUserFeedback({
  type,
  title,
  description,
  relatedQuiz,
  relatedQuestionNumber,
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("user_feedback")
    .insert({
      user_id: user.id,
      type,
      title,
      description,
      related_quiz: relatedQuiz || null,
      related_question_number: relatedQuestionNumber || null,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Delete a feedback item
 */
export async function deleteUserFeedback(id) {
  const { error } = await supabase
    .from("user_feedback")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return { message: "Feedback deleted" };
}

/**
 * Update feedback — admin can change status and/or add a comment
 * Both fields are saved on the user_feedback row directly.
 */
export async function updateFeedback(id, { status, admin_comment }) {
  const updateData = {};
  if (status !== undefined) updateData.status = status;
  if (admin_comment !== undefined) updateData.admin_comment = admin_comment;

  const { data, error } = await supabase
    .from("user_feedback")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Create a question report (special feedback type)
 */
export async function createQuestionReport({
  bugType,
  proposedAnswer,
  reason,
  question,
  quizContext,
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("user_feedback")
    .insert({
      user_id: user.id,
      type: "question_report",
      title: `Question Report: ${question.id || `Q${question.questionNumber}`}`,
      description: reason,
      bug_type: bugType,
      proposed_answer: proposedAnswer,
      question_id: question.id || `${question.questionNumber}`,
      quiz_type: quizContext?.quizType,
      exam_session: quizContext?.examSession,
      course_name: quizContext?.courseName,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
