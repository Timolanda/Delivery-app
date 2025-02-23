import { cookies } from "next/headers"
import { sign } from "jsonwebtoken"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Timer, Wallet } from "lucide-react"

// Demo user data
const DEMO_USER = {
  id: "demo-driver-1",
  email: "driver@foodrush.demo",
  name: "John Driver",
  phone: "+1234567890",
  vehicle: {
    type: "Car",
    model: "Toyota Prius",
    color: "Silver",
    plate: "ABC123",
  },
}

export default async function HomePage() {
  // Create a demo session token
  const token = sign({ userId: DEMO_USER.id }, process.env.JWT_SECRET || "demo-secret", { expiresIn: "24h" })

  // Set the auth cookie
  cookies().set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400, // 24 hours
    path: "/",
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <span className="text-xl font-bold">FoodRush</span>
          <Button asChild>
            <Link href="/dashboard">
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex-1">
        <div className="flex flex-col items-center justify-center py-12 text-center md:py-24 lg:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Deliver with FoodRush
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Be your own boss, set your own schedule, and earn money delivering food to hungry customers.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/dashboard">
              Start Delivering Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Flexible Schedule</h3>
            <p className="text-muted-foreground">
              Work whenever you want. Log in and start delivering on your own schedule.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Earn More</h3>
            <p className="text-muted-foreground">
              Keep 100% of your tips and earn extra during peak hours with surge pricing.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Deliveries</h3>
            <p className="text-muted-foreground">
              Our AI matches you with the best orders based on your location and preferences.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="my-12 grid gap-4 rounded-lg border bg-card p-6 md:my-24 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">10K+</span>
            <span className="text-sm text-muted-foreground">Active Drivers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">1M+</span>
            <span className="text-sm text-muted-foreground">Deliveries Made</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">$25/hr</span>
            <span className="text-sm text-muted-foreground">Average Earnings</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              FoodRush
            </a>
            . The source code is available on{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 FoodRush. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

