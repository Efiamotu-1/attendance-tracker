import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import { HiAcademicCap, HiOutlineArrowLeft } from "react-icons/hi2";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}>
            <HiAcademicCap className="w-8 h-8" style={{ color: '#818cf8' }} />
          </div>
          <span className="text-xl font-bold" style={{ color: '#ffffff' }}>AttendanceTracker</span>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>Forgot password?</h2>
          <p style={{ color: '#94a3b8' }}>Enter your email and we'll send you a reset link</p>
        </div>

        <ForgotPasswordForm />

        <button
          onClick={() => navigate('/login')}
          className="flex items-center justify-center gap-2 mx-auto mt-8 font-semibold hover:opacity-80 transition-opacity"
          style={{ color: '#818cf8' }}
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Back to sign in
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
