import dynamic from 'next/dynamic';
import NavBar from '@/components/navBar/NavBar';
import SocialSidebar from '@/components/socialSidebar/SocialSidebar';
import { Hero, About } from '@/sections';

// Lazy load below-the-fold sections
const Services = dynamic(() => import('@/sections/services/Services').then(mod => ({ default: mod.Services })));
const Destinations = dynamic(() => import('@/sections/destinations/Destinations').then(mod => ({ default: mod.Destinations })));
const ExclusiveEvent = dynamic(() => import('@/sections/exclusiveEvent/ExclusiveEvent').then(mod => ({ default: mod.ExclusiveEvent })));
const Partners = dynamic(() => import('@/sections/partners/Partners').then(mod => ({ default: mod.Partners })));
const DiamondPrivilege = dynamic(() => import('@/sections/diamondPrivilege/DiamondPrivilege').then(mod => ({ default: mod.DiamondPrivilege })));
const Contact = dynamic(() => import('@/sections/contact/Contact').then(mod => ({ default: mod.Contact })));
const Footer = dynamic(() => import('@/sections/footer/Footer').then(mod => ({ default: mod.Footer })));

export const revalidate = 43200; // 12 hours ISR

export default function Home() {
  return (
    <>
      <NavBar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <ExclusiveEvent />
        <Partners />
        <DiamondPrivilege />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
