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
    <header className="sticky top-0 z-50 w-full bg-green-50">
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="hidden text-xl font-bold text-green-800 sm:inline-block">
              Forestline Tours 
            </span>
          </Link>
          <div className="hidden sm:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-green-800 hover:text-green-600 transition-colors">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="text-green-800 hover:text-green-600 transition-colors">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/packages" legacyBehavior passHref>
                    <NavigationMenuLink className="text-green-800 hover:text-green-600 transition-colors">
                      Tour Packages
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group text-green-800 hover:text-green-600 transition-colors bg-transparent">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] grid-cols-3 gap-4 p-4 bg-green-50">
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
                          <li><Link href="/destinations/bali" className="flex items-center text-sm hover:text-green-600">Bali <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/sri-lanka" className="flex items-center text-sm hover:text-green-600">Sri Lanka <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/singapore" className="flex items-center text-sm hover:text-green-600">Singapore <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/vietnam" className="flex items-center text-sm hover:text-green-600">Vietnam <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-2">Middle East</h3>
                        <ul className="space-y-2">
                          <li><Link href="/destinations/jordan" className="flex items-center text-sm hover:text-green-600">Jordan <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                          <li><Link href="/destinations/uae" className="flex items-center text-sm hover:text-green-600">UAE <ChevronRight className="h-4 w-4 ml-auto" /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink className="text-green-800 hover:text-green-600 transition-colors">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-green-800 hover:text-green-600 transition-colors">
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
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

const MobileNav = () => {
  return (
    <div className="flex flex-col space-y-6 p-4">
      <Link href="/" className="text-lg font-semibold">
        Home
      </Link>
      <Link href="/about" className="text-lg font-semibold">
        About
      </Link>
      <Link href="/packages" className="text-lg font-semibold">
        Tour Packages
      </Link>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Destinations</h2>
        <div className="ml-4 space-y-4">
          <div>
            <h3 className="font-medium text-muted-foreground mb-2">Africa</h3>
            <ul className="ml-2 space-y-2">
              <li><Link href="/destinations/botswana" className="block text-sm hover:text-green-600">Botswana</Link></li>
              <li><Link href="/destinations/kenya" className="block text-sm hover:text-green-600">Kenya</Link></li>
              <li><Link href="/destinations/namibia" className="block text-sm hover:text-green-600">Namibia</Link></li>
              <li><Link href="/destinations/tanzania" className="block text-sm hover:text-green-600">Tanzania</Link></li>
              <li><Link href="/destinations/south-africa" className="block text-sm hover:text-green-600">South Africa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-muted-foreground mb-2">Asia</h3>
            <ul className="ml-2 space-y-2">
              <li><Link href="/destinations/bali" className="block text-sm hover:text-green-600">Bali</Link></li>
              <li><Link href="/destinations/sri-lanka" className="block text-sm hover:text-green-600">Sri Lanka</Link></li>
              <li><Link href="/destinations/singapore" className="block text-sm hover:text-green-600">Singapore</Link></li>
              <li><Link href="/destinations/vietnam" className="block text-sm hover:text-green-600">Vietnam</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-muted-foreground mb-2">Middle East</h3>
            <ul className="ml-2 space-y-2">
              <li><Link href="/destinations/jordan" className="block text-sm hover:text-green-600">Jordan</Link></li>
              <li><Link href="/destinations/uae" className="block text-sm hover:text-green-600">UAE</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Link href="/blogs" className="text-lg font-semibold">
        Blog
      </Link>
      <Link href="/contact" className="text-lg font-semibold">
        Contact
      </Link>
    </div>
  )
}

export default Navbar

