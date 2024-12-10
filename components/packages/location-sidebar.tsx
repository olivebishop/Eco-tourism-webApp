import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

interface Location {
  name: string
  image: string
}

const locations: Location[] = [
  { name: "Nairobi", image: "/images/Nairobi.jpg" },
  { name: "Mombasa", image: "/images/msa.jpg" },
  { name: "Lamu", image: "/images/lamu.jpg" },
  { name: "Nakuru", image: "/images/Nakuru.jpg" },
]

interface LocationSidebarProps {
  onLocationSelect: (location: string | null) => void
  selectedLocation: string | null
}

export function LocationSidebar({ onLocationSelect, selectedLocation }: LocationSidebarProps) {
  return (
    <aside className="w-64  bg-gray-50">
      <ScrollArea className="h-full">
        <div className="space-y-4 p-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="group relative h-40 cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onLocationSelect(location.name === selectedLocation ? null : location.name)}
            >
              <Image
                src={location.image}
                alt={location.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={300}
                height={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 w-full p-4">
                <h3 className="text-lg font-semibold text-white">{location.name}</h3>
                <Button
                  variant={selectedLocation === location.name ? "secondary" : "ghost"}
                  className="mt-2 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                >
                  {selectedLocation === location.name ? "Selected" : "Explore"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}

