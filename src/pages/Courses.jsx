import React from 'react'
import CourseTable from '../features/courses/CourseTable'
import AddCourse from '../features/courses/AddCourse'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'

function Courses() {
  const { isDarkMode } = useTheme()
  
  return (
    <div className='space-y-5 md:space-y-6 animate-fade-in px-2 xs:px-3 md:px-6 py-2 md:py-4'>
      {/* Header */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4'>
        <div className='flex items-center gap-2 md:gap-3'>
          <div className='p-2 bg-primary-500/20 rounded-xl'>
            <HiOutlineBookOpen className='w-6 h-6 text-primary-500' />
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Courses</h1>
            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Manage your enrolled courses</p>
          </div>
        </div>
        <AddCourse />
      </div>

      {/* Table */}
      <CourseTable />
    </div>
  )
}

export default Courses
