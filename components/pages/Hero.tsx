"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "@/components/pages/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WavyBackground className="h-full w-full" waveOpacity={0.3} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow flex items-center">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Developer Info */}
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  Frontend Developer
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
                  Creating beautiful & performant web experiences
                </h2>
                <p className="text-gray-400 max-w-md mb-6">
                  I specialize in building responsive and user-friendly
                  interfaces with modern frontend technologies like React,
                  Next.js, and Tailwind CSS.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
                <div className="relative bg-gray-900 border-4 border-gray-700 rounded-full p-1 w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/api/placeholder/400/400"
                      alt="Profile photo"
                    />
                    <AvatarFallback className="bg-gray-800 text-white text-4xl">
                      FD
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
