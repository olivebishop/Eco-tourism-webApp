'use client'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-green-100 p-4">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  )
}