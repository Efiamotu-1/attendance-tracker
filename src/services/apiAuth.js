import { supabase } from "./supabase";

export async function signup({ name, email, password }) {
  // 1. Sign up the user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
          },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  // 2. Create a profile record for the user
  if (data?.user) {
    const { error: profileError } = await supabase.from("profiles").insert({
      id: data.user.id,
      name,
      email,
    });

    if (profileError) {
      console.error("Profile creation error:", profileError);
    }
  }

  return {
    user: data.user,
    session: data.session,
  };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user,
    session: data.session,
  };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function getUsersCount() {
  const { data, error } = await supabase.rpc("get_users_count");

  if (error) {
    console.error("Error getting users count:", error);
    return { count: 0 };
  }

  return { count: data };
}
