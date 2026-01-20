import { HiOutlineInbox } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

function Empty({ resourceName, extra }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className={`p-4 rounded-2xl mb-4 ${
        isDarkMode ? 'bg-dark-800/50' : 'bg-gray-100'
      }`}>
        <HiOutlineInbox className={`w-12 h-12 ${isDarkMode ? 'text-dark-500' : 'text-gray-400'}`} />
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        No {resourceName} found
      </h3>
      {extra && (
        <p className={`text-center max-w-md ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
          {extra}
        </p>
      )}
    </div>
  );
}

export default Empty;
