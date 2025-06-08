// import Image from "next/image";
import Hero from "@/components/sections/Hero";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Experiences from "@/components/sections/Experiences";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
// import WorldMapSection from "@/components/sections/WorldMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <FollowerPointerCard title="Laida Space" className="w-full">
        <Hero />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
        {/* <WorldMapSection /> */}

        <footer className="py-6 bg-black text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Laida Space. All rights reserved.
          </p>
        </footer>
      </FollowerPointerCard>
    </main>
  );
}
