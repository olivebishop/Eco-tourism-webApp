"use client"

import React from 'react'
import ToursHeroCarousel from '../../components/hero-section'
import EcoTourismFeatures from '../../components/eco-tourism-features'
import DestinationGrid from '../../components/destinations/destination-grid'
import TravelCTASection from '../../components/Travel-cta-section'
import { PromoModal } from '@/components/ui/promoModal'

function HomePage() {
  return (
    <div className='bg-green-50'>
      <ToursHeroCarousel/>
      <EcoTourismFeatures/>
      <DestinationGrid/>
      <TravelCTASection/>
      <PromoModal />
    </div>
  )
}

export default HomePage