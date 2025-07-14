'use client'

import React, { useState } from 'react';
import { useUser } from '../hooks/use-user';
import { MessageCircle } from "lucide-react";
import { DrawerClose } from "@/components/ui/drawer";

export default function ChatSupport() {
  const { user } = useUser();
  const [messages, setMessages] = useState([
    { from: 'support', text: 'Hello! How can we help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user) return;
    setMessages([
      ...messages,
      { from: user.name, text: input },
      { from: 'support', text: 'Thank you for your message. We will get back to you shortly.' },
    ]);
    setInput('');
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
        <MessageCircle className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Chat Support</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Get help and support from our team.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <div className="h-48 overflow-y-auto border rounded mb-2 p-2 bg-background/60 shadow-inner">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.from === 'support' ? 'text-blue-700' : 'text-green-700'}>
              <b>{msg.from}:</b> {msg.text}
            </div>
          ))}
        </div>
        {user ? (
          <form onSubmit={handleSend} className="flex gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="border rounded px-2 py-1 flex-1 bg-background/60"
              placeholder="Type your message..."
            />
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded shadow">Send</button>
          </form>
        ) : (
          <div className="text-sm text-muted-foreground text-center mt-2">Log in to use chat support.</div>
        )}
      </div>
    </div>
  );
} 