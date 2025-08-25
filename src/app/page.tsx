'use client';

import HomePage from '@/components/HomePage';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main className="scroll-smooth">

      <HomePage />
      <Work />
      <Experience />
      <Skills />
      <About />

      
      <Contact />
    </main>
  );
}
