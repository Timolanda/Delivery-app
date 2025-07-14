'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { DrawerClose } from './ui/drawer';
import { CreditCard } from 'lucide-react';

const paymentOptions = [
  { id: 'card', label: 'Credit/Debit Card' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'applepay', label: 'Apple Pay' },
  { id: 'googlepay', label: 'Google Pay' },
  { id: 'cod', label: 'Cash on Delivery' },
];

export default function PaymentMethods() {
  const [selected, setSelected] = useState('card');

  return (
    <div className="relative max-w-md mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <CreditCard className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Payment Methods</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Choose your preferred payment option.</div>
      </div>
      <div className="p-6 space-y-4 animate-section-fade">
        <Card className="bg-gradient-to-br from-blue-100/60 to-background border-0 shadow rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg">Available Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {paymentOptions.map(option => (
                <li key={option.id}>
                  <label className="flex items-center gap-3 cursor-pointer text-base font-medium">
                    <input
                      type="radio"
                      name="payment"
                      value={option.id}
                      checked={selected === option.id}
                      onChange={() => setSelected(option.id)}
                      className="accent-primary w-5 h-5 transition-transform focus:scale-110"
                      aria-checked={selected === option.id}
                    />
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full" disabled>
              Continue (Not Implemented)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 