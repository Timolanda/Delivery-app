'use client'

import React, { useState } from 'react';
import { toast } from '../hooks/use-toast';
import { MapPin } from "lucide-react";
import { DrawerClose } from './ui/drawer';

export default function Geofencing() {
  const [location, setLocation] = useState('San Francisco');
  const [radius, setRadius] = useState(5); // miles
  const [userLocation, setUserLocation] = useState('San Francisco');
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock: if userLocation matches location, they're inside the geofence
    if (userLocation.trim().toLowerCase() === location.trim().toLowerCase()) {
      setResult(`You are inside the ${radius} mile geofence of ${location}.`);
      toast({
        title: 'Geofence Check',
        description: `You are inside the ${radius} mile geofence of ${location}.`,
      });
    } else {
      setResult(`You are outside the ${radius} mile geofence of ${location}.`);
      toast({
        title: 'Geofence Check',
        description: `You are outside the ${radius} mile geofence of ${location}.`,
      });
    }
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
        <MapPin className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Geofencing</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Set and check your delivery geofence area.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <form onSubmit={handleCheck} className="space-y-3 mb-2 bg-background/60 p-4 rounded-xl shadow">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="geofence-center">Geofence Center:</label>
            <input
              id="geofence-center"
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="border rounded px-2 py-1 w-full bg-white/80 dark:bg-zinc-800/80"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="geofence-radius">Radius (miles):</label>
            <input
              id="geofence-radius"
              type="number"
              value={radius}
              onChange={e => setRadius(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full bg-white/80 dark:bg-zinc-800/80"
              min={1}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="user-location">Your Location:</label>
            <input
              id="user-location"
              type="text"
              value={userLocation}
              onChange={e => setUserLocation(e.target.value)}
              className="border rounded px-2 py-1 w-full bg-white/80 dark:bg-zinc-800/80"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded w-full font-semibold shadow">Check Geofence</button>
        </form>
        {result && <div className="mt-2 p-2 bg-gray-100 dark:bg-zinc-800 border rounded text-center">{result}</div>}
        <div className="text-muted-foreground text-sm mt-2 text-center">(UI only, no real geolocation yet.)</div>
      </div>
    </div>
  );
} 