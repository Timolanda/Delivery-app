'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import { Gift } from "lucide-react";

const availablePromos = [
  { code: 'WELCOME10', description: '10% off your first order' },
  { code: 'FREESHIP', description: 'Free delivery on orders over $20' },
];

export default function Promotions() {
  const [enteredCode, setEnteredCode] = useState('');
  const [applied, setApplied] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const found = availablePromos.find(p => p.code === enteredCode.trim().toUpperCase());
    if (found) {
      setApplied(found.code);
      setError('');
      toast({
        title: 'Promo applied!',
        description: `Promo code ${found.code} applied successfully.`,
      });
    } else {
      setError('Invalid promo code.');
      setApplied(null);
      toast({
        title: 'Invalid promo code',
        description: 'Please check the code and try again.',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in">
      <div className="flex items-center justify-center mb-4">
        <Gift className="w-10 h-10 text-pink-500 animate-icon-in" />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-600 animate-section-fade">Promotions & Discounts</h2>
      <ul className="mb-4 space-y-2 animate-section-fade">
        {availablePromos.map(promo => (
          <li key={promo.code} className="border-b pb-2">
            <div className="font-semibold">{promo.code}</div>
            <div className="text-sm">{promo.description}</div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleApply} className="flex gap-2 mb-2 animate-section-fade">
        <label htmlFor="promo-code" className="sr-only">Promo code</label>
        <input
          id="promo-code"
          type="text"
          placeholder="Enter promo code"
          value={enteredCode}
          onChange={e => setEnteredCode(e.target.value)}
          className="border rounded px-2 py-1 flex-1 bg-background/60"
        />
        <Button type="submit" className="px-4 py-2" variant="secondary">
          Apply
        </Button>
      </form>
      {applied && <div className="text-green-600 animate-section-fade" aria-live="polite">Promo code <b>{applied}</b> applied!</div>}
      {error && <div className="text-red-600 animate-section-fade" aria-live="polite">{error}</div>}
    </div>
  );
} 