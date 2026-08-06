import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import {
  HiAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentCheck,
  HiOutlineTrophy,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { getUsersCount } from "../services/apiAuth";
import { supabase } from "../services/supabase";
import mcqQuestions from "../data/mcqQuestions";

const EXAM_SESSIONS_COUNT = Object.keys(mcqQuestions).length;
const TOTAL_MCQ_QUESTIONS = Object.values(mcqQuestions).reduce(
  (sum, session) => sum + (session.totalQuestions || 0),
  0
);

const PLATFORM_PILLARS = [
  {
    icon: HiOutlineCalendarDays,
    title: "70% Attendance Tracker",
    description:
      "Live pass/fail barometer against the NLS 15-week term, with a safe class-miss margin so you always know where you stand.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Bar Finals MCQ Engine",
    description:
      "1,500+ authentic past questions across all 5 core courses — full mock exams, subject drills, and topic-by-topic quizzes.",
  },
  {
    icon: HiOutlineTrophy,
    title: "Performance & Leaderboards",
    description:
      "Track your score history and time-per-attempt, then see how you rank against fellow Law School students nationwide.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "NLS Campus Companion",
    description:
      "Survival tips, cab directories, and downloadable past question papers — everything else you need to get through the term.",
  },
];

function Login() {
  const navigate = useNavigate();
  const [usersCount, setUsersCount] = useState(null);

  useEffect(() => {
    getUsersCount().then(({ count }) => setUsersCount(count));
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/dashboard", { replace: true });
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#0a0f1a' }}>
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        {/* Background Gradient */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom right, rgba(79, 70, 229, 0.3), #0f172a, #0a0f1a)' 
          }} 
        />
        
        {/* Animated Circles */}
        <div 
          className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: 'rgba(6, 182, 212, 0.15)', animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)', animationDelay: '2s' }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16 py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.3)' }}>
              <HiAcademicCap className="w-10 h-10" style={{ color: '#818cf8' }} />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>AttendanceTracker</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-4" style={{ color: '#ffffff' }}>
            Your NLS Term,
            <span
              className="block"
              style={{
                background: 'linear-gradient(to right, #818cf8, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Fully Under Control
            </span>
          </h1>

          <p className="text-base xl:text-lg max-w-md leading-relaxed mb-8" style={{ color: '#94a3b8' }}>
            The all-in-one academic companion for Nigerian Law School students —
            stay above the 70% mandatory attendance threshold and master the
            Bar Finals MCQs, in one unified portal.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-4 max-w-md mb-10">
            {PLATFORM_PILLARS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(99, 102, 241, 0.15)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#818cf8' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#ffffff' }}>
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed mt-0.5" style={{ color: '#94a3b8' }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-6" style={{ borderTop: '1px solid rgba(148, 163, 184, 0.15)' }}>
            <div>
              <p className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                {usersCount === null ? '—' : `${usersCount}+`}
              </p>
              <p className="text-sm" style={{ color: '#64748b' }}>Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: '#ffffff' }}>{EXAM_SESSIONS_COUNT}</p>
              <p className="text-sm" style={{ color: '#64748b' }}>Exam Sessions</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: '#ffffff' }}>{TOTAL_MCQ_QUESTIONS}+</p>
              <p className="text-sm" style={{ color: '#64748b' }}>MCQ Questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8" style={{ backgroundColor: '#0a0f1a' }}>
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center justify-center gap-3 mb-8 lg:hidden">
            <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}>
              <HiAcademicCap className="w-8 h-8" style={{ color: '#818cf8' }} />
            </div>
            <span className="text-xl font-bold" style={{ color: '#ffffff' }}>AttendanceTracker</span>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>Welcome back</h2>
            <p style={{ color: '#94a3b8' }}>Sign in to continue to your dashboard</p>
          </div>
          
          <LoginForm />
          
          <p className="text-center mt-8" style={{ color: '#94a3b8' }}>
            Don't have an account?{" "}
            <button 
              onClick={() => navigate('/signup')}
              className="font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#818cf8' }}
            >
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
