'use client'
import * as React from "react"
import Link from "next/link"
import { Leaf, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    <header className="sticky top-0 z-50 w-full  bg-green-50">
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="hidden text-2xl font-bold text-green-800 sm:inline-block">
              Eco Tours
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
                  <NavigationMenuTrigger className="group text-green-800 hover:text-green-600 transition-colors bg-transparent">
                    Packages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/packages/safari"
                          >
                            <div className="mt-4 text-lg font-medium text-white">Safari Packages</div>
                            <p className="text-sm leading-tight text-white/90">
                              Budget, Mid-range, Luxury safari options
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/packages/local/beach" title="Beach">
                        Diani, Mombasa, Malindi, Watamu
                      </ListItem>
                      <ListItem href="/packages/local/bush" title="Bush">
                        Tsavo, Samburu, Amboseli, Maasai Mara
                      </ListItem>
                      <ListItem href="/packages/local/weekend-getaways" title="Weekend Getaways">
                        Nakuru, Naivasha, Mt. Kenya
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group text-green-800 hover:text-green-600 transition-colors bg-transparent">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-400 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/destinations/africa"
                          >
                            <p className="text-sm leading-tight text-white/90">
                            Destinations
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/destinations/africa" title="Africa">
                      Kenya, Tanzania, Mauritius, South Africa
                      </ListItem>
                      <ListItem href="/destinations/middle-east" title="Middle East">
                        China, Dubai, Pakistan, Singapore
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-green-600 focus:bg-green-100 focus:text-green-600",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const MobileNav = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="text-lg font-semibold">
        Home
      </Link>
      <Link href="/about" className="text-lg font-semibold">
        About
      </Link>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Packages</h2>
        <ul className="ml-4 space-y-2">
          <li>
            <Link href="/packages/safari" className="text-sm">Safari Packages</Link>
          </li>
          <li>
            <span className="text-sm font-medium">Local Packages</span>
            <ul className="ml-4 mt-1 space-y-1">
              <li><Link href="/packages/local/beach" className="text-xs">Beach</Link></li>
              <li><Link href="/packages/local/bush" className="text-xs">Bush</Link></li>
              <li><Link href="/packages/local/weekend-getaways" className="text-xs">Weekend Getaways</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Destinations</h2>
        <ul className="ml-4 space-y-2">
          <li><Link href="/destinations/africa" className="text-sm">Africa</Link></li>
          <li><Link href="/destinations/middle-east" className="text-sm">Middle East</Link></li>
        </ul>
      </div>
      <Link href="/blog" className="text-lg font-semibold">
        Blog
      </Link>
      <Link href="/contact" className="text-lg font-semibold">
        Contact
      </Link>
    </div>
  )
}

export default Navbar