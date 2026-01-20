import NavBar from '@/components/navBar/NavBar';
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

export default function Home() {
  return (
    <>
      <NavBar />
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
