import { useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";

function CourseRow({ course }) {
  const { id: courseId, course_title, department, num_of_classes_held, percentage } = course;
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const getPercentageColor = (pct) => {
    if (pct >= 75) return 'text-emerald-500 bg-emerald-500/10';
    if (pct >= 50) return 'text-amber-500 bg-amber-500/10';
    return 'text-red-500 bg-red-500/10';
  };

  return (
    <div 
      role="row" 
      onClick={() => navigate(`/courses/${courseId}`)}
      className={`grid grid-cols-4 gap-4 px-6 py-4 items-center cursor-pointer transition-colors group ${
        isDarkMode ? 'hover:bg-dark-700/30' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center">
          <span className="text-sm font-bold text-primary-500">
            {course_title.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course_title}</span>
      </div>
      
      <div className="text-center">
        <span className={`px-3 py-1 rounded-lg text-sm ${
          isDarkMode 
            ? 'bg-dark-700 text-dark-300' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {department}
        </span>
      </div>
      
      <div className={`text-center ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
        {num_of_classes_held || 0}
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${getPercentageColor(percentage || 0)}`}>
          {percentage || 0}%
        </span>
        <HiChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-all ${
          isDarkMode ? 'text-dark-500 group-hover:text-dark-300' : 'text-gray-400 group-hover:text-gray-600'
        }`} />
      </div>
    </div>
  );
}

export default CourseRow;
