"use client";

import React from "react";
import { Github, Linkedin, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-xl">
            DevPortfolio
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="https://github.com/laidalavenia"
                  className="flex items-center gap-2 p-2"
                >
                  <Github size={20} /> GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/laidalavenia/"
                  className="flex items-center gap-2 p-2"
                >
                  <Linkedin size={20} /> LinkedIn
                </Link>
                <Link
                  href="https://www.instagram.com/laidalav_/"
                  className="flex items-center gap-2 p-2"
                >
                  <Instagram size={20} /> Instagram
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://github.com/laidalavenia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/laidalavenia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/laidalav_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
