import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  Music,
  Heart,
  MessageCircle,
  Video,
  Utensils,
  Bell,
  Sparkles,
  Stethoscope,
  Scissors,
  BookMarked,
  Share2,
  Wind,
  Activity,
} from "lucide-react"
import TestimonialSection from "@/components/testimonial-section"
import AffirmationSection from "@/components/affirmation-section"
import ImmunotherapySection from "@/components/ImmunotherapySection"

export default function Home() {
  return (
    <>
      <section className="hero-gradient py-16 px-2 md:py-24 items-center flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                  Supporting Cancer Warriors
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Your Journey to <span className="gradient-text">Healing</span> Starts Here
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  A supportive community and comprehensive resource hub for cancer patients and their families.
                </p>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="font-medium">
                  Join Our Community
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Talk to Someone Now
                </Button>
              </div> */}
              {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>10,000+ Members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={16} />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Stethoscope size={16} />
                  <span>Expert Guidance</span>
                </div>
              </div> */}
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-accent blur-md opacity-30"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="Cancer support community"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImmunotherapySection />

      <section className="py-16 md:py-24 items-center flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Support You</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Comprehensive resources and community support designed specifically for cancer patients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-primary" />}
              title="Talk to Someone"
              description="Connect with others who understand your journey through our secure chat platform."
              link="/community/talk"
            />
            {/* <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-primary" />}
              title="Daily Affirmations"
              description="Receive positive affirmations and manifestations to keep you motivated."
              link="/resources/affirmations"
            /> */}
            <FeatureCard
              icon={<Bell className="h-10 w-10 text-primary" />}
              title="Helpful Reminders"
              description="Set up reminders for medications, appointments, and treatments."
              link="/support/reminders"
            />
            <FeatureCard
              icon={<Utensils className="h-10 w-10 text-primary" />}
              title="Nutrition Guidance"
              description="Access personalized nutrition charts and diet plans for cancer patients."
              link="/resources/nutrition"
            />
            <FeatureCard
              icon={<Music className="h-10 w-10 text-primary" />}
              title="Meditation & Music"
              description="Explore healing music and guided meditation sessions for relaxation."
              link="/resources/meditation"
            />
            {/* <FeatureCard
              icon={<Video className="h-10 w-10 text-primary" />}
              title="Survivor Stories"
              description="Watch motivational videos and read stories from cancer survivors."
              link="/community/stories"
            /> */}
            {/* <FeatureCard
              icon={<Stethoscope className="h-10 w-10 text-primary" />}
              title="Connect with Doctors"
              description="Schedule consultations with oncologists and healthcare specialists."
              link="/support/doctors"
            /> */}
            <FeatureCard
              icon={<Scissors className="h-10 w-10 text-primary" />}
              title="Donate Hair"
              description="Learn how to donate hair for wigs and support other cancer patients."
              link="/community/donate"
            />
            {/* <FeatureCard
              icon={<BookMarked className="h-10 w-10 text-primary" />}
              title="Resource Library"
              description="Access books, guides, and educational materials about cancer treatment."
              link="/resources/books"
            /> */}
          </div>
        </div>
      </section>

      <AffirmationSection />
      
      <section className="py-16 md:py-24 bg-muted/30 items-center flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/images/img4.png"
                      alt="Community member"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/images/img1.png"
                      alt="Support group"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/images/img2.png"
                      alt="Online chat"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/images/img3.png"
                      alt="Social connection"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-3">
                <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                  Our Community
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">You Are Not Alone in This Journey</h2>
                <p className="text-muted-foreground">
                  Connect with others who understand what you're going through. Our community features include:
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Talk to Someone</h3>
                    <p className="text-muted-foreground">
                      Connect with others in a safe, anonymous environment similar to Omegle but specifically for cancer
                      patients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Social Network</h3>
                    <p className="text-muted-foreground">
                      Join our dedicated social platform to share experiences, ask questions, and build lasting
                      connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Support Groups</h3>
                    <p className="text-muted-foreground">
                      Participate in moderated group sessions focused on specific cancer types or treatment stages.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="font-medium">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 items-center flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive Resources</h2>
            <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Everything you need to navigate your cancer journey with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              icon={<Utensils className="h-6 w-6 text-primary" />}
              title="Nutrition & Diet Charts"
              description="Personalized nutrition guides and diet plans designed specifically for cancer patients."
              link="/resources/nutrition"
            />
            <ResourceCard
              icon={<Music className="h-6 w-6 text-primary" />}
              title="Meditation & Healing Music"
              description="Curated playlists and guided meditation sessions to promote relaxation and healing."
              link="/resources/meditation"
            />
            {/* <ResourceCard
              icon={<Wind className="h-6 w-6 text-primary" />}
              title="Breathing Exercises"
              description="Learn techniques to manage anxiety, improve sleep, and enhance overall wellbeing."
              link="/resources/breathing"
            /> */}
            <ResourceCard
              icon={<Activity className="h-6 w-6 text-primary" />}
              title="Gentle Exercises"
              description="Safe, low-impact exercises designed specifically for cancer patients at various stages."
              link="/resources/exercises"
            />
            {/* <ResourceCard
              icon={<BookOpen className="h-6 w-6 text-primary" />}
              title="Treatment Guides"
              description="Comprehensive information about chemotherapy, radiation, and other cancer treatments."
              link="/resources/guides"
            />
            <ResourceCard
              icon={<Heart className="h-6 w-6 text-primary" />}
              title="Family Support"
              description="Resources for family members and caregivers to effectively support their loved ones."
              link="/support/family"
            /> */}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section className="py-16 md:py-24 bg-primary/5 items-center flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge variant="outline" className="bg-secondary/20 text-primary border-secondary">
                  Join Us Today
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Start Your Healing Journey With Support
                </h2>
                <p className="text-muted-foreground">
                  Sign up now to access all our resources, connect with our community, and receive personalized support
                  throughout your cancer journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="font-medium">
                  Create Free Account
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-accent blur-md opacity-30"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/img5.png"
                  alt="Support community"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ icon, title, description, link }:{icon:any, title:any, description:any, link:any }) {
  return (
    <Card className="feature-card border-none shadow-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-primary hover:underline font-medium">
          Learn more →
        </Link>
      </CardFooter>
    </Card>
  )
}

function ResourceCard({ icon, title, description, link }:{icon:any, title:any, description:any, link:any }) {
  return (
    <Link href={link} className="block group">
      <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 border-none shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <span className="text-primary group-hover:underline font-medium">Explore →</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
