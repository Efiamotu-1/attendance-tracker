import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Main() {
  const { isDarkMode } = useTheme()
  
  return (
    <main className='flex-1 flex flex-col overflow-y-auto'>
      <div className={`flex-1 transition-colors ${
        isDarkMode ? 'bg-dark-950' : 'bg-gray-50'
      }`}>
        {/* Background Pattern */}
        <div className='fixed inset-0 pointer-events-none overflow-hidden'>
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? 'bg-primary-500/5' : 'bg-primary-500/10'
          }`} />
          <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? 'bg-violet-500/5' : 'bg-violet-500/10'
          }`} />
        </div>
        
        {/* Content */}
        <div className='relative z-10 max-w-6xl mx-auto px-4 py-8 md:px-6 lg:px-8'>
          <Outlet />
        </div>
      </div>
      
      {/* Sticky Footer */}
      <footer className={`relative z-10 py-4 text-center border-t transition-colors ${
        isDarkMode 
          ? 'bg-dark-900 border-dark-800' 
          : 'bg-white border-gray-200'
      }`}>
        <p className={`text-sm ${isDarkMode ? 'text-dark-500' : 'text-gray-500'}`}>
          © {new Date().getFullYear()} AttendanceTracker. Built with ❤️ by Habeeb Efiamotu Musa 
        </p>
      </footer>
    </main>
  )
}

export default Main
