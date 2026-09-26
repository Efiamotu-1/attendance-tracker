import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setIsAuthenticated(false);
        navigate("/login");
        setIsLoading(false);
        return;
      }

      // getSession() only checks the locally cached token's expiry — it
      // does NOT confirm the server still honours it. A revoked/invalid
      // refresh token (e.g. after a password change, a stale tab left open
      // across a session rotation, or a corrupted localStorage entry) would
      // otherwise let a dead session through, and every subsequent request
      // across the app would 403 in a loop with no redirect ever firing.
      // getUser() round-trips to the server, so it catches that case.
      const { error } = await supabase.auth.getUser();

      if (error) {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        navigate("/login");
        setIsLoading(false);
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
    }

    checkAuth();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        setIsAuthenticated(false);
        navigate("/login");
      } else if (event === "TOKEN_REFRESHED" || event === "SIGNED_IN") {
        setIsAuthenticated(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#111827]">
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
