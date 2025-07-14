"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { DrawerClose } from "@/components/ui/drawer";

const earningsData = {
  today: 124.5,
  week: 650.75,
  month: 2450.2,
  pending: 200.0,
  lastPayout: "2024-06-01",
};

export default function EarningsPanel() {
  return (
    <div className="relative max-w-md mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <Wallet className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Earnings</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Your delivery earnings summary and payout info.</div>
      </div>
      <div className="p-6 space-y-4 animate-section-fade">
        <Card className="bg-gradient-to-br from-green-100/60 to-background border-0 shadow rounded-xl">
          <CardHeader>
            <CardTitle>Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${earningsData.today.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-100/60 to-background border-0 shadow rounded-xl">
          <CardHeader>
            <CardTitle>This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-semibold">${earningsData.week.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-100/60 to-background border-0 shadow rounded-xl">
          <CardHeader>
            <CardTitle>This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-semibold">${earningsData.month.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-pink-100/60 to-background border-0 shadow rounded-xl">
          <CardHeader>
            <CardTitle>Pending Payout</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg">${earningsData.pending.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">Last payout: {earningsData.lastPayout}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 