"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookText, TrendingUp, TrendingDown } from "lucide-react"

interface Stats {
  totalBookings: number
  totalBlogs: number
  bookingsTrend: number
  blogsTrend: number
}

export default function DashboardStats() {
  const stats: Stats = {
    totalBookings: 128,
    totalBlogs: 45,
    bookingsTrend: 12.5,
    blogsTrend: -2.4
  }

  const items = [
    {
      title: "Total Bookings",
      value: stats.totalBookings,
      icon: Users,
      trend: stats.bookingsTrend,
      description: "vs. last month",
      color: "text-blue-500",
      background: "bg-blue-100 dark:bg-blue-900"
    },
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      icon: BookText,
      trend: stats.blogsTrend,
      description: "vs. last month",
      color: "text-purple-500",
      background: "bg-purple-100 dark:bg-purple-900"
    }
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 px-2">
      {items.map((item) => (
        <Card key={item.title} className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <div className={`${item.background} rounded-full p-2`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{item.value}</div>
            <div className="flex items-center space-x-2">
              <p className={`text-xs sm:text-sm ${item.trend > 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                {item.trend > 0 ? (
                  <TrendingUp className="mr-1 h-3 w-3" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3" />
                )}
                {Math.abs(item.trend)}%
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
