import { useState, useEffect, type ComponentType } from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const [ClerkProviderComp, setClerkProviderComp] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    if (!publishableKey) return;
    import('@clerk/clerk-react').then((mod) => {
      setClerkProviderComp(() => mod.ClerkProvider);
    });
  }, [publishableKey]);

  const body = (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );

  if (!publishableKey) {
    return body;
  }

  if (!ClerkProviderComp) {
    return null;
  }

  const ClerkProvider = ClerkProviderComp;
  return <ClerkProvider publishableKey={publishableKey}>{body}</ClerkProvider>;
}

export const routes: RouteRecord[] = [
  {
    path: '/cheri',
    entry: 'src/cheri/page.tsx',
    lazy: () => import('./cheri/page').then((m) => ({ Component: m.default })),
  },
  {
    path: '/',
    element: <Layout />,
    entry: 'src/App.tsx',
    children: [
      { index: true, entry: 'src/pages/home/page.tsx', lazy: () => import('./pages/home/page').then((m) => ({ Component: m.default })) },
      { path: 'join', entry: 'src/pages/join/page.tsx', lazy: () => import('./pages/join/page').then((m) => ({ Component: m.default })) },
      { path: 'login', entry: 'src/pages/login/page.tsx', lazy: () => import('./pages/login/page').then((m) => ({ Component: m.default })) },
      { path: 'verify', entry: 'src/pages/verify/page.tsx', lazy: () => import('./pages/verify/page').then((m) => ({ Component: m.default })) },
      { path: 'privacy', entry: 'src/pages/privacy/page.tsx', lazy: () => import('./pages/privacy/page').then((m) => ({ Component: m.default })) },
      { path: 'terms', entry: 'src/pages/terms/page.tsx', lazy: () => import('./pages/terms/page').then((m) => ({ Component: m.default })) },
      { path: 'members', entry: 'src/pages/members/page.tsx', lazy: () => import('./pages/members/page').then((m) => ({ Component: m.default })) },
      { path: 'about', entry: 'src/pages/about/page.tsx', lazy: () => import('./pages/about/page').then((m) => ({ Component: m.default })) },
      { path: 'contact', entry: 'src/pages/contact/page.tsx', lazy: () => import('./pages/contact/page').then((m) => ({ Component: m.default })) },
      { path: 'faq', entry: 'src/pages/faq/page.tsx', lazy: () => import('./pages/faq/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/bahamas-key-west', entry: 'src/pages/cruises/bahamas-key-west/page.tsx', lazy: () => import('./pages/cruises/bahamas-key-west/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/eastern-caribbean-bimini', entry: 'src/pages/cruises/eastern-caribbean-bimini/page.tsx', lazy: () => import('./pages/cruises/eastern-caribbean-bimini/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/french-riviera-ibiza', entry: 'src/pages/cruises/french-riviera-ibiza/page.tsx', lazy: () => import('./pages/cruises/french-riviera-ibiza/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/miami-morocco-transatlantic', entry: 'src/pages/cruises/miami-morocco-transatlantic/page.tsx', lazy: () => import('./pages/cruises/miami-morocco-transatlantic/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/alaska-hubbard-glacier', entry: 'src/pages/cruises/alaska-hubbard-glacier/page.tsx', lazy: () => import('./pages/cruises/alaska-hubbard-glacier/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/virgin-voyages', entry: 'src/pages/cruiselines/virgin/virginhome/page.tsx', lazy: () => import('./pages/cruiselines/virgin/virginhome/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/norwegian', entry: 'src/pages/cruiselines/ncl/nclhome/page.tsx', lazy: () => import('./pages/cruiselines/ncl/nclhome/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/msc', entry: 'src/pages/cruiselines/msc/mschome/page.tsx', lazy: () => import('./pages/cruiselines/msc/mschome/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/royal-caribbean', entry: 'src/pages/cruiselines/royal/royalhome/page.tsx', lazy: () => import('./pages/cruiselines/royal/royalhome/page').then((m) => ({ Component: m.default })) },
      { path: 'cruises/carnival', entry: 'src/pages/cruiselines/carnival/carnivalhome/page.tsx', lazy: () => import('./pages/cruiselines/carnival/carnivalhome/page').then((m) => ({ Component: m.default })) },
      { path: 'resorts/sandals', entry: 'src/pages/resorts/sandals/sandalshome/page.tsx', lazy: () => import('./pages/resorts/sandals/sandalshome/page').then((m) => ({ Component: m.default })) },
      { path: 'resorts/beaches', entry: 'src/pages/resorts/beaches/beacheshome/page.tsx', lazy: () => import('./pages/resorts/beaches/beacheshome/page').then((m) => ({ Component: m.default })) },
      { path: 'blog', entry: 'src/pages/blog/index/page.tsx', lazy: () => import('./pages/blog/index/page').then((m) => ({ Component: m.default })) },
      { path: 'blog/:slug', entry: 'src/pages/blog/post/page.tsx', lazy: () => import('./pages/blog/post/page').then((m) => ({ Component: m.default })) },
      { path: 'group/halloween-caribbean-2026', entry: 'src/pages/group/halloween-caribbean-2026/page.tsx', lazy: () => import('./pages/group/halloween-caribbean-2026/page').then((m) => ({ Component: m.default })) },
      { path: 'group/allure-eastern-caribbean-2027', entry: 'src/pages/group/allure-eastern-caribbean-2027/page.tsx', lazy: () => import('./pages/group/allure-eastern-caribbean-2027/page').then((m) => ({ Component: m.default })) },
      { path: 'group/alaska-glacial-fjords-2027', entry: 'src/pages/group/alaska-glacial-fjords-2027/page.tsx', lazy: () => import('./pages/group/alaska-glacial-fjords-2027/page').then((m) => ({ Component: m.default })) },
      { path: 'group/baja-halloween-2027', entry: 'src/pages/group/baja-halloween-2027/page.tsx', lazy: () => import('./pages/group/baja-halloween-2027/page').then((m) => ({ Component: m.default })) },
    ],
  },
];
