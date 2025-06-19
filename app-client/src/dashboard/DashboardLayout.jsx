import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const DashboardLayout = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <main className='flex-1 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout