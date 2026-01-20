import Spinner from "../../ui/Spinner";
import { useCourseAttendance } from "./useCourseAttendance";
import CourseReportRow from "./CourseReportRow";
import Empty from "../../ui/Empty";
import { useTheme } from "../../context/ThemeContext";

function CourseReportTable({ course }) {
  const { courseAttendance, isLoading } = useCourseAttendance();
  const { isDarkMode } = useTheme();
  
  if (isLoading) return (
    <div className='flex items-center justify-center py-12'>
      <Spinner />
    </div>
  );
  
  if (courseAttendance.length < 1) return (
    <Empty 
      resourceName="attendance records" 
      extra="No attendance records for this course yet."
    />
  );

  return (
    <div className={`backdrop-blur border rounded-2xl overflow-hidden ${
      isDarkMode 
        ? 'bg-dark-800/50 border-dark-700' 
        : 'bg-white border-gray-200 shadow-sm'
    }`}>
      {/* Scrollable wrapper for mobile */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: '500px' }}>
          {/* Table Header */}
          <div className={`grid grid-cols-4 gap-4 px-6 py-4 border-b ${
            isDarkMode 
              ? 'bg-dark-800 border-dark-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Course</div>
            <div className={`text-xs font-semibold uppercase tracking-wider text-center ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Date</div>
            <div className={`text-xs font-semibold uppercase tracking-wider text-center ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Class Held</div>
            <div className={`text-xs font-semibold uppercase tracking-wider text-center ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Attended</div>
          </div>
          
          {/* Table Body */}
          <div className={`divide-y ${isDarkMode ? 'divide-dark-700/50' : 'divide-gray-100'}`}>
            {courseAttendance.map((report) => (
              <CourseReportRow report={report} key={report.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseReportTable;
