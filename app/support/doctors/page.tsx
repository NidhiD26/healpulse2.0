"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Search, CalendarIcon, Video, Phone, Star, MapPin } from "lucide-react"


interface Doctor {
  id: number
  name: string
  specialty: string
  hospital: string
  rating: number
  reviews: number
  image: string
  location: string
  availableToday: boolean
  nextAvailable: string
  bio: string
}

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedSpecialty, setSelectedSpecialty] = useState("")

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Medical Oncology",
      hospital: "Memorial Cancer Center",
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=100&width=100",
      location: "New York, NY",
      availableToday: true,
      nextAvailable: "Today at 3:30 PM",
      bio: "Dr. Johnson specializes in breast cancer and has over 15 years of experience in oncology. She takes a holistic approach to cancer care, focusing on both medical treatment and quality of life.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Radiation Oncology",
      hospital: "University Medical Center",
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=100&width=100",
      location: "Boston, MA",
      availableToday: false,
      nextAvailable: "Tomorrow at 10:00 AM",
      bio: "Dr. Chen is a leading radiation oncologist specializing in precision radiation therapy. He has pioneered several innovative approaches to minimize side effects while maximizing treatment effectiveness.",
    },
    {
      id: 3,
      name: "Dr. Amelia Rodriguez",
      specialty: "Surgical Oncology",
      hospital: "City Cancer Institute",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=100&width=100",
      location: "Chicago, IL",
      availableToday: true,
      nextAvailable: "Today at 5:15 PM",
      bio: "Dr. Rodriguez is a board-certified surgical oncologist with expertise in minimally invasive surgical techniques. She specializes in colorectal and gastrointestinal cancers.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Hematology Oncology",
      hospital: "National Cancer Hospital",
      rating: 4.9,
      reviews: 210,
      image: "/placeholder.svg?height=100&width=100",
      location: "Houston, TX",
      availableToday: false,
      nextAvailable: "Friday at 1:30 PM",
      bio: "Dr. Wilson is a hematologist-oncologist specializing in leukemia, lymphoma, and other blood cancers. He is actively involved in clinical research and has published extensively on novel therapies.",
    },
    {
      id: 5,
      name: "Dr. Emily Patel",
      specialty: "Integrative Oncology",
      hospital: "Wellness Cancer Center",
      rating: 4.8,
      reviews: 87,
      image: "/placeholder.svg?height=100&width=100",
      location: "San Francisco, CA",
      availableToday: true,
      nextAvailable: "Today at 4:00 PM",
      bio: "Dr. Patel combines conventional cancer treatments with evidence-based complementary therapies. She focuses on nutrition, stress management, and mind-body approaches alongside medical treatments.",
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialty: "Neuro-Oncology",
      hospital: "Brain & Spine Institute",
      rating: 4.7,
      reviews: 76,
      image: "/placeholder.svg?height=100&width=100",
      location: "Seattle, WA",
      availableToday: false,
      nextAvailable: "Monday at 9:15 AM",
      bio: "Dr. Kim specializes in brain and spinal cord tumors. He works with a multidisciplinary team to provide comprehensive care for patients with complex neurological cancers.",
    },
  ]

  const specialties = [
    "Medical Oncology",
    "Radiation Oncology",
    "Surgical Oncology",
    "Hematology Oncology",
    "Integrative Oncology",
    "Neuro-Oncology",
    "Gynecologic Oncology",
    "Pediatric Oncology",
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSpecialty = selectedSpecialty ? doctor.specialty === selectedSpecialty : true

    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Connect with Specialists</h1>
          <p className="text-muted-foreground">
            Find and schedule consultations with oncologists and healthcare specialists.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty, or location"
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Specialties</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Select Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar 
                  mode="single" 
                  selected={selectedDate} 
                  onSelect={setSelectedDate} 
                  initialFocus 
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Doctors</TabsTrigger>
            <TabsTrigger value="available">Available Today</TabsTrigger>
            <TabsTrigger value="top">Top Rated</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No doctors match your search criteria</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedSpecialty("")
                      setSelectedDate(undefined)
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="available" className="mt-6">
            <div className="space-y-6">
              {filteredDoctors.filter((doctor) => doctor.availableToday).length > 0 ? (
                filteredDoctors
                  .filter((doctor) => doctor.availableToday)
                  .map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No doctors available today match your search criteria</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedSpecialty("")
                      setSelectedDate(undefined)
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="top" className="mt-6">
            <div className="space-y-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors
                  .sort((a, b) => b.rating - a.rating)
                  .map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No doctors match your search criteria</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedSpecialty("")
                      setSelectedDate(undefined)
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-muted/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-2">How It Works</h2>
              <p className="text-muted-foreground">
                Connect with specialists who understand your specific cancer journey.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                  <Search className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Find a Specialist</h3>
                <p className="text-sm text-muted-foreground">
                  Search for specialists by specialty, location, or availability.
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Book a Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a video, phone, or in-person consultation at a time that works for you.
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                  <Video className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Connect Securely</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with your specialist through our secure, HIPAA-compliant platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Avatar className="h-16 w-16">
            <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
            <AvatarFallback>
              {doctor.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{doctor.rating}</span>
                <span className="text-muted-foreground text-sm">({doctor.reviews} reviews)</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {doctor.location}
              </Badge>
              <Badge variant="outline">{doctor.hospital}</Badge>
              {doctor.availableToday && <Badge className="bg-accent text-accent-foreground">Available Today</Badge>}
            </div>
          </div>
        </div>
      </CardHeader>

      {showDetails && (
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">About</h3>
              <p className="text-sm text-muted-foreground">{doctor.bio}</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Available Appointment Times</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Today, 3:30 PM
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Today, 4:15 PM
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Tomorrow, 10:00 AM
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Tomorrow, 2:30 PM
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Fri, 9:15 AM
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Fri, 1:45 PM
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Consultation Options</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Video className="h-4 w-4" />
                  Video
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Phone className="h-4 w-4" />
                  Phone
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <MapPin className="h-4 w-4" />
                  In-Person
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      )}

      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Show Less" : "Show More"}
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            View Profile
          </Button>
          <Button size="sm">Book Consultation</Button>
        </div>
      </CardFooter>
    </Card>
  )
}