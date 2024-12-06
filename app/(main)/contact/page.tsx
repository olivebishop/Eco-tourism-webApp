'use client'

import React, { useState, FormEvent } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
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

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/ecotourcompany",
      label: "Facebook" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/ecotourcompany",
      label: "Instagram" 
    },
    { 
      icon: Twitter, 
      href: "https://www.twitter.com/ecotourcompany",
      label: "Twitter" 
    }
  ]

  return (
    <section className="bg-white">
      {/* Banner Section */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[50vh] min-h-[400px] flex items-center justify-center mb-16 md:mb-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/diani.jpg"
              alt="Contact us beach sunset"
              layout="fill"
              objectFit="cover"
              priority
              className="transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-900/70 backdrop-brightness-75" />
          </div>
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Connect with our eco-friendly travel experts and start your sustainable adventure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-emerald-50 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 lg:p-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-emerald-700 mb-8 text-base md:text-lg">
                We&apos;re passionate about sustainable travel. Whether you have a question, want to plan a trip, or simply want to learn more about eco-tourism, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  title: 'Email', 
                  content: 'ecotour@gmail.com',
                  color: 'emerald'
                },
                { 
                  icon: Phone, 
                  title: 'Phone', 
                  content: '+2547000000',
                  color: 'emerald'
                },
                { 
                  icon: MapPin, 
                  title: 'Location', 
                  content: 'Nairobi, Kenya',
                  color: 'emerald'
                },
                { 
                  icon: Clock, 
                  title: 'Hours', 
                  content: 'Mon - Sat: 9AM - 6PM',
                  color: 'emerald'
                }
              ].map(({ icon: Icon, title, content, color }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 bg-${color}-200 rounded-full`}>
                    <Icon className={`w-6 h-6 text-${color}-700`} />
                  </div>
                  <div>
                    <p className={`text-sm text-${color}-600`}>{title}</p>
                    <p className={`text-lg font-semibold text-${color}-900`}>{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-emerald-200">
              <h4 className="text-base font-semibold text-emerald-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-200 rounded-full hover:bg-emerald-300 transition-colors group"
                    aria-label={`${label} link`}
                  >
                    <Icon className="w-6 h-6 text-emerald-700 group-hover:text-emerald-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
            <h4 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
              Plan Your Eco-Adventure
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="block mb-2 text-sm font-semibold">
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
                <div>
                  <Label htmlFor="email" className="block mb-2 text-sm font-semibold">
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

              <div>
                <Label htmlFor="phone" className="block mb-2 text-sm font-semibold">
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
                <Label htmlFor="message" className="block mb-2 text-sm font-semibold">
                  Message
                  <span className="text-red-600">*</span>
                </Label>
                <Textarea 
                  id="message"
                  className="w-full h-32"
                  placeholder="Tell us about your dream eco-tour..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-base transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Start Your Journey'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}