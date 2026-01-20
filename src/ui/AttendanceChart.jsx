import { useTheme } from '../context/ThemeContext';

function AttendanceChart({ courses }) {
  const { isDarkMode } = useTheme();

  if (!courses || courses.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 border rounded-2xl ${
        isDarkMode 
          ? 'bg-dark-800/50 border-dark-700' 
          : 'bg-white border-gray-200'
      }`}>
        <p className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>
          No courses to display. Add some courses to see your attendance chart.
        </p>
      </div>
    );
  }

  // Get color based on percentage
  function getBarColor(percentage) {
    if (percentage >= 75) return { bg: '#059669', gradient: 'from-emerald-500 to-emerald-400' };
    if (percentage >= 50) return { bg: '#f59e0b', gradient: 'from-amber-500 to-yellow-400' };
    return { bg: '#ef4444', gradient: 'from-red-500 to-rose-400' };
  }

  // Find maximum for scaling
  const maxPercentage = 100;

  return (
    <div className={`border rounded-2xl p-6 ${
      isDarkMode 
        ? 'bg-dark-800/50 border-dark-700' 
        : 'bg-white border-gray-200 shadow-sm'
    }`}>
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Attendance by Course
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
            Your attendance percentage for each course
          </p>
        </div>
        {/* Legend */}
        <div className="hidden sm:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>≥75%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>50-74%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>{'<50%'}</span>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        {courses.map((course, index) => {
          const percentage = course.percentage || 0;
          const color = getBarColor(percentage);
          const barWidth = (percentage / maxPercentage) * 100;

          return (
            <div key={course.id} className="group">
              {/* Course Info Row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: color.bg }}
                  >
                    {course.department?.slice(0, 2) || (index + 1)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {course.course_title}
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-dark-500' : 'text-gray-400'}`}>
                      {course.num_of_classes_attended || 0} / {course.num_of_classes_held || 0} classes
                    </p>
                  </div>
                </div>
                <span 
                  className="flex-shrink-0 text-lg font-bold ml-4"
                  style={{ color: color.bg }}
                >
                  {percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div 
                className="h-3 rounded-full overflow-hidden"
                style={{ backgroundColor: isDarkMode ? '#1e293b' : '#e5e7eb' }}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${color.gradient} transition-all duration-700 ease-out relative overflow-hidden`}
                  style={{ 
                    width: `${barWidth}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Section */}
      <div 
        className="mt-6 pt-6 border-t grid grid-cols-3 gap-4"
        style={{ borderColor: isDarkMode ? '#334155' : '#e5e7eb' }}
      >
        <div className="text-center">
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {courses.length}
          </p>
          <p className={`text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
            Total Courses
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-500">
            {courses.filter(c => (c.percentage || 0) >= 75).length}
          </p>
          <p className={`text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
            On Track
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-500">
            {courses.filter(c => (c.percentage || 0) < 75).length}
          </p>
          <p className={`text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
            Need Attention
          </p>
        </div>
      </div>
    </div>
  );
}

export default AttendanceChart;
