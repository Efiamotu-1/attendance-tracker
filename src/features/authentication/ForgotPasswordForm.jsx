import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { useForgotPassword } from "./useForgotPassword";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const { sendResetEmail, isLoading, isSuccess } = useForgotPassword();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    sendResetEmail(email);
  }

  const inputStyle = {
    backgroundColor: "#1e293b",
    color: "#ffffff",
    WebkitTextFillColor: "#ffffff",
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-3">
        <p style={{ color: "#ffffff" }} className="font-semibold">
          Check your inbox
        </p>
        <p style={{ color: "#94a3b8" }} className="text-sm">
          We sent a password reset link to <span style={{ color: "#e2e8f0" }}>{email}</span>.
          Follow the link to choose a new password.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-dark-300">
          Email address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiEnvelope className="h-5 w-5 text-dark-500" />
          </div>
          <input
            className="w-full pl-11 pr-4 py-3 border border-dark-600 rounded-xl placeholder-dark-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            style={inputStyle}
            type="email"
            id="email"
            placeholder="you@example.com"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 px-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ backgroundColor: "#059669", color: "#ffffff" }}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending link...</span>
          </>
        ) : (
          "Send reset link"
        )}
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
