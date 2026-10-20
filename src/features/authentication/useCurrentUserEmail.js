import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

// The current signed-in user's email, or null until it resolves / if signed
// out. Used to gate features (e.g. CPC tests) to a specific account.
export function useCurrentUserEmail() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    let cancelled = false;
    supabase.auth.getUser().then(({ data }) => {
      if (!cancelled) setEmail(data?.user?.email ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return email;
}
