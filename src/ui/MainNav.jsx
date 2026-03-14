import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/dashboard", icon: HiOutlineHome, label: "Dashboard" },
  { to: "/courses", icon: HiOutlineBookOpen, label: "Courses" },
  { to: "/reports", icon: HiOutlineClipboardDocumentList, label: "Reports" },
  { to: "/tips", icon: HiOutlineLightBulb, label: "Tips" },
  { to: "/mcq-past-questions", icon: HiOutlineDocumentText, label: "MCQ Past Questions", shortLabel: "MCQ" },
  { to: "/feedback", icon: HiOutlineChatBubbleLeftRight, label: "Feedback & Issues", shortLabel: "Feedback" },
];

function MainNav({ setShowSideBar }) {
  const { isDarkMode } = useTheme();
  
  return (
    <nav>
      <ul className="space-y-1">
        {navItems.map(({ to, icon: Icon, label, shortLabel }) => (
          <li key={to}>
            <NavLink
              to={to}
              onClick={() => setShowSideBar(false)}
              title={label}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-primary-500/20 text-primary-500"
                    : isDarkMode 
                      ? "text-dark-400 hover:bg-dark-800 hover:text-dark-200"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    isActive ? "text-primary-500" : ""
                  }`} />
                  <span className="truncate">{shortLabel || label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
