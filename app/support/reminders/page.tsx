"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import {
  CalendarIcon,
  Clock,
  Bell,
  Plus,
  Trash2,
  Edit,
  X,
  CalendarDays,
  Pill,
  Stethoscope,
  Droplets,
} from "lucide-react"


type ReminderType = "appointment" | "medication" | "other"
type RecurrenceType = "once" | "daily" | "weekly" | "monthly"

interface Reminder {
  id: number
  title: string
  date: Date
  type: ReminderType
  notes: string
  notifications: boolean
  recurrence?: RecurrenceType | null
}

interface NewReminderForm {
  title: string
  date: Date
  time: string
  type: ReminderType
  notes: string
  recurrence: RecurrenceType
  notifications: boolean
}

interface ReminderCardProps {
  reminder: Reminder
  onDelete: (id: number) => void
  getTypeIcon: (type: ReminderType) => React.ReactNode
  getTypeBadgeColor: (type: ReminderType) => string
}

export default function RemindersPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Chemotherapy Session",
      date: new Date(2023, 4, 15, 10, 0),
      type: "appointment",
      notes: "Bring water and a book. Remember to arrange transportation.",
      notifications: true,
    },
    {
      id: 2,
      title: "Take Medication",
      date: new Date(2023, 4, 10, 8, 0),
      type: "medication",
      recurrence: "daily",
      notes: "Take with food",
      notifications: true,
    },
    {
      id: 3,
      title: "Blood Test",
      date: new Date(2023, 4, 20, 14, 30),
      type: "appointment",
      notes: "Fasting required 12 hours before",
      notifications: true,
    },
    {
      id: 4,
      title: "Hydration Reminder",
      date: new Date(2023, 4, 10, 10, 0),
      type: "other",
      recurrence: "daily",
      notes: "Drink at least 8 glasses of water",
      notifications: true,
    },
  ])

  const [showAddForm, setShowAddForm] = useState<boolean>(false)
  const [newReminder, setNewReminder] = useState<NewReminderForm>({
    title: "",
    date: new Date(),
    time: "12:00",
    type: "appointment",
    notes: "",
    recurrence: "once",
    notifications: true,
  })

  const handleAddReminder = () => {
    
    const [hours, minutes] = newReminder.time.split(":").map(Number)
    const reminderDate = new Date(newReminder.date)
    reminderDate.setHours(hours, minutes)

    const reminder: Reminder = {
      id: reminders.length + 1,
      title: newReminder.title,
      date: reminderDate,
      type: newReminder.type,
      recurrence: newReminder.recurrence === "once" ? null : newReminder.recurrence,
      notes: newReminder.notes,
      notifications: newReminder.notifications,
    }

    setReminders([...reminders, reminder])
    setShowAddForm(false)
    setNewReminder({
      title: "",
      date: new Date(),
      time: "12:00",
      type: "appointment",
      notes: "",
      recurrence: "once",
      notifications: true,
    })
  }

  const handleDeleteReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  const getTypeIcon = (type: ReminderType) => {
    switch (type) {
      case "appointment":
        return <Stethoscope className="h-4 w-4" />
      case "medication":
        return <Pill className="h-4 w-4" />
      case "other":
        return <Droplets className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getTypeBadgeColor = (type: ReminderType) => {
    switch (type) {
      case "appointment":
        return "bg-primary/10 text-primary border-primary/20"
      case "medication":
        return "bg-accent/10 text-accent border-accent/20"
      case "other":
        return "bg-secondary/10 text-secondary-foreground border-secondary/20"
      default:
        return ""
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Treatment Reminders</h1>
          <p className="text-muted-foreground">
            Keep track of your appointments, medications, and other important reminders.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="all">All Reminders</TabsTrigger>
            </TabsList>

            <Button onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
              {showAddForm ? "Cancel" : "Add Reminder"}
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-6 border-none shadow-md">
              <CardHeader>
                <CardTitle>Add New Reminder</CardTitle>
                <CardDescription>
                  Create a new reminder for appointments, medications, or other important events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter reminder title"
                      value={newReminder.title}
                      onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {newReminder.date ? format(newReminder.date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={newReminder.date}
                            onSelect={(date) => date && setNewReminder({ ...newReminder, date })}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={newReminder.time}
                        onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={newReminder.type}
                        onValueChange={(value: ReminderType) => setNewReminder({ ...newReminder, type: value })}
                      >
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Appointment</SelectItem>
                          <SelectItem value="medication">Medication</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="recurrence">Recurrence</Label>
                    <Select
                      value={newReminder.recurrence}
                      onValueChange={(value: RecurrenceType) => setNewReminder({ ...newReminder, recurrence: value })}
                    >
                      <SelectTrigger id="recurrence">
                        <SelectValue placeholder="Select recurrence" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">Once</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Input
                      id="notes"
                      placeholder="Add any additional notes"
                      value={newReminder.notes}
                      onChange={(e) => setNewReminder({ ...newReminder, notes: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch
                      id="notifications"
                      checked={newReminder.notifications}
                      onCheckedChange={(checked) => setNewReminder({ ...newReminder, notifications: checked })}
                    />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddReminder}>Add Reminder</Button>
              </CardFooter>
            </Card>
          )}

          <TabsContent value="upcoming" className="mt-0">
            <div className="space-y-4">
              {reminders
                .filter((reminder) => reminder.date > new Date())
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((reminder) => (
                  <ReminderCard
                    key={reminder.id}
                    reminder={reminder}
                    onDelete={handleDeleteReminder}
                    getTypeIcon={getTypeIcon}
                    getTypeBadgeColor={getTypeBadgeColor}
                  />
                ))}

              {reminders.filter((reminder) => reminder.date > new Date()).length === 0 && (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium">No upcoming reminders</h3>
                  <p className="text-muted-foreground">Click the "Add Reminder" button to create a new reminder.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="mt-0">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Reminder Calendar</CardTitle>
                <CardDescription>View your reminders in a calendar format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar 
                    mode="single" 
                    selected={date} 
                    onSelect={(newDate) => newDate && setDate(newDate)} 
                    className="rounded-md border" 
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-3">Reminders for {format(date, "MMMM d, yyyy")}</h3>

                  <div className="space-y-2">
                    {reminders
                      .filter(
                        (reminder) =>
                          reminder.date.getDate() === date.getDate() &&
                          reminder.date.getMonth() === date.getMonth() &&
                          reminder.date.getFullYear() === date.getFullYear(),
                      )
                      .map((reminder) => (
                        <div key={reminder.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-full ${
                                reminder.type === "appointment"
                                  ? "bg-primary/10"
                                  : reminder.type === "medication"
                                    ? "bg-accent/10"
                                    : "bg-secondary/10"
                              }`}
                            >
                              {getTypeIcon(reminder.type)}
                            </div>
                            <div>
                              <h4 className="font-medium">{reminder.title}</h4>
                              <p className="text-sm text-muted-foreground">{format(reminder.date, "h:mm a")}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteReminder(reminder.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}

                    {reminders.filter(
                      (reminder) =>
                        reminder.date.getDate() === date.getDate() &&
                        reminder.date.getMonth() === date.getMonth() &&
                        reminder.date.getFullYear() === date.getFullYear(),
                    ).length === 0 && (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No reminders for this date</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">All Reminders</h3>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="appointment">Appointments</SelectItem>
                    <SelectItem value="medication">Medications</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {reminders
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .map((reminder) => (
                    <ReminderCard
                      key={reminder.id}
                      reminder={reminder}
                      onDelete={handleDeleteReminder}
                      getTypeIcon={getTypeIcon}
                      getTypeBadgeColor={getTypeBadgeColor}
                    />
                  ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-muted/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-2">Reminder Tips</h2>
              <p className="text-muted-foreground">
                Staying organized with your treatment schedule is an important part of your cancer journey.
              </p>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Set Up Multiple Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    For important appointments, set reminders for several days before, the day before, and the day of
                    the appointment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Share Your Calendar</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your reminder calendar with family members or caregivers so they can help you keep track of
                    appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Medication Organization</h3>
                  <p className="text-sm text-muted-foreground">
                    Use pill organizers in combination with reminders to ensure you're taking the right medications at
                    the right times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReminderCard({ reminder, onDelete, getTypeIcon, getTypeBadgeColor }: ReminderCardProps) {
  const isPast = reminder.date < new Date()

  return (
    <Card className={`border-none shadow-md ${isPast ? "opacity-70" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base">{reminder.title}</CardTitle>
            <Badge variant="outline" className={getTypeBadgeColor(reminder.type)}>
              <div className="flex items-center gap-1">
                {getTypeIcon(reminder.type)}
                <span>{reminder.type.charAt(0).toUpperCase() + reminder.type.slice(1)}</span>
              </div>
            </Badge>
            {reminder.recurrence && (
              <Badge variant="outline">
                {reminder.recurrence.charAt(0).toUpperCase() + reminder.recurrence.slice(1)}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1">
            {reminder.notifications && <Bell className="h-4 w-4 text-muted-foreground" />}
          </div>
        </div>
        <CardDescription className="flex items-center gap-2">
          <CalendarIcon className="h-3.5 w-3.5" />
          {format(reminder.date, "MMMM d, yyyy")}
          <Clock className="h-3.5 w-3.5 ml-2" />
          {format(reminder.date, "h:mm a")}
        </CardDescription>
      </CardHeader>
      {reminder.notes && (
        <CardContent className="pt-0 pb-2">
          <p className="text-sm text-muted-foreground">{reminder.notes}</p>
        </CardContent>
      )}
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onDelete(reminder.id)}>
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}