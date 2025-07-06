import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 items-center flex justify-center">
      <div className="container py-12 px-4 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <span className="font-bold text-xl">HealPulse</span>
            </div>
            <p className="text-muted-foreground">
              Supporting cancer patients and their families through every step of the journey.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/nutrition" className="text-muted-foreground hover:text-primary">
                  Nutrition Charts
                </Link>
              </li>
              <li>
                <Link href="/resources/meditation" className="text-muted-foreground hover:text-primary">
                  Meditation & Music
                </Link>
              </li>
              <li>
                <Link href="/resources/exercises" className="text-muted-foreground hover:text-primary">
                  Exercises
                </Link>
              </li>
              <li>
                {/* <Link href="/resources/guides" className="text-muted-foreground hover:text-primary">
                  Treatment Guides
                </Link> */}
              </li>
              <li>
                {/* <Link href="/resources/books" className="text-muted-foreground hover:text-primary">
                  Recommended Books
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/community/talk" className="text-muted-foreground hover:text-primary">
                  Talk to Someone
                </Link>
              </li> */}
              <li>
                {/* <Link href="/community/stories" className="text-muted-foreground hover:text-primary">
                  Survivor Stories
                </Link> */}
              </li>
              <li>
                {/* <Link href="/community/social" className="text-muted-foreground hover:text-primary">
                  Social Network
                </Link> */}
              </li>
              <li>
                <Link href="/community/donate" className="text-muted-foreground hover:text-primary">
                  Donate Hair
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Inspired</h3>
            <p className="text-muted-foreground">Subscribe for daily affirmations and updates</p>
            <form action="https://formsubmit.co/dineshnidhi2605@gmail.com" method="POST" className="flex gap-2">
              <Input type="email" placeholder="Your email" id="email" name="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
                <p className="text-sm text-muted-foreground">
  © {new Date().getFullYear()}{" "}
  <a
    href="https://nidhidinesh.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-primary transition-colors"
  >
    HealPulse
  </a>
  . All rights reserved.
</p>


          {/* <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} HealPulse. All rights reserved.</p> */}
          
          {/* <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
          </div> */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="fill-primary text-primary" />
            <span>for cancer warriors</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
