'use client'

import React, { useState } from 'react'
import { Button } from '@/components/bookingBtn'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Destination } from '@/utils/destinationData'
import { ArrowLeft, MapPin, Calendar, Clock, BarChart2 } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface DestinationDetailProps {
  destination: Destination
  onClose: () => void
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, onClose }) => {
  const [bookingDate, setBookingDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button onClick={onClose} variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
        </Button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 sm:h-96">
            <img 
              src={destination.imageUrl} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{destination.name}</h1>
              <p className="text-lg sm:text-xl text-white flex items-center">
                <MapPin className="mr-2 h-5 w-5" /> {destination.location}
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{destination.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Best Time</p>
                  <p className="font-semibold">{destination.bestTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <BarChart2 className="h-6 w-6 mr-2 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-semibold">{destination.difficulty}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this Adventure</h2>
                <p className="text-gray-700 mb-8">{destination.description}</p>
                
                <h3 className="text-xl font-bold mb-4">What&apos;s Included:</h3>
                <ul className="list-disc pl-5 mb-8">
                  {destination.included.map((item) => (
                    <li key={item.id} className="text-gray-700 mb-2">{item.item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Price</h3>
                    <p className="text-3xl font-bold text-green-600">KES {destination.price}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Book Your Adventure</h3>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" required />
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
                    <Input id="guests" type="number" min="1" placeholder="Enter number of guests" required />
                  </div>
                  <div>
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea id="special-requests" placeholder="Any special requests or requirements?" />
                  </div>
                  <Button variant="gooeyLeft"
                  type="submit" className="w-full bg-green-600 hover:bg-green-800 hover:text-white">Book Now</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}