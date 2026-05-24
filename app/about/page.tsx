"use client";

import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Footer from "../../components/Footer";
import SectionWrapper from "../../components/SectionWrapper";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100 font-sans flex flex-col justify-between">
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
