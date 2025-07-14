'use client'
import React from 'react';
// @ts-ignore
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Map } from "lucide-react";
import type { LatLngTuple } from 'leaflet';
import { DrawerClose } from './ui/drawer';

const orderLocation: LatLngTuple = [37.7749, -122.4194]; // San Francisco
const deliveryLocation: LatLngTuple = [37.7849, -122.4094]; // Mock delivery location

export default function LiveMap() {
  return (
    <div className="relative max-w-2xl mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <Map className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Live Map Tracking</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Track your delivery in real time.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <div className="h-96 w-full rounded-xl overflow-hidden shadow bg-background/60">
          <MapContainer center={orderLocation} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={orderLocation as LatLngTuple}>
              <Popup>Order Location</Popup>
            </Marker>
            <Marker position={deliveryLocation as LatLngTuple}>
              <Popup>Delivery Location</Popup>
            </Marker>
            <Polyline positions={[orderLocation, deliveryLocation] as LatLngTuple[]} color="blue" />
          </MapContainer>
        </div>
        <div className="text-muted-foreground text-sm mt-2">(Install <code>react-leaflet</code> and <code>leaflet</code> to enable map rendering.)</div>
      </div>
    </div>
  );
} 