import React from 'react'
import { useMoveBack } from '../../hooks/useMoveBack'
import CourseDataBox from './CourseDataBox'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import EditCourseForm from './EditCourseForm'
import { useCourse } from './useCourse'
import { useCourses } from './useCourses'
import Spinner from '../../ui/Spinner'
import Empty from '../../ui/Empty'
import CourseReportTable from './CourseReportTable'
import { useDeleteCourse } from './useDeleteCourse'
import { HiArrowLeft, HiPencilSquare, HiTrash, HiPlus } from 'react-icons/hi2'
import { useTheme } from '../../context/ThemeContext'
import CreateReportForm from '../reports/CreateReportForm'

function CourseDetail() {
  const moveback = useMoveBack()
  const { course, isLoading } = useCourse()
  const { courses } = useCourses()
  const { deleteCourse, isDeleting } = useDeleteCourse()
  const { isDarkMode } = useTheme()
  
  if (isLoading) return (
    <div className='flex items-center justify-center py-20'>
      <Spinner />
    </div>
  )
  
  if (!course) return <Empty resourceName="course" />

  const { id: courseId, course_title, course_priority, department } = course

  return (
    <div className='space-y-6 animate-fade-in'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div>
          <button 
            onClick={moveback}
            className={`flex items-center gap-2 transition-colors mb-3 ${
              isDarkMode ? 'text-dark-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <HiArrowLeft className='w-4 h-4' />
            <span className='text-sm'>Back to courses</span>
          </button>
          
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-primary-500/20 rounded-xl'>
              <span className='text-2xl font-bold text-primary-500'>
                {course_title.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <div className='flex items-center gap-3'>
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course_title}</h1>
                <span className={`px-2 py-0.5 rounded-lg text-sm ${
                  isDarkMode ? 'bg-dark-700 text-dark-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  {department}
                </span>
              </div>
              <span className={`text-sm font-medium ${
                course_priority 
                  ? 'text-emerald-500' 
                  : 'text-cyan-500'
              }`}>
                {course_priority ? 'Compulsory Course' : 'Elective Course'}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className='flex gap-2'>
          <Modal>
            <Modal.Open opens="add-report">
              <button 
                className="flex items-center gap-2 px-4 py-2.5 font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#059669', color: '#ffffff' }}
              >
                <HiPlus className='w-4 h-4' />
                <span>Add Report</span>
              </button>
            </Modal.Open>
            <Modal.Window name="add-report">
              <CreateReportForm courses={courses || []} defaultCourseId={courseId} />
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open opens="edit">
              <button className={`flex items-center gap-2 px-4 py-2.5 font-medium rounded-xl transition-colors ${
                isDarkMode 
                  ? 'bg-dark-700 hover:bg-dark-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}>
                <HiPencilSquare className='w-4 h-4' />
                <span>Edit</span>
              </button>
            </Modal.Open>
            <Modal.Window name="edit">
              <EditCourseForm course={course} />
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open opens="delete">
              <button className='flex items-center gap-2 px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-500 font-medium rounded-xl transition-colors'>
                <HiTrash className='w-4 h-4' />
                <span>Delete</span>
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete 
                resourceName="course"
                disabled={isDeleting}
                onConfirm={() => deleteCourse(courseId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>

      {/* Stats */}
      <CourseDataBox course={course} />
      
      {/* Attendance Reports */}
      <div>
        <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Attendance History</h2>
        <CourseReportTable course={course_title} />
      </div>
    </div>
  )
}

export default CourseDetail
