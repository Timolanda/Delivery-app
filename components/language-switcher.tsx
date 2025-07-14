'use client'

import React, { useState } from 'react';
import { Globe } from "lucide-react";
import { DrawerClose } from './ui/drawer';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');
  return (
    <div className="relative max-w-md mx-auto p-0 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in overflow-hidden">
      {/* Close button */}
      <DrawerClose className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 transition" aria-label="Close panel">
        <span className="sr-only">Close</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </DrawerClose>
      {/* Gradient header */}
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-br from-primary/30 to-blue-200 dark:from-primary/40 dark:to-zinc-800 rounded-t-2xl">
        <Globe className="w-12 h-12 text-primary animate-icon-in mb-2" />
        <h2 className="text-3xl font-bold text-primary animate-section-fade">Language Switcher</h2>
        <div className="text-muted-foreground text-center mt-2 animate-section-fade">Choose your preferred language for the app interface.</div>
      </div>
      <div className="p-6 animate-section-fade">
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          className="border rounded px-4 py-2 w-full bg-background/60 text-lg font-semibold shadow"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </div>
  );
} 