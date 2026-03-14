import React from "react";
import { useTheme } from "../context/ThemeContext";

function TipsCard({ title, children }) {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 mb-6 border transition-colors ${
        isDarkMode
          ? "bg-dark-900 border-dark-700 text-dark-100"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <h2 className="text-xl font-semibold mb-2 text-primary-500 flex items-center gap-2">
        {title}
      </h2>
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  );
}

export default TipsCard;
