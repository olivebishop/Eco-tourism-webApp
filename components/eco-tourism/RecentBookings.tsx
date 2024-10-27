"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react" 

interface Booking {
  id: number
  customer: string
  destination: string
  date: string
  status: 'confirmed' | 'pending' | 'cancelled'
  guests: number
}

export default function RecentBookings() {
  const bookings: Booking[] = [
    {
      id: 1,
      customer: "Sarah Johnson",
      destination: "Serengeti, Tanzania",
      date: "2024-10-28",
      status: "confirmed",
      guests: 2
    },
    {
      id: 2,
      customer: "Michael Chen",
      destination: "Amazon Rainforest",
      date: "2024-10-29",
      status: "pending",
      guests: 4
    },
    {
      id: 3,
      customer: "Emma Davis",
      destination: "Mount Kilimanjaro",
      date: "2024-10-30",
      status: "confirmed",
      guests: 3
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card className="mx-2">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Travel Bookings</CardTitle>
        <CardDescription className="text-sm">Recent tours and expeditions</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[40%] sm:w-[30%]">Traveler</TableHead>
                <TableHead className="w-[20%]">Date</TableHead>
                <TableHead className="hidden sm:table-cell">Destination</TableHead>
                <TableHead className="w-[20%]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium text-sm">{booking.customer}</span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="mr-1 h-3 w-3" />
                        <span>{booking.guests}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {formatDate(booking.date)}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-sm">
                    {booking.destination}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === 'confirmed' ? 'default' :
                        booking.status === 'pending' ? 'secondary' :
                        'destructive'
                      }
                      className="capitalize text-xs"
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}