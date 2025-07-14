"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Shield } from "lucide-react";

export default function SOSPanel() {
  return (
    <div className="max-w-md mx-auto p-6 border-0 rounded-2xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 mt-10 animate-drawer-in">
      <div className="flex items-center justify-center mb-4">
        <Shield className="w-10 h-10 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-red-600">SOS Emergency</h2>
      <Alert variant="destructive">
        <AlertTitle>Emergency Alert Sent!</AlertTitle>
        <AlertDescription>
          Our support team has been notified and will contact you immediately.<br />
          If you are in danger, call 911 or your local emergency number.
        </AlertDescription>
      </Alert>
      <div className="mt-4 text-sm text-muted-foreground">
        This is a mock panel. In a real app, this would trigger an emergency protocol.
      </div>
    </div>
  );
} 