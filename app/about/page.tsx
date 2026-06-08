"use client";

import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Footer from "../../components/Footer";
import SectionWrapper from "../../components/SectionWrapper";

export default function AboutPage() {
  return (
    <div className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800 font-sans flex flex-col justify-between transition-colors">
      <Navbar />
      
      <main className="flex-grow">
        <SectionWrapper className="py-12 md:py-20">
          <About />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
