"use client";

import React from "react";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur p-2 supports-[backdrop-filter]:bg-background/60 grid place-items-center">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="h-10 w-10 rounded-xl bg-primary overflow-hidden flex items-center justify-center shadow-lg shadow-primary/20">
            <Image
              src="/images/logo.jpg"
              alt="HealPulse Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter">
            HealPulse
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem
                      href="/resources/nutrition"
                      title="Nutrition Charts"
                    >
                      Personalized nutrition guides for cancer patients
                    </ListItem>
                    <ListItem href="/resources/meditation" title="Meditation">
                      Healing music and guided meditation sessions
                    </ListItem>
                    <ListItem href="/resources/exercises" title="Exercises">
                      Gentle exercises and breathing techniques
                    </ListItem>
                    {/* <ListItem href="/resources/guides" title="Guides">
                      Information about chemotherapy and treatments
                    </ListItem> */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/donate" className={navigationMenuTriggerStyle()}>
                    Donate
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/reminders" className={navigationMenuTriggerStyle()}>
                    Reminders
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <div onClick={() => router.push('/blog')}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                </div>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ModeToggle />
            {/* <Button>Sign In</Button> */}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background items-center flex justify-center">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/resources/nutrition"
              className="px-2 py-1 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/donate"
              className="px-2 py-1 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              href="/reminders"
              className="px-2 py-1 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Reminders
            </Link>
            {/* <Link href="/blog" className="px-2 py-1 hover:text-primary">
              Blog
            </Link> */}
            {/* <Button className="w-full">Sign In</Button> */}
          </nav>
        </div>
      )}
    </header>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
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
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
