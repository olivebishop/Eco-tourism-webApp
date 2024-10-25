'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Check 
} from 'lucide-react'

export default function ContactSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="relative py-12 xs:py-16 sm:py-20 lg:py-32 overflow-hidden bg-green-50">
      {/* Decorative elements - Hidden on smaller screens */}
      <div className="hidden md:block absolute top-0 right-0 -mt-24">
        <Leaf className="w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 text-green-200" />
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 -mb-24 transform rotate-180">
        <Leaf className="w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 text-green-200" />
      </div>

      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-24">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-green-500 bg-emerald-100 rounded-full">
              GET IN TOUCH
            </span>
            <h1 className="max-w-md font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-4">
              <span>Explore nature</span>
              <span className="font-serif italic"> with us</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-700 font-semibold">
              Let&apos;s make your eco-friendly adventure unforgettable
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 items-start">
            {/* Contact Information Section */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Contact Card - Email */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Email Us</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">ecotour@gmail.com</span>
                  </div>
                </div>

                {/* Contact Card - Phone */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Call Us</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">+254791482626</span>
                  </div>
                </div>

                {/* Contact Card - Address */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Visit Us</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">123 Nature Street, Eco City</span>
                  </div>
                </div>

                {/* Contact Card - Hours */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mb-4 xs:mb-0 xs:mr-6 p-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-200">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 m-auto mt-2 sm:mt-3 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg text-emerald-600">Opening Hours</span>
                    <span className="block text-lg sm:text-xl font-semibold text-emerald-900">Mon - Sat: 9AM - 6PM</span>
                  </div>
                </div>

                {/* Social Media Links */}
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

            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg lg:max-w-xl lg:ml-auto p-4 xs:p-6 sm:p-8 bg-white rounded-2xl shadow-lg">
                <h4 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-6 sm:mb-8">Plan your eco-adventure</h4>
                
                {submitted && (
                  <Alert className="mb-6 bg-emerald-50 border-emerald-200">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <AlertDescription className="text-emerald-700">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-2 sm:-mx-4 mb-4 sm:mb-6">
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
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <Label htmlFor="phone" className="block mb-1.5 text-sm font-semibold">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone"
                      type="tel"
                      className="w-full"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>

                  <div className="mb-6 sm:mb-9">
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
                  >
                    Start Your Journey
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}