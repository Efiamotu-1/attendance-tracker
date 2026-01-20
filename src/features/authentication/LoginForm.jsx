import { useState } from "react";
import { useLogin } from "./useLogin";
import { HiEye, HiEyeSlash, HiEnvelope, HiLockClosed } from 'react-icons/hi2';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password }, {
      onError: () => {
        setEmail('');
        setPassword('');
      }
    });
  }

  // Input styles to override browser autofill
  const inputStyle = {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    WebkitTextFillColor: '#ffffff',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Field */}
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

      {/* Password Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-dark-300">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiLockClosed className="h-5 w-5 text-dark-500" />
          </div>
          <input
            className="w-full pl-11 pr-12 py-3 border border-dark-600 rounded-xl placeholder-dark-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            style={inputStyle}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-dark-500 hover:text-dark-300 transition-colors"
          >
            {showPassword ? <HiEye className="h-5 w-5" /> : <HiEyeSlash className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 px-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ 
          backgroundColor: '#059669',
          color: '#ffffff'
        }}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Signing in...</span>
          </>
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
}

export default LoginForm;
