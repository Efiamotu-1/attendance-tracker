import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle, HiArrowLeft } from "react-icons/hi2";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
      <div className="text-center max-w-md animate-fade-in">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500/20 rounded-full mb-6">
          <HiOutlineExclamationCircle className="w-12 h-12 text-red-400" />
        </div>
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
        
        {/* Description */}
        <p className="text-dark-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Action */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 transition-all"
        >
          <HiArrowLeft className="w-5 h-5" />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
