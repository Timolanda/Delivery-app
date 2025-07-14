'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Clock, DollarSign, MessageSquare, Navigation, Shield, Star, Wallet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import OrderCard from "@/components/order-card"
import { Separator } from "@/components/ui/separator"

export default function DeliveryDashboard({
  initialTab = 'available',
  onOrderHistory,
  onEarnings,
  onRatings,
  onSupport,
  onSOS,
}: {
  initialTab?: 'available' | 'active',
  onOrderHistory?: () => void,
  onEarnings?: () => void,
  onRatings?: () => void,
  onSupport?: () => void,
  onSOS?: () => void,
}) {
  const [isOnline, setIsOnline] = useState(false)
  const [autoAccept, setAutoAccept] = useState(false)
  const [tab, setTab] = useState<'available' | 'active'>(initialTab)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Avatar className="h-8 w-8 shadow-lg border-2 border-primary">
              <AvatarImage src="/placeholder-user.jpg" alt="Driver" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch checked={isOnline} onCheckedChange={setIsOnline} />
                <span className="text-sm font-medium">{isOnline ? "Online" : "Offline"}</span>
              </div>
              <Button variant="outline" size="sm" className="hidden md:flex" onClick={onSOS}>
                <Shield className="mr-2 h-4 w-4 text-red-500" />
                SOS
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex" onClick={onSupport}>
                <MessageSquare className="mr-2 h-4 w-4 text-primary" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Welcome banner */}
      <div className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 py-6 px-8 text-2xl font-bold text-primary shadow-sm border-b">
        Welcome back, Driver! Ready for your next delivery?
      </div>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 md:pt-6">
        <aside className="fixed top-28 z-30 -ml-2 hidden h-[calc(100vh-6.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block bg-background/80 rounded-2xl shadow-lg p-2">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-primary">Overview</h2>
              <div className="space-y-1">
                <Button variant={tab === 'active' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setTab('active')}>
                  <Navigation className="mr-2 h-4 w-4" />
                  Active Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={onOrderHistory}>
                  <Clock className="mr-2 h-4 w-4" />
                  Order History
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={onEarnings}>
                  <Wallet className="mr-2 h-4 w-4" />
                  Earnings
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={onRatings}>
                  <Star className="mr-2 h-4 w-4" />
                  Ratings
                </Button>
              </div>
              <Separator className="my-4" />
            </div>
          </div>
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-primary/10 to-background shadow-xl rounded-2xl border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-primary">Today&apos;s Earnings</CardTitle>
                <DollarSign className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">$124.50</div>
                <p className="text-xs text-muted-foreground">+20.1% from yesterday</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-100/40 to-background shadow-xl rounded-2xl border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-green-700">Completed Orders</CardTitle>
                <ArrowUpRight className="h-5 w-5 text-green-700" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">8</div>
                <p className="text-xs text-muted-foreground">12 orders remaining for bonus</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-100/40 to-background shadow-xl rounded-2xl border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-yellow-700">Rating</CardTitle>
                <Star className="h-5 w-5 text-yellow-700" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <Progress value={98} className="h-2" />
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-100/40 to-background shadow-xl rounded-2xl border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Auto Accept</CardTitle>
                <Switch checked={autoAccept} onCheckedChange={setAutoAccept} className="ml-auto" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">2.5 mi</div>
                <p className="text-xs text-muted-foreground">Current radius setting</p>
              </CardContent>
            </Card>
          </div>
          <Tabs value={tab} onValueChange={v => setTab(v as 'available' | 'active')} className="mt-6">
            <TabsList className="rounded-xl shadow bg-background/80">
              <TabsTrigger value="available">Available Orders</TabsTrigger>
              <TabsTrigger value="active">Active Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="available" className="border-none p-0">
              <div className="mt-4 grid gap-4">
                <Card className="rounded-xl shadow border-0 bg-white/80 dark:bg-zinc-900/80">
                  <CardHeader>
                    <CardTitle>Nearby Orders</CardTitle>
                    <CardDescription>Orders available in your area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[450px]">
                      <div className="space-y-4">
                        <OrderCard
                          restaurant="Burger King"
                          orderTotal="$23.50"
                          distance="1.2"
                          estimatedTime="25-30"
                          status="new"
                          earnings="8.50"
                        />
                        <OrderCard
                          restaurant="Pizza Hut"
                          orderTotal="$45.75"
                          distance="0.8"
                          estimatedTime="20-25"
                          status="new"
                          earnings="12.25"
                        />
                        <OrderCard
                          restaurant="Subway"
                          orderTotal="$18.25"
                          distance="1.5"
                          estimatedTime="15-20"
                          status="new"
                          earnings="6.75"
                        />
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="active" className="border-none p-0">
              <div className="mt-4 grid gap-4">
                <Card className="rounded-xl shadow border-0 bg-white/80 dark:bg-zinc-900/80">
                  <CardHeader>
                    <CardTitle>Current Deliveries</CardTitle>
                    <CardDescription>Your active orders in progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[450px]">
                      <div className="space-y-4">
                        <OrderCard
                          restaurant="McDonald's"
                          orderTotal="$32.75"
                          distance="0.5"
                          estimatedTime="10-15"
                          status="pickup"
                          earnings="9.25"
                        />
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

