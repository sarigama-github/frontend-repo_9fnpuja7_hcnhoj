import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0d] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <TechStack />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
