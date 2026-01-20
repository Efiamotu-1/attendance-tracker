import { supabase } from "./supabase";

export async function getCourses() {
  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  // Get all courses for the user
  const { data: courses, error: coursesError } = await supabase
    .from("courses")
    .select("*")
    .eq("user_id", user.id);

  if (coursesError) {
    throw new Error(coursesError.message);
  }

  // Get attendance stats for each course
  const coursesWithStats = await Promise.all(
    courses.map(async (course) => {
      const { data: attendance, error: attendanceError } = await supabase
        .from("attendance")
        .select("*")
        .eq("course_id", course.id);

      if (attendanceError) {
        console.error("Attendance fetch error:", attendanceError);
        return {
          ...course,
          num_of_classes_held: 0,
          num_of_classes_attended: 0,
          percentage: 0,
        };
      }

      const num_of_classes_held = attendance.filter(
        (a) => a.class_held === 1
      ).length;
      const num_of_classes_attended = attendance.filter(
        (a) => a.class_attended === 1
      ).length;
      const percentage =
        num_of_classes_held > 0
          ? Math.round((num_of_classes_attended / num_of_classes_held) * 100)
          : 0;

      return {
        ...course,
        num_of_classes_held,
        num_of_classes_attended,
        percentage,
      };
    })
  );

  return coursesWithStats;
}

export async function getCourse(id) {
  // Get the course
  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (courseError) {
    throw new Error(courseError.message);
  }

  // Get attendance stats for this course
  const { data: attendance, error: attendanceError } = await supabase
    .from("attendance")
    .select("*")
    .eq("course_id", id);

  if (attendanceError) {
    console.error("Attendance fetch error:", attendanceError);
    return {
      ...course,
      num_of_classes_held: 0,
      num_of_classes_attended: 0,
      percentage: 0,
    };
  }

  const num_of_classes_held = attendance.filter(
    (a) => a.class_held === 1
  ).length;
  const num_of_classes_attended = attendance.filter(
    (a) => a.class_attended === 1
  ).length;
  const percentage =
    num_of_classes_held > 0
      ? Math.round((num_of_classes_attended / num_of_classes_held) * 100)
      : 0;

  return {
    ...course,
    num_of_classes_held,
    num_of_classes_attended,
    percentage,
  };
}

export async function getCourseAttendance(id) {
  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("course_id", id)
    .order("class_date", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createCourse({
  courseDescription,
  courseTitle,
  coursePriority,
  department,
}) {
  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("courses")
    .insert({
      course_title: courseTitle,
      course_description: courseDescription,
      course_priority: coursePriority,
      department,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function editCourse({
  courseDescription,
  courseTitle,
  coursePriority,
  department,
  courseId,
}) {
  const { data, error } = await supabase
    .from("courses")
    .update({
      course_title: courseTitle,
      course_description: courseDescription,
      course_priority: coursePriority,
      department,
    })
    .eq("id", courseId)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteCourse(id) {
  const { error } = await supabase.from("courses").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return { message: "Course deleted successfully" };
}
