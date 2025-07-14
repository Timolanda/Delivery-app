'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { BarChart2 } from "lucide-react";
import { DrawerClose } from "@/components/ui/drawer";

const ordersData = [
  { date: 'Mon', orders: 10 },
  { date: 'Tue', orders: 15 },
  { date: 'Wed', orders: 12 },
  { date: 'Thu', orders: 18 },
  { date: 'Fri', orders: 20 },
  { date: 'Sat', orders: 25 },
  { date: 'Sun', orders: 22 },
];

const earningsData = [
  { date: 'Mon', earnings: 120 },
  { date: 'Tue', earnings: 150 },
  { date: 'Wed', earnings: 130 },
  { date: 'Thu', earnings: 180 },
  { date: 'Fri', earnings: 200 },
  { date: 'Sat', earnings: 250 },
  { date: 'Sun', earnings: 220 },
];

export default function AnalyticsCharts() {
  return (
    <div className="relative max-w-2xl mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <BarChart2 className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Analytics</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Your delivery analytics and trends.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <div className="mb-8 bg-background/60 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2">Orders This Week</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={ordersData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-background/60 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2">Earnings This Week</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={earningsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 