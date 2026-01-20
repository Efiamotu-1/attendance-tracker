import { HiExclamationTriangle } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className={`flex items-center gap-3 pb-4 border-b ${
        isDarkMode ? 'border-dark-700' : 'border-gray-200'
      }`}>
        <div className="p-2 bg-red-500/20 rounded-xl">
          <HiExclamationTriangle className="w-6 h-6 text-red-500" />
        </div>
        <div>
          <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Delete {resourceName}
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
            This action cannot be undone
          </p>
        </div>
      </div>

      <p className={isDarkMode ? 'text-dark-300' : 'text-gray-600'}>
        Are you sure you want to delete this {resourceName}? All associated data will be permanently removed from our servers forever.
      </p>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          disabled={disabled}
          onClick={onCloseModal}
          className={`flex-1 px-4 py-3 font-medium rounded-xl transition-colors disabled:opacity-50 ${
            isDarkMode 
              ? 'bg-dark-700 hover:bg-dark-600 text-dark-200' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={onConfirm}
          className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {disabled ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Deleting...
            </>
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
