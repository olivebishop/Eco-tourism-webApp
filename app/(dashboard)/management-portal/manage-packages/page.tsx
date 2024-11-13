import React from 'react'
import PackageManagement from '@/components/packages/packageManagement'

export default function ManagePackagesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-xl font-bold mb-6">Package Management</h1>
      <PackageManagement />
    </div>
  )
}