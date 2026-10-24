import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

// The current signed-in user's id, or null until it resolves / if signed
// out. Used to gate features to a specific account by id (more stable than
// email for one-off blocks tied to a user_id seen in quiz_attempts/reports).
export function useCurrentUserId() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    supabase.auth.getUser().then(({ data }) => {
      if (!cancelled) setUserId(data?.user?.id ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return userId;
}
