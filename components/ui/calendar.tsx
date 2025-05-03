"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export interface CalendarProps {
  mode?: "single" | "range" | "multiple"
  selected?: Date | Date[] | { from?: Date; to?: Date } | undefined
  onSelect?: (date: Date | undefined) => void
  disabled?: { from?: Date; to?: Date } | Date[] | undefined
  initialFocus?: boolean
  month?: Date
  onMonthChange?: (month: Date) => void
  className?: string
  classNames?: Record<string, string>
  showOutsideDays?: boolean
  numberOfMonths?: number
  fromDate?: Date
  toDate?: Date
  captionLayout?: "dropdown" | "buttons"
  defaultMonth?: Date
  showWeekNumber?: boolean
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  ISOWeek?: boolean
  fixedWeeks?: boolean
  required?: boolean
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  selected,
  onSelect,
  month = new Date(),
  onMonthChange,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(month)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    selected instanceof Date ? selected : undefined
  )

  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth)
    prevMonth.setMonth(prevMonth.getMonth() - 1)
    setCurrentMonth(prevMonth)
    onMonthChange?.(prevMonth)
  }

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    setCurrentMonth(nextMonth)
    onMonthChange?.(nextMonth)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onSelect?.(date)
  }

  
  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ]
    
    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    
    
    let calendarDays = []
    
    
    const prevMonthDays = []
    if (firstDayOfMonth > 0) {
      const prevMonth = month === 0 ? 11 : month - 1
      const prevMonthYear = month === 0 ? year - 1 : year
      const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth)
      
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i
        const date = new Date(prevMonthYear, prevMonth, day)
        prevMonthDays.push({
          date,
          day,
          isCurrentMonth: false,
          isToday: false,
          isSelected: false
        })
      }
    }
    
    
    const currentMonthDays = []
    const today = new Date()
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      currentMonthDays.push({
        date,
        day: i,
        isCurrentMonth: true,
        isToday: 
          today.getDate() === i && 
          today.getMonth() === month && 
          today.getFullYear() === year,
        isSelected: 
          selectedDate?.getDate() === i && 
          selectedDate?.getMonth() === month && 
          selectedDate?.getFullYear() === year
      })
    }
    
    
    const nextMonthDays = []
    const totalDaysShown = (Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7)
    const nextDaysToShow = totalDaysShown - (prevMonthDays.length + currentMonthDays.length)
    
    if (nextDaysToShow > 0) {
      const nextMonth = month === 11 ? 0 : month + 1
      const nextMonthYear = month === 11 ? year + 1 : year
      
      for (let i = 1; i <= nextDaysToShow; i++) {
        const date = new Date(nextMonthYear, nextMonth, i)
        nextMonthDays.push({
          date,
          day: i,
          isCurrentMonth: false,
          isToday: false,
          isSelected: false
        })
      }
    }
    
    
    calendarDays.push(...prevMonthDays, ...currentMonthDays, ...nextMonthDays)
    
    return (
      <div className="space-y-4">
        <div className="flex justify-center pt-1 relative items-center">
          <button
            onClick={handlePrevMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="text-sm font-medium">
            {monthNames[month]} {year}
          </div>
          <button
            onClick={handleNextMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="w-full">
          <div className="flex">
            {dayNames.map((day) => (
              <div 
                key={day} 
                className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center"
              >
                {day}
              </div>
            ))}
          </div>
          {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex w-full mt-2">
              {calendarDays.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-9 w-9 text-center text-sm p-0 relative",
                    day.isSelected && "bg-accent"
                  )}
                >
                  <button
                    onClick={() => handleDateSelect(day.date)}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-9 w-9 p-0 font-normal",
                      day.isToday && "bg-accent text-accent-foreground",
                      day.isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                      !day.isCurrentMonth && showOutsideDays 
                        ? "text-muted-foreground opacity-50" 
                        : !day.isCurrentMonth ? "invisible" : ""
                    )}
                  >
                    {day.day}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("p-3", className)}>
      {renderCalendar()}
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }