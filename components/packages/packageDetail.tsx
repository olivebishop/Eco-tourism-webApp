'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Calendar, Clock, Users } from 'lucide-react'
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "sonner"
import Link from 'next/link'

interface PackageDetailProps {
  package: {
    id: string
    name: string
    location: string
    imageData: string
    duration: string
    groupSize: string
    price: number
    description: string
    included: string[]
  }
}

export default function PackageDetail({ package: travelPackage }: PackageDetailProps) {
  const [bookingDate, setBookingDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const bookingData = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      numberOfGuests: parseInt(formData.get('guests') as string, 10),
      bookingDate: bookingDate?.toISOString(),
      specialRequests: formData.get('special-requests') as string,
      destinationName: travelPackage.name,
      price: travelPackage.price,
      country: formData.get('country') as string,
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        throw new Error('Failed to create booking')
      }

      toast.success('Booking Successful', {
        description: 'Your package booking has been sent!',
        duration: 5000,
      })
    } catch (error) {
      console.error('Error submitting booking:', error)
      toast.error('Booking Failed', {
        description: 'Unable to process your booking. Please try again.',
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/packages" passHref>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Packages
          </Button>
        </Link>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 sm:h-96">
            <img 
              src={travelPackage.imageData} 
              alt={travelPackage.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{travelPackage.name}</h1>
              <p className="text-lg sm:text-xl text-white flex items-center">
                <MapPin className="mr-2 h-5 w-5" /> {travelPackage.location}
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{travelPackage.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">{travelPackage.groupSize}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold">KES {travelPackage.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this Package</h2>
                <p className="text-muted-foreground mb-8">{travelPackage.description}</p>
                
                <h3 className="text-xl font-bold mb-4">What&apos;s Included:</h3>
                <ul className="list-disc pl-5 mb-8">
                  {travelPackage.included.map((item, index) => (
                    <li key={index} className="text-muted-foreground mb-2">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Book Your Package</h3>
                  
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" name="firstname" placeholder="Enter your first name" required />
                  </div>

                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input id="lastname" name="lastname" placeholder="Enter your last name" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" name="country" placeholder="Enter your country" />
                  </div>

                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Calendar className="mr-2 h-4 w-4" />
                          {bookingDate ? format(bookingDate, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={bookingDate}
                          onSelect={setBookingDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input id="guests" name="guests" type="number" min="1" placeholder="Enter number of guests" required />
                  </div>

                  <div>
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea id="special-requests" name="special-requests" placeholder="Any special requests or requirements?" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Book Now'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}