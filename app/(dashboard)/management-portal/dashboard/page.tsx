import React from 'react'
import DashboardStats from '@/components/eco-tourism/DashboardStats'
import RecentBookings from '@/components/eco-tourism/RecentBookings'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg ml-16 mt-3 md:ml-2 lg:ml-2 2xl:ml-2  font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <DashboardStats />
      
      <div className="mt-2">
        <RecentBookings />
      </div>
    </div>
  )
}