"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Bell } from "lucide-react"

export default function AffirmationSection() {
  const [currentAffirmation, setCurrentAffirmation] = useState("")
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  const affirmations = [
    "You are stronger than you know. Your body is fighting, and you are not alone.",
    "Every day is a new opportunity for healing. Your strength inspires those around you.",
    "This journey does not define you. Your courage and resilience do.",
    "Your body is capable of amazing healing. Trust the process and be gentle with yourself.",
    "You are surrounded by love and support, even on the hardest days.",
    "This is just a chapter, not your whole story. Better days are ahead.",
    "Your strength is not measured by how you feel, but by the fact that you keep going.",
    "Healing happens one moment at a time. Celebrate each small victory.",
    "You have overcome difficult days before, and you will overcome this too.",
    "Your journey matters. Your story matters. You matter.",
  ]

  useEffect(() => {
    
    const randomIndex = Math.floor(Math.random() * affirmations.length)
    setCurrentAffirmation(affirmations[randomIndex])
  }, [])

  const getNewAffirmation = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * affirmations.length)
    } while (affirmations[newIndex] === currentAffirmation)

    setCurrentAffirmation(affirmations[newIndex])
  }

  const toggleNotifications = () => {
    
    setNotificationsEnabled(!notificationsEnabled)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5 items-center flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Daily Affirmations</h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Positive affirmations to keep you motivated and focused on healing
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="pt-6 pb-6 px-6 md:px-10">
              <blockquote className="text-xl md:text-2xl text-center italic font-medium my-6">
                "{currentAffirmation}"
              </blockquote>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button onClick={getNewAffirmation} variant="outline" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  New Affirmation
                </Button>
                <Button
                  onClick={toggleNotifications}
                  variant={notificationsEnabled ? "default" : "outline"}
                  className="gap-2"
                >
                  <Bell className="h-4 w-4" />
                  {notificationsEnabled ? "Notifications On" : "Enable Daily Affirmations"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
