'use client'

import React, { useState, FormEvent } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { toast } from 'sonner'

interface FormState {
  fullName: string
  email: string
  phone: string
  message: string
}

interface ApiResponse {
  error?: string
  message?: string
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const resetForm = () => {
    setFormState({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json() as ApiResponse

      if (response.ok) {
        toast.success(data.message || 'Message sent successfully!')
        resetForm()
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[40vh] min-h-[300px] flex items-center justify-center mb-12 md:mb-16 container mx-auto px-4">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="/images/diani.jpg"
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s make your eco-friendly adventure unforgettable
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex-grow container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-start">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Email Us</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">ecotour@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Call Us</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">+2547000000</span>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Visit Us</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Opening Hours</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">Mon - Sat: 9AM - 6PM</span>
                  </div>
                </div>

                <div className="pt-6 sm:pt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-emerald-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    {[Facebook, Instagram, Twitter].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-2 sm:p-3 bg-emerald-200 rounded-full hover:bg-emerald-300 transition-colors"
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg lg:max-w-xl lg:ml-auto p-4 xs:p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-lg">
                <h4 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-6 sm:mb-8">
                  Plan your eco-adventure
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-wrap -mx-2 sm:-mx-4">
                    <div className="w-full sm:w-1/2 px-2 sm:px-4 mb-4 sm:mb-0">
                      <div>
                        <Label htmlFor="fullName" className="block mb-1.5 text-sm font-semibold">
                          Full Name
                          <span className="text-red-600">*</span>
                        </Label>
                        <Input 
                          id="fullName"
                          className="w-full"
                          placeholder="John Doe"
                          value={formState.fullName}
                          onChange={(e) => setFormState({...formState, fullName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-2 sm:px-4">
                      <div>
                        <Label htmlFor="email" className="block mb-1.5 text-sm font-semibold">
                          Email
                          <span className="text-red-600">*</span>
                        </Label>
                        <Input 
                          id="email"
                          type="email"
                          className="w-full"
                          placeholder="johndoe@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block mb-1.5 text-sm font-semibold">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone"
                      type="tel"
                      className="w-full"
                      placeholder="+2547000000"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="block mb-1.5 text-sm font-semibold">
                      Message
                      <span className="text-red-600">*</span>
                    </Label>
                    <Textarea 
                      id="message"
                      className="w-full h-24 sm:h-32"
                      placeholder="Tell us about your dream eco-tour..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Start Your Journey'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-[40vh] right-0 -mt-24">
        <Leaf className="w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 text-green-200" />
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 -mb-24 transform rotate-180">
        <Leaf className="w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 text-green-200" />
      </div>
    </section>
  )
}