'use client'

import * as React from "react"
import Link from "next/link"
import { Leaf, Menu, ChevronRight } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-emerald-950 ">
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="hidden text-xl font-bold text-gray-100 sm:inline-block">
              Forestline Tours 
            </span>
          </Link>
          <div className="hidden sm:block ">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-green-600 transition-colors">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-green-600 transition-colors">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/packages" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-green-600  transition-colors">
                      Tour Packages
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group text-white bg-emerald-950 hover:text-white transition-colors  ">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] grid-cols-3 gap-4 p-4 bg-emerald-950  text-white">
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-2">Africa</h3>
                        <ul className="space-y-2">
                          <li><Link href="/destinations/botswana" className="flex items-center text-sm hover:text-green-600">Botswana <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/kenya" className="flex items-center text-sm hover:text-green-600">Kenya <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/namibia" className="flex items-center text-sm hover:text-green-600">Namibia <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/tanzania" className="flex items-center text-sm hover:text-green-600">Tanzania <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/south-africa" className="flex items-center text-sm hover:text-green-600">South Africa <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-2">Asia</h3>
                        <ul className="space-y-2">
                          <li><Link href="/destinations/indonesia" className="flex items-center text-sm hover:text-green-600">Indonesia <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/sri-lanka" className="flex items-center text-sm hover:text-green-600">Sri Lanka <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/singapore" className="flex items-center text-sm hover:text-green-600">Singapore <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/vietnam" className="flex items-center text-sm hover:text-green-600">Vietnam <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-2">Middle East</h3>
                        <ul className="space-y-2">
                          <li><Link href="/destinations/jordan" className="flex items-center text-sm hover:text-green-600">Jordan <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/united-arab-emirates" className="flex items-center text-sm hover:text-green-600">UAE <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-green-600 transition-colors">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-green-600 transition-colors">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden bg-emerald-950 text-white"
              >
                <Menu className="h-5 w-5 text-white " />
                <span className="sr-only text-white">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 t">
              <MobileNav onClose={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="h-full flex flex-col bg-emerald-950 text-white">
      <div className="p-4 border-b border-green-100 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-md font-bold text-white">
            Forestline Tours
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" className="text-lg font-semibold hover:text-green-600 transition-colors" onClick={onClose}>
            Home
          </Link>
          <Link href="/about" className="text-lg font-semibold hover:text-green-600 transition-colors" onClick={onClose}>
            About
          </Link>
          <Link href="/packages" className="text-lg font-semibold hover:text-green-600 transition-colors" onClick={onClose}>
            Tour Packages
          </Link>
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Destinations</h2>
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="font-medium text-muted-foreground mb-2">Africa</h3>
                <ul className="ml-2 space-y-2">
                  <li><Link href="/destinations/botswana" className="block text-sm hover:text-green-600" onClick={onClose}>Botswana</Link></li>
                  <li><Link href="/destinations/kenya" className="block text-sm hover:text-green-600" onClick={onClose}>Kenya</Link></li>
                  <li><Link href="/destinations/namibia" className="block text-sm hover:text-green-600" onClick={onClose}>Namibia</Link></li>
                  <li><Link href="/destinations/tanzania" className="block text-sm hover:text-green-600" onClick={onClose}>Tanzania</Link></li>
                  <li><Link href="/destinations/south-africa" className="block text-sm hover:text-green-600" onClick={onClose}>South Africa</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground mb-2">Asia</h3>
                <ul className="ml-2 space-y-2">
                  <li><Link href="/destinations/indonesia" className="block text-sm hover:text-green-600" onClick={onClose}>Indonesia</Link></li>
                  <li><Link href="/destinations/sri-lanka" className="block text-sm hover:text-green-600" onClick={onClose}>Sri Lanka</Link></li>
                  <li><Link href="/destinations/singapore" className="block text-sm hover:text-green-600" onClick={onClose}>Singapore</Link></li>
                  <li><Link href="/destinations/vietnam" className="block text-sm hover:text-green-600" onClick={onClose}>Vietnam</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground mb-2">Middle East</h3>
                <ul className="ml-2 space-y-2">
                  <li><Link href="/destinations/jordan" className="block text-sm hover:text-green-600" onClick={onClose}>Jordan</Link></li>
                  <li><Link href="/destinations/united-arab-emirates" className="block text-sm hover:text-green-600" onClick={onClose}>UAE</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Link href="/blogs" className="text-lg font-semibold hover:text-green-600 transition-colors" onClick={onClose}>
            Blog
          </Link>
          <Link href="/contact" className="text-lg font-semibold hover:text-green-600 transition-colors" onClick={onClose}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar