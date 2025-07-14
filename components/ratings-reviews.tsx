'use client'

import React, { useState } from 'react';
import { useUser } from '../hooks/use-user';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import { Star } from "lucide-react";
import { DrawerClose } from "@/components/ui/drawer";

const initialReviews = [
  { id: 1, name: 'Alice', rating: 5, comment: 'Great delivery, fast and friendly!' },
  { id: 2, name: 'Bob', rating: 4, comment: 'Order was on time, thanks!' },
];

export default function RatingsReviews() {
  const { user } = useUser();
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setReviews([
      { id: Date.now(), name: user.name, rating, comment },
      ...reviews,
    ]);
    setRating(5);
    setComment('');
    toast({
      title: 'Review submitted!',
      description: 'Thank you for your feedback.',
    });
  };

  return (
    <div className="relative max-w-md mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-yellow-100/60 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-yellow-100/60 to-yellow-200/60 dark:from-yellow-400/20 dark:to-zinc-800 rounded-t-2xl">
        <Star className="w-12 h-12 text-yellow-500 animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-yellow-600 animate-section-fade">Ratings & Reviews</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">See what customers are saying and leave your feedback.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <ul className="mb-6 space-y-2 animate-section-fade">
          {reviews.length === 0 ? (
            <li className="text-muted-foreground text-center py-4" aria-live="polite">No reviews yet. Be the first to leave feedback!</li>
          ) : (
            reviews.map(r => (
              <li key={r.id} className="border-b pb-2">
                <div className="font-semibold">{r.name}</div>
                <div className="text-yellow-500 text-lg">{Array(r.rating).fill('★').join('')}{Array(5 - r.rating).fill('☆').join('')}</div>
                <div className="text-sm">{r.comment}</div>
              </li>
            ))
          )}
        </ul>
        {user ? (
          <form onSubmit={handleSubmit} className="space-y-3 bg-background/60 p-4 rounded-xl shadow animate-section-fade">
            <div>
              <label className="block mb-1 font-semibold" htmlFor="review-rating">Your Rating:</label>
              <select id="review-rating" value={rating} onChange={e => setRating(Number(e.target.value))} className="border rounded px-2 py-1 w-full">
                {[5,4,3,2,1].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="review-comment">Your Review:</label>
              <textarea id="review-comment" value={comment} onChange={e => setComment(e.target.value)} className="border rounded px-2 py-1 w-full" rows={2} required />
            </div>
            <Button type="submit" className="px-4 py-2 w-full" variant="secondary">Submit Review</Button>
          </form>
        ) : (
          <div className="text-sm text-muted-foreground text-center animate-section-fade" aria-live="polite">Log in to leave a review.</div>
        )}
      </div>
    </div>
  );
} 