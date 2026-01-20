import { supabase } from "./supabase";

export async function getReports() {
  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("user_id", user.id)
    .order("class_date", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function addReport({ courseId, classDate, held, attended }) {
  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("attendance")
    .insert({
      course_id: courseId,
      class_date: classDate,
      class_held: held === true ? 1 : 0,
      class_attended: attended === true ? 1 : 0,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
