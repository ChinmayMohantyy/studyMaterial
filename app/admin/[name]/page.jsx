import AdminSidebar from '@/app/_component/adminSidebar'
import DashboardMain from '@/app/_component/dashboardMain'
import React from 'react'

const Dashboard = () => {
  return (
      <div className="flex flex-col h-screen">
        <div className="flex flex-2">
          <AdminSidebar />
          <DashboardMain />
        </div>
      </div>

  )
}

export default Dashboard