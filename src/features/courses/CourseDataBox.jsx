import React from 'react'
import { 
  HiAcademicCap, 
  HiCheckBadge, 
  HiChartBar,
  HiDocumentText
} from 'react-icons/hi2'
import { useTheme } from '../../context/ThemeContext'
import ClassesMissableCard from '../../ui/ClassesMissableCard'

function CourseDataBox({ course }) {
  const { percentage, course_description, num_of_classes_held, num_of_classes_attended } = course
  const { isDarkMode } = useTheme()
  
  const getPercentageColor = (pct) => {
    if (pct >= 75) return 'from-emerald-500 to-emerald-400';
    return 'from-red-500 to-red-400';
  };

  const getPercentageBg = (pct) => {
    if (pct >= 75) return 'bg-emerald-500/20';
    return 'bg-red-500/20';
  };

  return (
    <div className='space-y-4'>
      {/* Description Card */}
      {course_description && (
        <div className={`border rounded-2xl p-5 ${
          isDarkMode 
            ? 'bg-dark-800/50 border-dark-700' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className='flex items-start gap-3'>
            <div className='p-2 bg-primary-500/20 rounded-lg mt-0.5'>
              <HiDocumentText className='w-5 h-5 text-primary-500' />
            </div>
            <div>
              <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Description</p>
              <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>{course_description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Classes Held */}
        <div className={`border rounded-2xl p-5 ${
          isDarkMode 
            ? 'bg-dark-800/50 border-dark-700' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className='flex items-center justify-between mb-3'>
            <div className='p-2 bg-violet-500/20 rounded-lg'>
              <HiAcademicCap className='w-5 h-5 text-violet-500' />
            </div>
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{num_of_classes_held || 0}</p>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Classes Held</p>
        </div>

        {/* Classes Attended */}
        <div className={`border rounded-2xl p-5 ${
          isDarkMode 
            ? 'bg-dark-800/50 border-dark-700' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className='flex items-center justify-between mb-3'>
            <div className='p-2 bg-cyan-500/20 rounded-lg'>
              <HiCheckBadge className='w-5 h-5 text-cyan-500' />
            </div>
          </div>
          <p className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{num_of_classes_attended || 0}</p>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Classes Attended</p>
        </div>

        {/* Attendance Percentage */}
        <div className={`${getPercentageBg(percentage)} border border-dark-700 rounded-2xl p-5`}>
          <div className='flex items-center justify-between mb-3'>
            <div className='p-2 bg-white/10 rounded-lg'>
              <HiChartBar className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
            </div>
          </div>
          <p className={`text-3xl font-bold bg-gradient-to-r ${getPercentageColor(percentage)} bg-clip-text text-transparent mb-1`}>
            {percentage || 0}%
          </p>
          <p className={`text-sm ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>Attendance Rate</p>
        </div>

        {/* Classes I Can Miss Calculator */}
        <ClassesMissableCard course={course} />
      </div>
    </div>
  )
}

export default CourseDataBox
