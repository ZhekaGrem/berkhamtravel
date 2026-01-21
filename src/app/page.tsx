import NavBar from '@/components/navBar/NavBar';
import SocialSidebar from '@/components/socialSidebar/SocialSidebar';
import {
  Hero,
  About,
  Destinations,
  Services,
  ExclusiveEvent,
  Partners,
  Contact,
  Footer
} from '@/sections';

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
        <Contact />
        <Footer />
      </main>
    </>
  );
}
