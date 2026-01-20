import { useState } from "react";
import { useAddReport } from "./useAddReport";
import { HiOutlineClipboardDocumentList, HiExclamationTriangle } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";
import Dropdown from "../../ui/Dropdown";
import DatePicker from "../../ui/DatePicker";

function CreateReportForm({ courses, onCloseModal, defaultCourseId }) {
  const [courseId, setCourseId] = useState(defaultCourseId || courses[0]?.id || '');
  const [classDate, setClassDate] = useState('');
  const [held, setHeld] = useState(false);
  const [attended, setAttended] = useState(false);

  const { isAdding, addReport } = useAddReport();
  const { isDarkMode } = useTheme();

  function handleSubmit(e) {
    e.preventDefault();
    if (!courseId || !classDate || !held) return;
    addReport({ courseId, classDate, held, attended }, {
      onSuccess: () => {
        onCloseModal?.();
      }
    });
  }

  // Convert courses to dropdown options format
  const courseOptions = courses.map(course => ({
    value: course.id,
    label: course.course_title
  }));

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Header */}
      <div className={`flex items-center gap-3 pb-4 border-b ${
        isDarkMode ? 'border-dark-700' : 'border-gray-200'
      }`}>
        <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(5, 150, 105, 0.2)' }}>
          <HiOutlineClipboardDocumentList className="w-6 h-6" style={{ color: '#059669' }} />
        </div>
        <div>
          <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>New Report</h2>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Record your class attendance</p>
        </div>
      </div>

      {/* Select Course */}
      <div className="space-y-2">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
          Select Course
        </label>
        <Dropdown
          options={courseOptions}
          value={courseId}
          onChange={setCourseId}
          placeholder="Choose a course"
          disabled={isAdding || !!defaultCourseId}
        />
      </div>

      {/* Class Date */}
      <div className="space-y-2">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
          Class Date
        </label>
        <DatePicker
          value={classDate}
          onChange={setClassDate}
          placeholder="Select class date"
          disabled={isAdding}
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <label
          onClick={() => setHeld(!held)}
          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
            held 
              ? 'border-emerald-500/50' 
              : isDarkMode 
                ? 'bg-dark-900 border-dark-600 hover:border-dark-500' 
                : 'bg-gray-50 border-gray-300 hover:border-gray-400'
          }`}
          style={held ? { backgroundColor: 'rgba(5, 150, 105, 0.1)' } : {}}
        >
          <div>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Class Held</p>
            <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Was the class conducted?</p>
          </div>
          <div 
            className="w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all"
            style={held 
              ? { backgroundColor: '#059669', borderColor: '#059669' } 
              : { borderColor: isDarkMode ? '#64748b' : '#9ca3af' }
            }
          >
            {held && (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </label>

        <label
          onClick={() => setAttended(!attended)}
          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
            attended 
              ? 'border-emerald-500/50' 
              : isDarkMode 
                ? 'bg-dark-900 border-dark-600 hover:border-dark-500' 
                : 'bg-gray-50 border-gray-300 hover:border-gray-400'
          }`}
          style={attended ? { backgroundColor: 'rgba(5, 150, 105, 0.1)' } : {}}
        >
          <div>
            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Attended Class</p>
            <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>Did you attend this class?</p>
          </div>
          <div 
            className="w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all"
            style={attended 
              ? { backgroundColor: '#059669', borderColor: '#059669' } 
              : { borderColor: isDarkMode ? '#64748b' : '#9ca3af' }
            }
          >
            {attended && (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </label>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
        <HiExclamationTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className={`text-sm ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          Reports cannot be edited once submitted. Please verify all information before submitting.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
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
          disabled={isAdding || !held}
          className="flex-1 px-4 py-3 font-semibold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: '#059669', 
            color: '#ffffff'
          }}
        >
          {isAdding ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" style={{ color: '#ffffff' }}>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span style={{ color: '#ffffff' }}>Saving...</span>
            </>
          ) : (
            <span style={{ color: '#ffffff' }}>Add Report</span>
          )}
        </button>
      </div>
    </form>
  );
}

export default CreateReportForm;
