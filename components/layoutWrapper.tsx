'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

function CleanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

function use404Detection() {
  const [is404, setIs404] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkFor404 = () => {
      setIs404(document.title.includes('404'))
    }

    // Check immediately
    checkFor404()

    // Set up a MutationObserver to watch for title changes
    const observer = new MutationObserver(checkFor404)
    observer.observe(document.querySelector('title')!, { childList: true })

    return () => observer.disconnect()
  }, [pathname])

  return is404 || pathname === '/404'
}

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const is404 = use404Detection()
  const pathname = usePathname()

  const shouldHideNavFooter = is404 || pathname?.startsWith('/dashboard')

  return shouldHideNavFooter ? (
    <CleanLayout>{children}</CleanLayout>
  ) : (
    <MainLayout>{children}</MainLayout>
  );
}