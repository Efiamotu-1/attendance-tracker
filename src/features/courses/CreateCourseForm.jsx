import { useState } from "react";
import { useCreateCourse } from "./useCreateCourse";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";

function CreateCourseForm({ onCloseModal }) {
  const [courseTitle, setCourseTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [coursePriority, setCoursePriority] = useState(true);
  const [courseDescription, setCourseDescription] = useState('');
  const { isCreating, createCourse } = useCreateCourse();
  const { isDarkMode } = useTheme();

  function handleSubmit(e) {
    e.preventDefault();
    if (!courseTitle || !department || !courseDescription) return;
    createCourse({ courseDescription, courseTitle, coursePriority, department }, {
      onSuccess: () => {
        onCloseModal?.();
      }
    });
  }

  const inputStyle = {
    backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb',
    borderColor: isDarkMode ? '#475569' : '#d1d5db',
    color: isDarkMode ? '#ffffff' : '#111827',
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl transition-all focus:ring-2 focus:ring-emerald-500/20 border focus:border-emerald-500`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Header */}
      <div className={`flex items-center gap-3 pb-4 border-b ${
        isDarkMode ? 'border-dark-700' : 'border-gray-200'
      }`}>
        <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(5, 150, 105, 0.2)' }}>
          <HiOutlineBookOpen className="w-6 h-6" style={{ color: '#059669' }} />
        </div>
        <div>
          <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>New Course</h2>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Add a course to track attendance</p>
        </div>
      </div>

      {/* Course Name */}
      <div className="space-y-2">
        <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
          Course Name
        </label>
        <input
          className={inputClasses}
          style={inputStyle}
          type="text"
          id="name"
          placeholder="e.g. Introduction to Computer Science"
          disabled={isCreating}
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </div>

      {/* Department */}
      <div className="space-y-2">
        <label htmlFor="department" className={`block text-sm font-medium ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
          Department Code
        </label>
        <input
          className={inputClasses}
          style={inputStyle}
          type="text"
          id="department"
          placeholder="e.g. CS, MATH, PHY"
          disabled={isCreating}
          value={department}
          onChange={(e) => setDepartment(e.target.value.toUpperCase())}
          maxLength={6}
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label htmlFor="description" className={`block text-sm font-medium ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
          Description
        </label>
        <input
          className={inputClasses}
          style={inputStyle}
          type="text"
          id="description"
          placeholder="Brief course description"
          disabled={isCreating}
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </div>

      {/* Priority Toggle */}
      <div className={`flex items-center justify-between p-4 rounded-xl border ${
        isDarkMode ? 'bg-dark-900 border-dark-600' : 'bg-gray-50 border-gray-300'
      }`}>
        <div>
          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Compulsory Course</p>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Mark if this is a required course</p>
        </div>
        <button
          type="button"
          onClick={() => setCoursePriority(!coursePriority)}
          disabled={isCreating}
          className="relative w-12 h-7 rounded-full transition-colors"
          style={{ 
            backgroundColor: coursePriority ? '#059669' : (isDarkMode ? '#475569' : '#d1d5db')
          }}
        >
          <span 
            className="absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform"
            style={{ left: coursePriority ? '24px' : '4px' }}
          />
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={() => onCloseModal?.()}
          className={`flex-1 px-4 py-3 font-medium rounded-xl transition-colors ${
            isDarkMode 
              ? 'bg-dark-700 hover:bg-dark-600 text-dark-200' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isCreating}
          className="flex-1 px-4 py-3 font-semibold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: '#059669', 
            color: '#ffffff'
          }}
        >
          {isCreating ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" style={{ color: '#ffffff' }}>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span style={{ color: '#ffffff' }}>Creating...</span>
            </>
          ) : (
            <span style={{ color: '#ffffff' }}>Create Course</span>
          )}
        </button>
      </div>
    </form>
  );
}

export default CreateCourseForm;
