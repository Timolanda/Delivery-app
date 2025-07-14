"use client"

import OrderCard from "@/components/order-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const mockOrderHistory = [
  {
    restaurant: "Taco Bell",
    orderTotal: "$15.20",
    distance: "2.1",
    estimatedTime: "Delivered",
    status: "delivery" as const,
    earnings: "5.50",
  },
  {
    restaurant: "Starbucks",
    orderTotal: "$8.75",
    distance: "1.0",
    estimatedTime: "Delivered",
    status: "delivery" as const,
    earnings: "3.25",
  },
  {
    restaurant: "Chipotle",
    orderTotal: "$22.40",
    distance: "2.8",
    estimatedTime: "Delivered",
    status: "delivery" as const,
    earnings: "7.00",
  },
];

export default function OrderHistory() {
  return (
    <div className="max-w-md mx-auto p-6 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in">
      <div className="flex items-center justify-center mb-4">
        <Clock className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Order History</h2>
      <div className="space-y-4">
        {mockOrderHistory.map((order, idx) => (
          <OrderCard key={idx} {...order} />
        ))}
      </div>
      {mockOrderHistory.length === 0 && (
        <div className="text-muted-foreground text-center py-4">No past orders found.</div>
      )}
    </div>
  );
} 