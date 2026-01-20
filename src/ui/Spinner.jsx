import { useTheme } from "../context/ThemeContext";

function Spinner() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className={`w-12 h-12 rounded-full border-4 ${
          isDarkMode ? 'border-dark-700' : 'border-gray-200'
        }`}></div>
        <div className="w-12 h-12 rounded-full border-4 border-primary-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

export default Spinner;
