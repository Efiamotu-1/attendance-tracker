import React from 'react'
import MainNav from './MainNav'
import { HiXMark, HiAcademicCap, HiUsers } from 'react-icons/hi2'
import { useUsersCount } from '../features/authentication/useUsersCount'
import { useTheme } from '../context/ThemeContext'

function Sidebar({ setShowSideBar }) {
  const { usersCount, isLoading } = useUsersCount()
  const { isDarkMode } = useTheme()
  
  return (
    <>
      {/* Overlay */}
      <div 
        className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in'
        onClick={() => setShowSideBar(false)}
      />
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 bottom-0 w-72 border-r z-50 flex flex-col animate-slide-in-left transition-colors ${
        isDarkMode 
          ? 'bg-dark-900 border-dark-800' 
          : 'bg-white border-gray-200'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          isDarkMode ? 'border-dark-800' : 'border-gray-200'
        }`}>
          <div className='flex items-center gap-2'>
            <div className='p-1.5 bg-primary-500/20 rounded-lg'>
              <HiAcademicCap className='w-6 h-6 text-primary-500' />
            </div>
            <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AttendanceTracker
            </span>
          </div>
          
          <button 
            onClick={() => setShowSideBar(false)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-dark-800' : 'hover:bg-gray-100'
            }`}
          >
            <HiXMark className={`w-5 h-5 ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`} />
          </button>
        </div>
        
        {/* Navigation */}
        <div className='flex-1 py-6 px-3 overflow-y-auto'>
          <MainNav setShowSideBar={setShowSideBar} />
        </div>
        
        {/* Footer - Users Count */}
        <div className={`p-4 border-t ${isDarkMode ? 'border-dark-800' : 'border-gray-200'}`}>
          <div className={`flex items-center gap-3 px-3 py-2 rounded-xl ${
            isDarkMode ? 'bg-dark-800/50' : 'bg-gray-100'
          }`}>
            <div className='p-2 bg-primary-500/20 rounded-lg'>
              <HiUsers className='w-4 h-4 text-primary-500' />
            </div>
            <div>
              <p className={`text-xs uppercase tracking-wide ${
                isDarkMode ? 'text-dark-500' : 'text-gray-500'
              }`}>Platform Users</p>
              <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {isLoading ? '...' : (usersCount?.count ?? 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
