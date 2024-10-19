import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Leaf, Phone, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-green-50">
      <div className="absolute top-0 right-0 -mt-24">
        <Leaf className="w-64 h-64 text-green-200" />
      </div>
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-24">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-green-500 bg-emerald-100 rounded-full">CONTACT US</span>
            <h1 className="max-w-md font-heading text-5xl xs:text-6xl font-bold text-emerald-900 mb-4">
              <span>Explore nature</span>
              <span className="font-serif italic"> with us</span>
            </h1>
            <p className="text-xl text-emerald-700 font-semibold">We&apos;re here to help you plan your eco-friendly adventure</p>
          </div>
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
              <div className="flex mb-16 items-center">
                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-200">
                  <Mail className="w-8 h-8 text-emerald-700" />
                </div>
                <div>
                  <span className="sm:text-lg text-emerald-600">Email</span>
                  <span className="block text-lg sm:text-2xl font-semibold text-emerald-900">ecotour@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-200">
                  <Phone className="w-8 h-8 text-emerald-700" />
                </div>
                <div>
                  <span className="sm:text-lg text-emerald-600">Phone</span>
                  <span className="block text-lg sm:text-2xl font-semibold text-emerald-900">+254791482626</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg lg:max-w-xl lg:ml-auto">
                <h4 className="text-2xl font-bold text-emerald-900 mb-8">Plan your eco-adventure</h4>
                <form action="">
                  <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                      <div>
                        <Label htmlFor="fullName" className="block mb-1.5 text-sm font-semibold">
                          Full Name
                          <span className="text-red-600">*</span>
                        </Label>
                        <Input id="fullName" className="w-full" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div>
                        <Label htmlFor="email" className="block mb-1.5 text-sm font-semibold">
                          Email
                          <span className="text-red-600">*</span>
                        </Label>
                        <Input id="email" type="email" className="w-full" placeholder="you@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-9">
                    <Label htmlFor="message" className="block mb-1.5 text-sm font-semibold">
                      Message
                      <span className="text-red-600">*</span>
                    </Label>
                    <Textarea id="message" className="w-full h-32" placeholder="Tell us about your dream eco-tour..." />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white">
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