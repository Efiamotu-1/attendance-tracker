import React, { useEffect, useState } from 'react'
import { HiArrowRightOnRectangle, HiBars3, HiOutlineUser, HiAcademicCap, HiSun, HiMoon } from 'react-icons/hi2'
import { useNavigate, NavLink } from 'react-router-dom'
import { supabase } from '../services/supabase'
import { useTheme } from '../context/ThemeContext'

function Header({ setShowSideBar }) {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUserName(user.user_metadata?.name || user.email?.split('@')[0] || 'User')
      }
    }
    getUser()
  }, [])

  async function logOut() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <header className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-colors ${
      isDarkMode 
        ? 'bg-dark-900/80 border-dark-800' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className='flex items-center justify-between px-4 py-3 md:px-6'>
        {/* Left - Menu & Logo */}
        <div className='flex items-center gap-4'>
          <button 
            onClick={() => setShowSideBar(true)}
            className={`p-2 rounded-lg transition-colors lg:hidden ${
              isDarkMode ? 'hover:bg-dark-800' : 'hover:bg-gray-100'
            }`}
          >
            <HiBars3 className={`w-6 h-6 ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`} />
          </button>
          
          {/* Clickable Logo - Navigate to Dashboard */}
          <NavLink to="/dashboard" className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
            <div className='p-1.5 bg-primary-500/20 rounded-lg'>
              <HiAcademicCap className='w-6 h-6 text-primary-500' />
            </div>
            <span className={`text-lg font-bold hidden sm:block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AttendanceTracker
            </span>
          </NavLink>
        </div>

        {/* Center - Navigation Links (Desktop) */}
        <nav className='hidden md:flex items-center gap-1'>
          <NavLink 
            to="/dashboard"
            className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive 
                ? 'bg-primary-500/20 text-primary-500' 
                : isDarkMode 
                  ? 'text-dark-400 hover:text-white hover:bg-dark-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/courses"
            className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive 
                ? 'bg-primary-500/20 text-primary-500' 
                : isDarkMode 
                  ? 'text-dark-400 hover:text-white hover:bg-dark-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/reports"
            className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-colors ${
              isActive 
                ? 'bg-primary-500/20 text-primary-500' 
                : isDarkMode 
                  ? 'text-dark-400 hover:text-white hover:bg-dark-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Reports
          </NavLink>
        </nav>

        {/* Right - Theme Toggle & User Info */}
        <div className='flex items-center gap-3'>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-dark-800 text-dark-400 hover:text-yellow-400' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-primary-500'
            }`}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <HiSun className='w-5 h-5' />
            ) : (
              <HiMoon className='w-5 h-5' />
            )}
          </button>

          {/* User Info */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
            isDarkMode ? 'bg-dark-800/50' : 'bg-gray-100'
          }`}>
            <div 
              className='w-8 h-8 rounded-full flex items-center justify-center shadow-md'
              style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
            >
              <span 
                className='text-sm font-bold'
                style={{ color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              >
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className={`text-sm font-medium hidden sm:block ${
              isDarkMode ? 'text-dark-200' : 'text-gray-700'
            }`}>
              {userName}
            </span>
          </div>
          
          <button 
            onClick={logOut}
            className={`p-2 rounded-lg transition-all group ${
              isDarkMode 
                ? 'hover:bg-dark-800 text-dark-400 hover:text-red-400' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-red-500'
            }`}
            title='Sign out'
          >
            <HiArrowRightOnRectangle className='w-5 h-5 group-hover:scale-110 transition-transform' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
