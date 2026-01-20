import React from 'react'
import ReportTable from '../features/reports/ReportTable'
import AddReport from '../features/reports/AddReport'
import { useCourses } from '../features/courses/useCourses'
import Spinner from '../ui/Spinner'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'

function Reports() {
  const { courses, isLoading } = useCourses()
  const { isDarkMode } = useTheme()
  
  if (isLoading) return (
    <div className='flex items-center justify-center py-20'>
      <Spinner />
    </div>
  )
  
  return (
    <div className='space-y-6 animate-fade-in'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-emerald-500/20 rounded-xl'>
            <HiOutlineClipboardDocumentList className='w-6 h-6 text-emerald-500' />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Attendance Reports</h1>
            <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Track your daily class attendance</p>
          </div>
        </div>
        {courses.length > 0 && <AddReport courses={courses} />}
      </div>

      {/* Table */}
      <ReportTable courses={courses} />
    </div>
  )
}

export default Reports
