"use client";

import React, { useState, useEffect } from "react";
// import { Fira_Code } from "next/font/google";

import {
  Github,
  Linkedin,
  Instagram,
  Menu as MenuIcon,
  CodeXml,
  User,
  Mail,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// const firaCode = Fira_Code({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Animation transition for menu items
  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: <User size={18} /> },
    {
      name: "Experiences",
      href: "#experiences",
      icon: <Briefcase size={18} />,
    },
    { name: "Projects", href: "#projects", icon: <CodeXml size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        scrolled ? "top-0 py-2" : "top-2 py-0"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex justify-between items-center",
            scrolled
              ? "bg-gray-900/60 backdrop-blur-md shadow-lg rounded-lg px-4 py-2 border border-purple-500/20"
              : "bg-gray-800/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-purple-500/10"
          )}
        >
          <div className="flex items-center">
            <Link
              href="/"
              className="text-[18px] font-fira-code font-bold text-xl transition-colors duration-300 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:from-blue-300 hover:via-purple-400 hover:to-blue-300"
              dangerouslySetInnerHTML={{ __html: "[ LaidaSpace ]" }}
            />

            {/* <Link
              href="/"
              className={`${firaCode.className} font-bold text-xl transition-colors duration-300 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:from-blue-300 hover:via-purple-400 hover:to-blue-300`}
            >
              Laida Space
            </Link> */}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <div
              onMouseLeave={() => setActiveItem(null)}
              className="relative backdrop-blur-md rounded-xl px-3 py-1 flex items-center border border-gray-800/30"
            >
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveItem(item.name)}
                    className="text-[14px] relative text-white hover:text-purple-400 transition-all px-4 py-2 rounded-full flex items-center gap-2 font-medium"
                  >
                    {item.icon}
                    {item.name}
                    {activeItem !== null && activeItem === item.name && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={transition}
                      />
                    )}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="h-5 w-px bg-gray-700/50"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-purple-400"
                >
                  <MenuIcon size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-900/95 border-gray-800"
              >
                <div className="flex flex-col gap-4 mt-8">
                  <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-2 border border-gray-800/30">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 p-2 text-white hover:bg-white/10 rounded-md transition-colors hover:text-purple-400"
                      >
                        {item.icon} {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-800 my-4 pt-4">
                    <p className="text-sm text-gray-400 mb-3">
                      Connect with me
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/laidalavenia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Github size={22} />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/laidalavenia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Linkedin size={22} />
                      </Link>
                      <Link
                        href="https://www.instagram.com/laidalav_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Instagram size={22} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-3">
              <Link
                href="https://github.com/laidalavenia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <span className="h-4 w-px bg-gray-700/50"></span>
              <Link
                href="https://www.linkedin.com/in/laidalavenia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <span className="h-4 w-px bg-gray-700/50"></span>
              <Link
                href="https://www.instagram.com/laidalav_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
