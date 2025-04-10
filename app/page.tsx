import type { Metadata } from "next"
import DeliveryDashboard from "@/components/delivery-dashboard"

export const metadata: Metadata = {
  title: "Driver Dashboard - FoodRush",
  description: "Food delivery driver dashboard",
}

export default function Page() {
  return <DeliveryDashboard />
}

