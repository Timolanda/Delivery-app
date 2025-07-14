'use client'

import React from 'react';
import { Shield } from "lucide-react";
import { DrawerClose } from './ui/drawer';

const mockUsers = [
  { id: 1, name: 'Alice', role: 'customer', email: 'alice@example.com' },
  { id: 2, name: 'Bob', role: 'delivery', email: 'bob@example.com' },
  { id: 3, name: 'Admin', role: 'admin', email: 'admin@example.com' },
];

const mockStats = {
  totalOrders: 120,
  completedOrders: 110,
  activeOrders: 5,
  cancelledOrders: 5,
  totalUsers: 3,
};

export default function AdminDashboard() {
  return (
    <div className="relative max-w-2xl mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <Shield className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Admin Dashboard</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Manage users, orders, and view platform stats.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-primary/10 shadow">
            <div className="font-semibold">Total Orders</div>
            <div className="text-2xl font-bold">{mockStats.totalOrders}</div>
          </div>
          <div className="p-4 rounded-xl bg-green-100/40 shadow">
            <div className="font-semibold">Completed Orders</div>
            <div className="text-2xl font-bold">{mockStats.completedOrders}</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-100/40 shadow">
            <div className="font-semibold">Active Orders</div>
            <div className="text-2xl font-bold">{mockStats.activeOrders}</div>
          </div>
          <div className="p-4 rounded-xl bg-red-100/40 shadow">
            <div className="font-semibold">Cancelled Orders</div>
            <div className="text-2xl font-bold">{mockStats.cancelledOrders}</div>
          </div>
          <div className="p-4 rounded-xl bg-yellow-100/40 col-span-2 shadow">
            <div className="font-semibold">Total Users</div>
            <div className="text-2xl font-bold">{mockStats.totalUsers}</div>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2 mt-6 text-primary">User Management</h3>
        <div className="overflow-x-auto rounded-xl shadow bg-background/60 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/10">
                <th className="p-2 font-semibold">Name</th>
                <th className="p-2 font-semibold">Role</th>
                <th className="p-2 font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map(user => (
                <tr key={user.id} className="even:bg-muted/40">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2 capitalize">{user.role}</td>
                  <td className="p-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-bold mb-2 text-primary">Analytics</h3>
        <div className="text-muted-foreground">Analytics charts and reports coming soon...</div>
      </div>
    </div>
  );
} 