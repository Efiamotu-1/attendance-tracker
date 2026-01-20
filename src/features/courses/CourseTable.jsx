import Spinner from "../../ui/Spinner";
import CourseRow from "./CourseRow";
import { useCourses } from "./useCourses";
import Empty from "../../ui/Empty";
import { useTheme } from "../../context/ThemeContext";

function CourseTable() {
  const { isLoading, courses } = useCourses();
  const { isDarkMode } = useTheme();
  
  if (isLoading) return (
    <div className='flex items-center justify-center py-20'>
      <Spinner />
    </div>
  );
  
  if (courses.length < 1) return <Empty resourceName="Course" extra="Kindly add a new course." />;

  return (
    <div className={`backdrop-blur border rounded-2xl overflow-hidden ${
      isDarkMode 
        ? 'bg-dark-800/50 border-dark-700' 
        : 'bg-white border-gray-200 shadow-sm'
    }`}>
      {/* Scrollable wrapper for mobile */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: '600px' }}>
          {/* Table Header */}
          <div className={`grid grid-cols-4 gap-4 px-6 py-4 border-b ${
            isDarkMode 
              ? 'bg-dark-800 border-dark-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Course</div>
            <div className={`text-xs font-semibold uppercase tracking-wider text-center ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Dept</div>
            <div className={`text-xs font-semibold uppercase tracking-wider text-center ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Classes</div>
            <div className={`text-xs font-semibold uppercase tracking-wider text-center ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Attendance</div>
          </div>
          
          {/* Table Body */}
          <div className={`divide-y ${isDarkMode ? 'divide-dark-700/50' : 'divide-gray-100'}`}>
            {courses.map((course) => (
              <CourseRow course={course} key={course.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTable;
