import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../features/authentication/SignupForm";
import {
  HiAcademicCap,
  HiCheckCircle,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentCheck,
  HiOutlineTrophy,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { supabase } from "../services/supabase";

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

function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/dashboard", { replace: true });
    });
  }, [navigate]);

  const features = [
    "Track attendance across all 5 core courses",
    "1,500+ Bar Finals MCQ past questions",
    "Timed mock exams & topic-by-topic quizzes",
    "Global leaderboards & performance analytics",
    "Campus survival guides & downloadable resources",
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#0a0f1a' }}>
      {/* Left Side - Form */}
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
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>Create account</h2>
            <p style={{ color: '#94a3b8' }}>Start tracking your attendance today</p>
          </div>
          
          <SignupForm />
          
          <p className="text-center mt-8" style={{ color: '#94a3b8' }}>
            Already have an account?{" "}
            <button 
              onClick={() => navigate('/login')}
              className="font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#818cf8' }}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
      
      {/* Right Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        {/* Background Gradient */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom left, rgba(79, 70, 229, 0.3), #0f172a, #0a0f1a)' 
          }} 
        />
        
        {/* Animated Circles */}
        <div 
          className="absolute top-32 right-32 w-80 h-80 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
        />
        <div 
          className="absolute bottom-32 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', animationDelay: '1.5s' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: 'rgba(6, 182, 212, 0.15)', animationDelay: '0.5s' }}
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
            Join Thousands of
            <span
              className="block"
              style={{
                background: 'linear-gradient(to right, #818cf8, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Successful Law Students
            </span>
          </h1>

          <p className="text-base xl:text-lg max-w-md leading-relaxed mb-8" style={{ color: '#94a3b8' }}>
            One account for your entire NLS term — meet the 70% attendance
            threshold with confidence and walk into the Bar Finals having
            drilled every question that matters.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-4 max-w-md mb-8">
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

          {/* Feature checklist */}
          <div
            className="space-y-2.5 pt-6"
            style={{ borderTop: '1px solid rgba(148, 163, 184, 0.15)' }}
          >
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-2.5"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <HiCheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#34d399' }} />
                <span className="text-sm" style={{ color: '#cbd5e1' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
