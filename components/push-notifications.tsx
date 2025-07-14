'use client'

import React, { useState } from 'react';
import { Bell } from "lucide-react";
import { DrawerClose } from './ui/drawer';

export default function PushNotifications() {
  const [enabled, setEnabled] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
    setNotification(null);
  };

  const handleSend = () => {
    setNotification('🔔 New order available! Check your dashboard.');
  };

  return (
    <div className="relative max-w-md mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <Bell className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Push Notifications</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Manage and test your delivery notifications.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <input
            type="checkbox"
            checked={enabled}
            onChange={handleToggle}
            id="push-toggle"
            className="accent-primary w-5 h-5 rounded-full border-2 border-primary shadow"
          />
          <label htmlFor="push-toggle" className="font-semibold">Enable Push Notifications (mock)</label>
        </div>
        <button
          className="px-4 py-2 bg-primary text-white rounded shadow w-full font-semibold text-base mb-2 transition hover:bg-primary/90"
          onClick={handleSend}
          disabled={!enabled}
        >
          Send Test Notification
        </button>
        {notification && (
          <div className="mt-2 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-center">
            {notification}
          </div>
        )}
        {!enabled && <div className="text-muted-foreground text-sm text-center mt-4">Notifications are disabled.</div>}
      </div>
    </div>
  );
} 