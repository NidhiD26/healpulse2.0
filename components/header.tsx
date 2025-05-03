"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">H</span>
          </div>
          <span className="font-bold text-xl">HealPulse</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem href="/resources/nutrition" title="Nutrition Charts">
                      Personalized nutrition guides for cancer patients
                    </ListItem>
                    <ListItem href="/resources/meditation" title="Meditation">
                      Healing music and guided meditation sessions
                    </ListItem>
                    <ListItem href="/resources/exercises" title="Exercises">
                      Gentle exercises and breathing techniques
                    </ListItem>
                    <ListItem href="/resources/guides" title="Guides">
                      Information about chemotherapy and treatments
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem href="/community/talk" title="Talk to Someone">
                      Connect with others who understand your journey
                    </ListItem>
                    <ListItem href="/community/stories" title="Survivor Stories">
                      Read inspiring stories from cancer survivors
                    </ListItem>
                    <ListItem href="/community/social" title="Social Network">
                      Join our supportive social network
                    </ListItem>
                    <ListItem href="/community/donate" title="Donate Hair">
                      Learn how to donate hair for cancer patients
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem href="/support/doctors" title="Connect with Doctors">
                      Schedule consultations with specialists
                    </ListItem>
                    <ListItem href="/support/family" title="Family Resources">
                      Guides for family members supporting patients
                    </ListItem>
                    <ListItem href="/support/reminders" title="Treatment Reminders">
                      Set up reminders for medications and appointments
                    </ListItem>
                    <ListItem href="/support/books" title="Recommended Books">
                      Curated reading list for patients and caregivers
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div onClick={() => router.push('/blog')}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button>Sign In</Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background items-center flex justify-center">
          <nav className="flex flex-col space-y-4">
            <Link href="/resources" className="px-2 py-1 hover:text-primary">
              Resources
            </Link>
            <Link href="/community" className="px-2 py-1 hover:text-primary">
              Community
            </Link>
            <Link href="/support" className="px-2 py-1 hover:text-primary">
              Support
            </Link>
            <Link href="/blog" className="px-2 py-1 hover:text-primary">
              Blog
            </Link>
            <Button className="w-full">Sign In</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
