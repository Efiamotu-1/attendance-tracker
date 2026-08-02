import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import Spinner from "../ui/Spinner";
import { HiAcademicCap } from "react-icons/hi2";

function ResetPassword() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("checking"); // checking | ready | invalid

  useEffect(() => {
    let isMounted = true;

    // If the recovery link already produced a session by the time we mount, we're ready.
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (isMounted && session) setStatus("ready");
    });

    // Supabase fires PASSWORD_RECOVERY once it parses the token from the URL.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" && session) {
        setStatus("ready");
      }
    });

    // If nothing happens shortly, the link was invalid or expired.
    const timeout = setTimeout(() => {
      setStatus((current) => (current === "checking" ? "invalid" : current));
    }, 4000);

    return () => {
      isMounted = false;
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}>
            <HiAcademicCap className="w-8 h-8" style={{ color: '#818cf8' }} />
          </div>
          <span className="text-xl font-bold" style={{ color: '#ffffff' }}>AttendanceTracker</span>
        </div>

        {status === "checking" && (
          <div className="flex flex-col items-center gap-4 py-8">
            <Spinner />
            <p style={{ color: '#94a3b8' }}>Verifying your reset link...</p>
          </div>
        )}

        {status === "ready" && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>Set a new password</h2>
              <p style={{ color: '#94a3b8' }}>Choose a strong password for your account</p>
            </div>
            <ResetPasswordForm />
          </>
        )}

        {status === "invalid" && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold" style={{ color: '#ffffff' }}>Link expired or invalid</h2>
            <p style={{ color: '#94a3b8' }}>
              This password reset link is no longer valid. Please request a new one.
            </p>
            <button
              onClick={() => navigate('/forgot-password')}
              className="w-full py-3.5 px-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#059669', color: '#ffffff' }}
            >
              Request new link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
