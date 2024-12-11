"use client"

import React, { useState, useEffect } from 'react'
import ToursHeroCarousel from '../../components/hero-section'
import EcoTourismFeatures from '../../components/eco-tourism-features'
import DestinationGrid from '../../components/destinations/destination-grid'
import TravelCTASection from '../../components/Travel-cta-section'
import { PromoModal } from '@/components/ui/promoModal'

function HomePage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const hasShownModal = localStorage.getItem('hasShownPromoModal')
    if (!hasShownModal) {
      setShowModal(true)
      localStorage.setItem('hasShownPromoModal', 'true')
    }
  }, [])

  return (
    <div className='bg-green-50'>
      <ToursHeroCarousel/>
      <EcoTourismFeatures/>
      <DestinationGrid/>
      <TravelCTASection/>
      {showModal && <PromoModal />}
    </div>
  )
}

export default HomePage

