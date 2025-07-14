'use client'

import React from 'react';
import { useUser, User } from '../hooks/use-user';
import { Button } from './ui/button';
import { UserCircle } from "lucide-react";
import { DrawerClose } from './ui/drawer';

const mockUsers: User[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'customer' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'delivery' },
  { id: '3', name: 'Admin', email: 'admin@example.com', role: 'admin' },
];

export default function Profile() {
  const { user, login, logout } = useUser();

  return (
    <div className="relative max-w-md mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <UserCircle className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">User Profile</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Manage your account and login status.</div>
      </div>
      <div className="p-6 animate-section-fade">
        {user ? (
          <div>
            <div className="mb-2 text-lg font-semibold">Name: {user.name}</div>
            <div className="mb-2">Email: {user.email}</div>
            <div className="mb-2">Role: {user.role}</div>
            <Button className="mt-4 w-full" variant="destructive" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-2 text-center" aria-live="polite">Not logged in.</div>
            <div className="mb-2 text-center">Login as:</div>
            {mockUsers.map((u) => (
              <Button
                key={u.id}
                className="block w-full mb-2 text-base font-semibold"
                onClick={() => login(u)}
                variant="secondary"
              >
                {u.name} ({u.role})
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 