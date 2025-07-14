'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import DeliveryDashboard from '@/components/delivery-dashboard';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { UserCircle, CreditCard, Star, Gift, BarChart2, Map, MessageCircle, Bell, Globe, Moon, Shield, Settings, Menu } from 'lucide-react';

const Profile = dynamic(() => import('../../components/profile'), { ssr: false });
const PaymentMethods = dynamic(() => import('../../components/payment-methods'), { ssr: false });
const RatingsReviews = dynamic(() => import('../../components/ratings-reviews'), { ssr: false });
const Promotions = dynamic(() => import('../../components/promotions'), { ssr: false });
const AdminDashboard = dynamic(() => import('../../components/admin-dashboard'), { ssr: false });
const AnalyticsCharts = dynamic(() => import('../../components/analytics-charts'), { ssr: false });
const LiveMap = dynamic(() => import('../../components/live-map'), { ssr: false });
const ChatSupport = dynamic(() => import('../../components/chat-support'), { ssr: false });
const PushNotifications = dynamic(() => import('../../components/push-notifications'), { ssr: false });
const LanguageSwitcher = dynamic(() => import('../../components/language-switcher'), { ssr: false });
const DarkModeToggle = dynamic(() => import('../../components/dark-mode-toggle'), { ssr: false });
const Geofencing = dynamic(() => import('../../components/geofencing'), { ssr: false });
const OrderHistory = dynamic(() => import('../../components/order-history'), { ssr: false });
const EarningsPanel = dynamic(() => import('../../components/earnings-panel'), { ssr: false });
const SOSPanel = dynamic(() => import('../../components/sos-panel'), { ssr: false });

// Map all possible feature panels to a key
const featurePanels = {
  profile: Profile,
  payment: PaymentMethods,
  reviews: RatingsReviews,
  promotions: Promotions,
  admin: AdminDashboard,
  analytics: AnalyticsCharts,
  map: LiveMap,
  chat: ChatSupport,
  notifications: PushNotifications,
  language: LanguageSwitcher,
  darkmode: DarkModeToggle,
  geofencing: Geofencing,
  // Dashboard sidebar/header actions:
  orderHistory: OrderHistory,
  earnings: EarningsPanel,
  ratings: RatingsReviews,
  support: ChatSupport,
  sos: SOSPanel,
};

// Floating sidebar features (global)
const floatingFeatures = [
  { key: 'profile', name: 'Profile', icon: UserCircle },
  { key: 'payment', name: 'Payment', icon: CreditCard },
  { key: 'reviews', name: 'Reviews', icon: Star },
  { key: 'promotions', name: 'Promotions', icon: Gift },
  { key: 'admin', name: 'Admin', icon: Shield },
  { key: 'analytics', name: 'Analytics', icon: BarChart2 },
  { key: 'map', name: 'Map', icon: Map },
  { key: 'chat', name: 'Chat', icon: MessageCircle },
  { key: 'notifications', name: 'Notifications', icon: Bell },
  { key: 'language', name: 'Language', icon: Globe },
  { key: 'darkmode', name: 'Dark Mode', icon: Moon },
  { key: 'geofencing', name: 'Geofencing', icon: Settings },
];

export default function DashboardPage() {
  // featureKey: string | null, e.g. 'profile', 'orderHistory', etc.
  const [openFeature, setOpenFeature] = useState(null as null | keyof typeof featurePanels);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handlers for dashboard sidebar/header actions
  const handleOrderHistory = () => setOpenFeature('orderHistory');
  const handleEarnings = () => setOpenFeature('earnings');
  const handleRatings = () => setOpenFeature('ratings');
  const handleSupport = () => setOpenFeature('support');
  const handleSOS = () => setOpenFeature('sos');

  // Render the correct feature panel
  const FeatureComponent = openFeature ? featurePanels[openFeature] : null;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hamburger for mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setSidebarOpen(true)}>
          <Menu className="w-8 h-8 text-primary" />
        </Button>
      </div>
      {/* Mobile Drawer Sidebar */}
      <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <DrawerContent className="block md:hidden max-w-xs w-full bg-white/90 dark:bg-zinc-900/90 rounded-r-2xl shadow-2xl backdrop-blur-xl border-0 animate-drawer-in overflow-y-auto h-full pt-12">
          <div className="flex flex-col gap-5 p-4">
            {floatingFeatures.map((f) => (
              <Button key={f.key} variant="ghost" size="icon" aria-label={f.name} onClick={() => { setOpenFeature(f.key as keyof typeof featurePanels); setSidebarOpen(false); }} className="hover:bg-primary/20 transition-transform duration-200 focus:scale-110">
                <f.icon className="w-7 h-7 text-primary" />
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
      {/* Floating sidebar for desktop */}
      <div className="hidden md:flex fixed top-1/2 left-6 z-50 -translate-y-1/2 flex-col gap-5 bg-white/60 dark:bg-zinc-900/70 rounded-3xl shadow-2xl p-4 border border-primary/10 backdrop-blur-xl ring-1 ring-black/5">
        {floatingFeatures.map((f) => (
          <Button key={f.key} variant="ghost" size="icon" aria-label={f.name} onClick={() => setOpenFeature(f.key as keyof typeof featurePanels)} className="hover:bg-primary/20 transition-transform duration-200 focus:scale-110">
            <f.icon className="w-7 h-7 text-primary" />
          </Button>
        ))}
      </div>
      {/* Drawer for feature panels (global + dashboard actions) */}
      <Drawer open={!!openFeature} onOpenChange={open => setOpenFeature(open ? openFeature : null)}>
        <DrawerContent className="max-w-lg w-full bg-white/90 dark:bg-zinc-900/90 rounded-t-2xl shadow-2xl backdrop-blur-xl border-0 animate-drawer-in overflow-y-auto max-h-[100dvh]">
          {FeatureComponent && <FeatureComponent />}
        </DrawerContent>
      </Drawer>
      {/* Main dashboard remains as the main view */}
      <div className="md:ml-24">
        <DeliveryDashboard
          onOrderHistory={handleOrderHistory}
          onEarnings={handleEarnings}
          onRatings={handleRatings}
          onSupport={handleSupport}
          onSOS={handleSOS}
        />
      </div>
    </div>
  );
} 