import { HiCheck, HiXMark } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";

function ReportRow({ report, courses }) {
  const { course_id, class_held, class_attended, class_date } = report;
  const { isDarkMode } = useTheme();
  
  const course = courses?.find(course => course.id === course_id);
  
  if (!course) return null;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div role="row" className={`grid grid-cols-4 gap-4 px-6 py-4 items-center transition-colors ${
      isDarkMode ? 'hover:bg-dark-700/30' : 'hover:bg-gray-50'
    }`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
          <span className="text-sm font-bold text-emerald-500">
            {course.course_title.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course.course_title}</span>
      </div>
      
      <div className={`text-center text-sm ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
        {formatDate(class_date)}
      </div>
      
      <div className="flex justify-center">
        {class_held === 1 ? (
          <div className="p-1.5 bg-emerald-500/20 rounded-lg">
            <HiCheck className="w-4 h-4 text-emerald-500" />
          </div>
        ) : (
          <div className="p-1.5 bg-red-500/20 rounded-lg">
            <HiXMark className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>
      
      <div className="flex justify-center">
        {class_attended === 1 ? (
          <div className="p-1.5 bg-emerald-500/20 rounded-lg">
            <HiCheck className="w-4 h-4 text-emerald-500" />
          </div>
        ) : (
          <div className="p-1.5 bg-red-500/20 rounded-lg">
            <HiXMark className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportRow;
