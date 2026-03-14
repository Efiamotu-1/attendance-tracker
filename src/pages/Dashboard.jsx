import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  HiOutlineBookOpen, 
  HiOutlineClipboardDocumentList, 
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineSparkles
} from 'react-icons/hi2'
import { supabase } from '../services/supabase'
import { useCourses } from '../features/courses/useCourses'
import { useReports } from '../features/reports/useReports'
import { useTheme } from '../context/ThemeContext'
import LineGraph from '../ui/LineGraph'

function Dashboard() {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()
  const { courses, isLoading: coursesLoading } = useCourses()
  const { reports, isLoading: reportsLoading } = useReports()
  const { isDarkMode } = useTheme()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUserName(user.user_metadata?.name || user.email?.split('@')[0] || 'Student')
      }
    }
    getUser()
  }, [])

  const totalCourses = courses?.length || 0
  const totalReports = reports?.length || 0
  const coursesAtRisk = courses?.filter(c => (c.percentage || 0) < 70).length || 0

  // Consider user 'new' when there is no data to show in the primary cards
  const isNewUser = !coursesLoading && !reportsLoading && totalCourses === 0 && totalReports === 0 && coursesAtRisk === 0

  const tips = [
    "Create a course for each subject you're enrolled in",
    "Log attendance after each class for accurate tracking",
    "Aim for at least 70% attendance in each course",
    "Review your stats weekly to stay on track"
  ]

  // Get attendance color based on percentage (green for ≥70%, red for <70%)
  const getAttendanceColor = (pct) => {
    if (pct >= 70) return 'text-emerald-500';
    return 'text-red-500';
  };

  return (
    <div className='space-y-6 md:space-y-8 animate-fade-in px-2 xs:px-3 md:px-6 py-2 md:py-4'>
      {/* Welcome Section */}
      <div className={`relative overflow-hidden rounded-2xl p-4 xs:p-6 md:p-8 border ${
        isDarkMode 
          ? 'bg-gradient-to-br from-primary-600/20 via-dark-800 to-dark-900 border-dark-700' 
          : 'bg-gradient-to-br from-primary-100 via-white to-gray-50 border-gray-200'
      }`}>
        {/* Decorative Elements */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl ${
          isDarkMode ? 'bg-primary-500/10' : 'bg-primary-500/20'
        }`} />
        <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl ${
          isDarkMode ? 'bg-violet-500/10' : 'bg-violet-500/20'
        }`} />
        
        <div className='relative z-10'>
          <div className='flex items-center gap-2 text-primary-500 mb-2'>
            <HiOutlineSparkles className='w-5 h-5' />
            <span className='text-sm font-medium'>Welcome back</span>
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hello, {userName}! 👋
          </h1>
          <p className={isDarkMode ? 'text-dark-400' : 'text-gray-600'}>
            Track your attendance, monitor your progress, and stay on top of your academic journey.
          </p>
        </div>
      </div>

      {/* Stats Cards - Side by Side (hide cards with zero value; hide all when user is new) */}
      {!isNewUser && (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Total Courses */}
          {(coursesLoading || totalCourses > 0) && (
            <div className={`backdrop-blur border rounded-2xl p-6 transition-colors ${
              isDarkMode 
                ? 'bg-dark-800/50 border-dark-700 hover:border-dark-600' 
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
            }`}>
              <div className='flex items-center justify-between mb-4'>
                <div className='p-3 bg-primary-500/20 rounded-xl'>
                  <HiOutlineBookOpen className='w-6 h-6 text-primary-500' />
                </div>
                <span className={`text-xs uppercase tracking-wide ${isDarkMode ? 'text-dark-500' : 'text-gray-500'}`}>Courses</span>
              </div>
              <p className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {coursesLoading ? '...' : totalCourses}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Total enrolled</p>
            </div>
          )}

          {/* Total Reports */}
          {(reportsLoading || totalReports > 0) && (
            <div className={`backdrop-blur border rounded-2xl p-6 transition-colors ${
              isDarkMode 
                ? 'bg-dark-800/50 border-dark-700 hover:border-dark-600' 
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
            }`}>
              <div className='flex items-center justify-between mb-4'>
                <div className='p-3 bg-emerald-500/20 rounded-xl'>
                  <HiOutlineClipboardDocumentList className='w-6 h-6 text-emerald-500' />
                </div>
                <span className={`text-xs uppercase tracking-wide ${isDarkMode ? 'text-dark-500' : 'text-gray-500'}`}>Reports</span>
              </div>
              <p className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {reportsLoading ? '...' : totalReports}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Attendance logs</p>
            </div>
          )}

          {/* Courses at Risk */}
          {(coursesLoading || coursesAtRisk > 0) && (
            <div className={`backdrop-blur border rounded-2xl p-6 transition-colors ${
              isDarkMode 
                ? 'bg-dark-800/50 border-dark-700 hover:border-dark-600' 
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
            }`}>
              <div className='flex items-center justify-between mb-4'>
                <div className={`p-3 rounded-xl ${coursesAtRisk > 0 ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}>
                  <HiOutlineExclamationTriangle className={`w-6 h-6 ${coursesAtRisk > 0 ? 'text-red-500' : 'text-emerald-500'}`} />
                </div>
                <span className={`text-xs uppercase tracking-wide ${isDarkMode ? 'text-dark-500' : 'text-gray-500'}`}>At Risk</span>
              </div>
              <p className={`text-3xl font-bold mb-1 ${coursesAtRisk > 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                {coursesLoading ? '...' : coursesAtRisk}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Courses below 70%</p>
            </div>
          )}
        </div>
      )}

      {/* Course Performance Cards */}
      {!isNewUser && (
        <div>
        <div className='flex items-center justify-between mb-4'>
          <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Course Performance
          </h2>
          <div className='flex items-center gap-4 text-xs'>
            <div className='flex items-center gap-1.5'>
              <div className='w-2 h-2 rounded-full bg-emerald-500' />
              <span className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>≥70%</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <div className='w-2 h-2 rounded-full bg-red-500' />
              <span className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>{'<70%'}</span>
            </div>
          </div>
        </div>

        {coursesLoading ? (
          <div className='flex items-center justify-center h-32'>
            <div className='animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full' />
          </div>
        ) : courses && courses.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {courses.map((course) => {
              const percentage = course.percentage || 0;

              return (
                <div 
                  key={course.id}
                  onClick={() => navigate(`/courses/${course.id}`)}
                  className={`backdrop-blur border rounded-2xl p-5 transition-all hover:scale-[1.02] cursor-pointer ${
                    isDarkMode 
                      ? 'bg-dark-800/50 border-dark-700 hover:border-dark-600' 
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className='flex items-start justify-between mb-3'>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      isDarkMode ? 'bg-dark-700 text-dark-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {course.department || 'N/A'}
                    </div>
                    <span className={`text-2xl font-bold ${getAttendanceColor(percentage)}`}>
                      {percentage}%
                    </span>
                  </div>
                  <h3 className={`font-semibold mb-1 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {course.course_title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-dark-500' : 'text-gray-500'}`}>
                    {course.num_of_classes_attended || 0} / {course.num_of_classes_held || 0} classes
                  </p>
                  {/* Progress bar */}
                  <div className={`mt-3 h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-dark-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        percentage >= 70 ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`flex flex-col items-center justify-center py-12 border rounded-2xl ${
            isDarkMode ? 'bg-dark-800/30 border-dark-700 text-dark-400' : 'bg-gray-50 border-gray-200 text-gray-500'
          }`}>
            <HiOutlineBookOpen className='w-12 h-12 mb-3 opacity-50' />
            <p className='text-center'>No courses yet.<br />Add your first course to start tracking!</p>
          </div>
        )}
        </div>
      )}

      {/* Line Graph */}
      {!isNewUser && <LineGraph courses={courses || []} height={320} />}

     

      {/* Tips Section (only show for new users) */}
      {isNewUser && (
        <div className={`border rounded-2xl p-6 ${
          isDarkMode 
            ? 'bg-dark-800/30 border-dark-700' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className='flex items-center gap-2 mb-4'>
            <HiOutlineLightBulb className='w-5 h-5 text-amber-500' />
            <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Getting Started Tips</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {tips.map((tip, index) => (
              <div key={index} className={`flex items-start gap-3 p-3 rounded-xl ${
                isDarkMode ? 'bg-dark-800/50' : 'bg-white'
              }`}>
                <span className='flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center text-sm font-medium'>
                  {index + 1}
                </span>
                <p className={`text-sm ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>{tip}</p>
              </div>
            ))}
          </div>
          <div className='mt-6 flex justify-center'>
            <button
              onClick={() => navigate('/courses')}
              className='px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition'
            >
              Create your first course
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
