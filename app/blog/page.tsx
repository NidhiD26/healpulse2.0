import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "My Journey Through Breast Cancer: Finding Strength in Community",
      excerpt:
        "After my diagnosis, I discovered an incredible support network that changed everything. Here's my story of healing and hope.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Survivor Story",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "May 2, 2023",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Understanding Immunotherapy: A New Frontier in Cancer Treatment",
      excerpt:
        "Immunotherapy is revolutionizing cancer treatment. Learn how these innovative therapies work and who might benefit from them.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Treatment",
      author: {
        name: "Dr. Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "April 15, 2023",
      readTime: "10 min read",
    },
  ]

  const recentPosts = [
    {
      id: 3,
      title: "Nutrition Tips During Chemotherapy: What Helped Me",
      excerpt:
        "Dealing with appetite changes and nausea during chemo? These practical nutrition strategies made a difference in my treatment journey.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Nutrition",
      author: {
        name: "Emily Parker",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "April 28, 2023",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Talking to Your Children About Cancer: A Guide for Parents",
      excerpt:
        "Having honest, age-appropriate conversations with your kids about cancer can be challenging. Here's how to approach this difficult topic.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Family Support",
      author: {
        name: "Robert Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "April 20, 2023",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Mindfulness Practices That Helped Me Through Treatment",
      excerpt:
        "Simple mindfulness techniques that helped me manage anxiety and stay present during my cancer treatment journey.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mental Health",
      author: {
        name: "Lisa Zhang",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "April 12, 2023",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Navigating Insurance and Financial Assistance for Cancer Care",
      excerpt:
        "Understanding your insurance coverage and finding financial resources can be overwhelming. Here's what I learned during my experience.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Resources",
      author: {
        name: "James Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "April 5, 2023",
      readTime: "9 min read",
    },
  ]

  const categories = [
    "Survivor Stories",
    "Treatment",
    "Nutrition",
    "Mental Health",
    "Family Support",
    "Resources",
    "Research Updates",
    "Lifestyle",
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Cancer Support Blog</h1>
          <p className="text-muted-foreground">
            Stories, insights, and resources from cancer survivors, caregivers, and healthcare professionals.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{post.author.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="border-none shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="md:w-2/3 flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <CardTitle className="text-lg">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center mt-auto">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{post.author.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button>Load More Articles</Button>
            </div>
          </div>

          <div>
            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`} key={category}>
                    <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest articles, resources, and stories delivered to your inbox.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded-md text-sm"
                />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Share Your Story</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your experience could help others on their cancer journey. Consider sharing your story on our blog.
              </p>
              <Button variant="outline" className="w-full">
                Submit Your Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
