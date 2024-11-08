'use client'

import { SignUp } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const { isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/management-portal/dashboard')
    }
  }, [isSignedIn, router])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-green-100 p-4">
      <div className="w-full max-w-md">
        <SignUp 
          fallbackRedirectUrl="/" 
          signInFallbackRedirectUrl="/management-portal/dashboard" 
        />
      </div>
    </div>
  )
}