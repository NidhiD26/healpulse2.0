import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "This platform has been my lifeline during treatment. The meditation resources and community support made all the difference in my journey.",
      name: "Sarah J.",
      role: "Breast Cancer Survivor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The nutrition guides helped me maintain my strength during chemo. And connecting with others who understood exactly what I was going through was invaluable.",
      name: "Michael T.",
      role: "Lymphoma Survivor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a caregiver for my mother, the family support resources taught me how to be there for her in ways I wouldn't have known otherwise.",
      name: "Priya K.",
      role: "Family Caregiver",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 md:py-24 items-center flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stories from Our Community</h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Hear from those who have found support and strength through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Quote className="h-8 w-8 opacity-50" />
                </div>
                <p className="italic mb-6">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-6">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
