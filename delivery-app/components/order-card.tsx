import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, DollarSign, MapPin } from "lucide-react"

interface OrderCardProps {
  restaurant: string
  orderTotal: string
  distance: string
  estimatedTime: string
  status: "new" | "pickup" | "delivery"
  earnings: string
}

export default function OrderCard({
  restaurant,
  orderTotal,
  distance,
  estimatedTime,
  status,
  earnings,
}: OrderCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="grid gap-1">
          <h3 className="font-semibold">{restaurant}</h3>
          <p className="text-sm text-muted-foreground">Order Total: {orderTotal}</p>
        </div>
        <Badge
          variant={status === "new" ? "default" : status === "pickup" ? "secondary" : "outline"}
          className="capitalize"
        >
          {status}
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-2 p-4 pt-0">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{distance} mi</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{estimatedTime} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>${earnings}</span>
          </div>
        </div>
      </CardContent>
      {status === "new" && (
        <CardFooter className="grid grid-cols-2 gap-2 p-4">
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </CardFooter>
      )}
      {status === "pickup" && (
        <CardFooter className="p-4">
          <Button className="w-full">Navigate to Restaurant</Button>
        </CardFooter>
      )}
    </Card>
  )
}

