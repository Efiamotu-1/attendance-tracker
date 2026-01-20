import { useNavigate } from "react-router-dom";
import SignupForm from "../features/authentication/SignupForm";
import { HiAcademicCap, HiCheckCircle } from "react-icons/hi2";

function Signup() {
  const navigate = useNavigate();
  
  const features = [
    "Track attendance across all courses",
    "Real-time percentage calculations",
    "Course management dashboard",
    "Detailed attendance reports"
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
        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.3)' }}>
              <HiAcademicCap className="w-10 h-10" style={{ color: '#818cf8' }} />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>AttendanceTracker</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
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
              Successful Students
            </span>
          </h1>
          
          <p className="text-lg max-w-md leading-relaxed mb-8" style={{ color: '#94a3b8' }}>
            Take control of your academic attendance and never fall behind on your required class hours.
          </p>
          
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={feature} 
                className="flex items-center gap-3"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <HiCheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#34d399' }} />
                <span style={{ color: '#cbd5e1' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
