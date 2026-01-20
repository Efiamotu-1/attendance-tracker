import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { useTheme } from '../context/ThemeContext'
import { useRealtimeSubscription } from '../hooks/useRealtimeSubscription'

function AppLayout() {
  const [showSideBar, setShowSideBar] = useState(false)
  const { isDarkMode } = useTheme()
  
  // Enable real-time updates from Supabase
  useRealtimeSubscription()
  
  return (
    <div className={`h-screen flex flex-col overflow-hidden transition-colors ${
      isDarkMode ? 'bg-dark-950 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header setShowSideBar={setShowSideBar} />
      
      <div className='flex-1 flex overflow-hidden'>
        {showSideBar && <Sidebar setShowSideBar={setShowSideBar} />}
        <Main />
      </div>
    </div>
  )
}

export default AppLayout
