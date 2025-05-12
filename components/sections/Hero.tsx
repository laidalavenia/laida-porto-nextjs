"use client";

import React, { useEffect, useRef, useState } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/moving-border";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingEffect from "@/components/ui/typing-effect";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
// import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function HeroSection() {
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!profileRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;

      profileRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const roles = [
    "Frontend Developer",
    "Software Engineer",
    "Web Developer",
    "UI/UX Enthusiast",
  ];

  const [showScrollText, setShowScrollText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollText(scrollTop < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <FollowerPointerCard title="Laida Space" className="w-full">
    <div id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WavyBackground className="h-full w-full" waveOpacity={0.4} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow flex items-center pt-34">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-2">
                  <motion.h2
                    className="text-xl md:text-2xl font-medium text-purple-400 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Hello, I'm Laida 👋
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <TypingEffect
                      texts={roles}
                      className="font-fira-code text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                      typingSpeed={80}
                      deletingSpeed={40}
                      delayBetweenTexts={2000}
                    />
                  </motion.div>
                </div>
                <motion.h2
                  className="text-xl md:text-2xl font-medium text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Creating beautiful & performant web experiences
                </motion.h2>
                <motion.p
                  className="text-gray-200 max-w-md mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  I specialize in building responsive and user-friendly
                  interfaces with modern frontend technologies like React,
                  Next.js, and Tailwind CSS.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Button
                    className="group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white flex items-center gap-2 overflow-hidden w-40"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Projects
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>

                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 px-6 py-5"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Download CV <Download size={18} />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Profile photo */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                ref={profileRef}
              >
                <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] -translate-x-4 md:-translate-x-8">
                  <Image
                    src="/assets/images/Laida-removebg-preview.png"
                    alt="Profile photo"
                    fill
                    className="rounded-full object-cover z-10 relative"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse z-20" />
                </div>

                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[28px]">
                    💡
                  </div>

                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[32px]">
                    🚀
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[30px]">
                    👩‍💻
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[28px]">
                    ✨
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {showScrollText && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-gray-300 mb-2">Scroll down to explore</p>
            <motion.div
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
    // </FollowerPointerCard>
  );
}
