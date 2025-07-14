'use client'
import { Button } from '@/components/ui/button';
import { UserCircle, CreditCard, Star, Gift, BarChart2, Map, MessageCircle, Bell, Globe, Moon, Shield, Settings, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-primary/10 dark:from-zinc-900 dark:via-zinc-950 dark:to-primary/10 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 py-24">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide shadow animate-section-fade">Next-Gen Delivery Platform</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-6 animate-section-fade">
          Deliver. Earn. Thrive.<br />For Everyone, Everywhere.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-muted-foreground mb-10 animate-section-fade">
          Real-time order tracking, smart navigation, instant earnings, and safety features for drivers, bikers, walkers, and businesses. Join the future of delivery—no matter how you move!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-section-fade">
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 py-4 font-bold shadow-xl animate-bounce">Go to Dashboard</Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-bold shadow-xl animate-fade-in">Learn More</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 animate-section-fade">
        <div className="flex flex-col items-center text-center p-6 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl border-0">
          <Map className="w-12 h-12 text-primary mb-4 animate-icon-in" />
          <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
          <p className="text-muted-foreground">Track every order live, optimize your route, and never miss a delivery.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl border-0">
          <Wallet className="w-12 h-12 text-green-600 mb-4 animate-icon-in" />
          <h3 className="text-xl font-bold mb-2">Instant Earnings</h3>
          <p className="text-muted-foreground">See your earnings grow in real time and cash out instantly, anytime.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl border-0">
          <Shield className="w-12 h-12 text-red-500 mb-4 animate-icon-in" />
          <h3 className="text-xl font-bold mb-2">Safety & Support</h3>
          <p className="text-muted-foreground">SOS, live chat, and 24/7 support keep you safe and connected on every trip.</p>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 animate-section-fade">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <UserCircle className="w-10 h-10 text-primary mb-2" />
            <h4 className="font-semibold mb-1">Sign Up</h4>
            <p className="text-muted-foreground text-center">Create an account as a driver, biker, walker, or business partner.</p>
          </div>
          <div className="flex flex-col items-center">
            <Gift className="w-10 h-10 text-pink-500 mb-2" />
            <h4 className="font-semibold mb-1">Get Orders</h4>
            <p className="text-muted-foreground text-center">Receive delivery requests instantly and accept with one tap.</p>
          </div>
          <div className="flex flex-col items-center">
            <BarChart2 className="w-10 h-10 text-blue-600 mb-2" />
            <h4 className="font-semibold mb-1">Earn & Grow</h4>
            <p className="text-muted-foreground text-center">Complete deliveries, earn rewards, and level up with bonuses.</p>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/20 dark:to-zinc-900 text-center animate-section-fade">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to deliver your way?</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Join thousands of drivers, bikers, and walkers earning on their own terms.</p>
        <Link href="/dashboard">
          <Button size="xl" className="text-xl px-10 py-5 font-bold shadow-xl animate-bounce">Get Started</Button>
        </Link>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm animate-section-fade">
        &copy; {new Date().getFullYear()} Delivery Platform. All rights reserved.
      </footer>
    </main>
  );
}

