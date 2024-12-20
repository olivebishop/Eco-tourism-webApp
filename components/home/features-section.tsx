import { Button } from "@/components/ui/button"
import { Clock, Building2, FileText, Search } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import UserAvatars from '@/components/home/user-avartar'

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm text-green-600">
             Travel Service
            </div>
            <h2 className="text-2xl font-bold leading-tight sm:text-4xl">Choose the best holiday package for you</h2>
            <p className="text-gray-600">
              Our service always provide the best service for our customer happiness and comfort. As many choice to enjoy our
              customer holiday
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100/50 p-2">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <span>24/7 Service admin</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100/50 p-2">
                  <Building2 className="h-5 w-5 text-green-600" />
                </div>
                <span>Best Travel Accomodation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100/50 p-2">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <span>Free to manage item</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100/50 p-2">
                  <Search className="h-5 w-5 text-green-600" />
                </div>
                <span>Easy Find Easy Use</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/blogs">
                <Button 
                  variant="outline" 
                  className="rounded-md border-green-600 text-black bg-gray-100 hover:bg-gray-200"
                >
                  Read More
                </Button>
              </Link>
              <Link href="/destinations">
                <Button 
                  className="rounded-md bg-green-600 hover:bg-green-700"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/travel_detsinations.jpg"
              alt="Venice"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-[400px]"
            />
            <div className="absolute top-4 right-4">
              <UserAvatars />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

