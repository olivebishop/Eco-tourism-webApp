'use client'

import { useEffect, useState } from "react"
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Check initial state
    setIsOffline(!navigator.onLine)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const handleRetry = () => {
    window.location.reload()
  }

  if (!isOffline) return null

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center p-6 max-w-sm mx-auto">
        <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold mb-2">You&apos;re offline</h2>
        <p className="text-muted-foreground mb-4">
          Please check your internet connection to continue using all features.
        </p>
        <Button onClick={handleRetry} className="inline-flex items-center">
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry Connection
        </Button>
      </div>
    </div>
  )
}

