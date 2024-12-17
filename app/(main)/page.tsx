"use client"

import React from 'react'
import ToursHeroCarousel from '../../components/hero-section'
import EcoTourismFeatures from '../../components/eco-tourism-features'
import { PromoModal } from '@/components/ui/promoModal'
import HomeSection from '@/components/home/homepage'      

function HomePage() {
  return (
    <div className='bg-green-50'>
      <ToursHeroCarousel/>
      <EcoTourismFeatures/>
      <HomeSection/>
      <PromoModal />
    </div>
  )
}

export default HomePage