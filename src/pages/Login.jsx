import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import { HiAcademicCap } from "react-icons/hi2";

function Login() {
  const navigate = useNavigate();
  
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
        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.3)' }}>
              <HiAcademicCap className="w-10 h-10" style={{ color: '#818cf8' }} />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>AttendanceTracker</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
            Track Your
            <span 
              className="block" 
              style={{ 
                background: 'linear-gradient(to right, #818cf8, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Academic Journey
            </span>
          </h1>
          
          <p className="text-lg max-w-md leading-relaxed" style={{ color: '#94a3b8' }}>
            Stay on top of your attendance records, monitor your progress, and ensure you never miss an important class.
          </p>
          
          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-3xl font-bold" style={{ color: '#ffffff' }}>98%</p>
              <p className="text-sm" style={{ color: '#64748b' }}>Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: '#ffffff' }}>1000+</p>
              <p className="text-sm" style={{ color: '#64748b' }}>Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: '#ffffff' }}>50+</p>
              <p className="text-sm" style={{ color: '#64748b' }}>Institutions</p>
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
