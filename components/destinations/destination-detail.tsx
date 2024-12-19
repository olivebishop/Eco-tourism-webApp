'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Calendar, Clock, Users, DollarSign } from 'lucide-react'
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "sonner"
import Link from 'next/link'
import Image from 'next/image'
import { Destination } from '@/types/destinations'

interface DestinationDetailProps {
  destination: Destination
}

interface BookingFormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  numberOfGuests: string
  bookingDate?: string | Date
  specialRequests?: string
}

// Email validation regex
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
// Phone validation regex (allows +, spaces, and numbers)
const PHONE_REGEX = /^[+\d][\d\s-]{7,}$/

export default function DestinationDetail({ destination }: DestinationDetailProps) {
  const [bookingDate, setBookingDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<BookingFormData>>({})

  // Form validation function
  const validateForm = (formData: FormData): Partial<BookingFormData> => {
    const errors: Partial<BookingFormData> = {}
    
    // First name validation
    const firstname = formData.get('firstname') as string
    if (!firstname) {
      errors.firstname = 'First name is required'
    } else if (firstname.length < 2) {
      errors.firstname = 'First name must be at least 2 characters'
    }
    
    // Last name validation
    const lastname = formData.get('lastname') as string
    if (!lastname) {
      errors.lastname = 'Last name is required'
    } else if (lastname.length < 2) {
      errors.lastname = 'Last name must be at least 2 characters'
    }
    
    // Email validation
    const email = formData.get('email') as string
    if (!email) {
      errors.email = 'Email is required'
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    // Phone validation
    const phone = formData.get('phone') as string
    if (!phone) {
      errors.phone = 'Phone number is required'
    } else if (!PHONE_REGEX.test(phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    // Number of guests validation
    const guests = parseInt(formData.get('guests') as string, 10)
    if (isNaN(guests) || guests < 1) {
      errors.numberOfGuests = 'Number of guests must be at least 1'
    } else if (guests > 50) {
      errors.numberOfGuests = 'For groups larger than 50, please contact us directly'
    }
    
    // Booking date validation
    if (!bookingDate) {
      errors.bookingDate = 'Please select a booking date'
    } else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (bookingDate < today) {
        errors.bookingDate = 'Booking date cannot be in the past'
      }
    }
    
    return errors
  }

  // Reset form function
  const resetForm = (form: HTMLFormElement) => {
    form.reset()
    setBookingDate(undefined)
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Validate form
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsLoading(false)
      toast.error('Please correct the errors in the form')
      return
    }

    const bookingData = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      numberOfGuests: parseInt(formData.get('guests') as string, 10),
      bookingDate: bookingDate?.toISOString(),
      specialRequests: formData.get('special-requests') as string,
      destinationName: destination.name,
      price: destination.amount
    }

    try {
      const response = await fetch('/api/destinations/bookings', {
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
        description: 'Your destination booking has been sent!',
        duration: 5000,
      })
      
      // Reset form after successful submission
      resetForm(form)
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
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/destinations" passHref>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
          </Button>
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 sm:h-96">
            <Image 
              src={destination.imageData || "/placeholder.svg?height=300&width=400"} 
              alt={destination.name} 
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-2">{destination.name}</h1>
              <p className="text-lg sm:text-xl text-white flex items-center">
                <MapPin className="mr-2 h-5 w-5" /> {destination.country}, {destination.city}
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{destination.daysNights} {destination.tourType}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Group Size</p>
                  <p className="font-semibold">Varies</p>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold">KES {destination.amount.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-red-500" />
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-semibold">Check below</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this Destination</h2>
                <p className="text-gray-700 mb-8">{destination.description}</p>
                
                <h3 className="text-xl font-bold mb-4">What&apos;s Included:</h3>
                <ul className="list-disc pl-5 mb-8">
                  {destination.tags.map((tag, index) => (
                    <li key={index} className="text-gray-700 mb-2">{tag}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Book Your Trip</h3>
                  
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input 
                      id="firstname" 
                      name="firstname" 
                      placeholder="Enter your first name" 
                      className={errors.firstname ? 'border-red-500' : ''}
                      required 
                    />
                    {errors.firstname && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input 
                      id="lastname" 
                      name="lastname" 
                      placeholder="Enter your last name" 
                      className={errors.lastname ? 'border-red-500' : ''}
                      required 
                    />
                    {errors.lastname && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className={errors.email ? 'border-red-500' : ''}
                      required 
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="Enter your phone number (e.g., +254 712345678)" 
                      className={errors.phone ? 'border-red-500' : ''}
                      required 
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className={`w-full justify-start text-left font-normal ${
                            errors.bookingDate ? 'border-red-500' : ''
                          }`}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {bookingDate ? format(bookingDate, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={bookingDate}
                          onSelect={setBookingDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.bookingDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.bookingDate?.toString()}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input 
                      id="guests" 
                      name="guests" 
                      type="number" 
                      min="1" 
                      max="50"
                      placeholder="Enter number of guests" 
                      className={errors.numberOfGuests ? 'border-red-500' : ''}
                      required 
                    />
                    {errors.numberOfGuests && (
                      <p className="text-red-500 text-sm mt-1">{errors.numberOfGuests}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea 
                      id="special-requests" 
                      name="special-requests" 
                      placeholder="Any special requests or requirements?" 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
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