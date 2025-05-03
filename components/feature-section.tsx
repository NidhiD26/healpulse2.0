import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind, Activity, Calendar, Bell, BookOpen, Heart } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Wind className="h-6 w-6 text-primary" />,
      title: "Breathing Exercises",
      description: "Guided breathing techniques to reduce stress and anxiety during treatment.",
    },
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      title: "Gentle Exercises",
      description: "Low-impact physical activities designed specifically for cancer patients.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Treatment Calendar",
      description: "Keep track of all your appointments, medications, and treatment schedules.",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: "Reminders",
      description: "Never miss an important medication or appointment with customizable alerts.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Educational Resources",
      description: "Comprehensive guides about treatments, side effects, and recovery.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Family Support",
      description: "Resources for family members to effectively support their loved ones.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Features Designed for Your Wellbeing</h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Tools and resources to support you through every stage of your cancer journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
