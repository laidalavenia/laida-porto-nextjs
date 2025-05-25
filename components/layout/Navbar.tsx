"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Menu as MenuIcon,
  CodeXml,
  Brain,
  Mail,
  Briefcase,
  Home,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

      // Update active section based on scroll position
      const sections = ["skills", "experiences", "projects", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + 300;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "Skills", href: "#skills", icon: <Brain size={18} /> },
    {
      name: "Experiences",
      href: "#experiences",
      icon: <Briefcase size={18} />,
    },
    { name: "Projects", href: "#projects", icon: <CodeXml size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 ease-in-out hidden md:block",
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
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              <div
                onMouseLeave={() => setActiveItem(null)}
                className="relative backdrop-blur-md rounded-xl px-3 py-1 flex items-center border border-gray-800/30"
              >
                {navItems.slice(1).map((item, index) => (
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
                    {index < navItems.slice(1).length - 1 && (
                      <span className="h-5 w-px bg-gray-700/50"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Tablet Navigation Links */}
            <div className="lg:hidden md:flex items-center gap-2">
              <div
                onMouseLeave={() => setActiveItem(null)}
                className="relative backdrop-blur-md rounded-xl px-2 py-1 flex items-center border border-gray-800/30"
              >
                {navItems.slice(1).map((item, index) => (
                  <React.Fragment key={item.name}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setActiveItem(item.name)}
                      className="text-[14px] relative text-white hover:text-purple-400 transition-all px-2 py-2 rounded-full flex items-center gap-1 font-medium"
                    >
                      {item.icon}
                      <span className="hidden xl:inline">{item.name}</span>
                      {activeItem !== null && activeItem === item.name && (
                        <motion.div
                          layoutId="active-pill-tablet"
                          className="absolute inset-0 rounded-full bg-white/10"
                          transition={transition}
                        />
                      )}
                    </Link>
                    {index < navItems.slice(1).length - 1 && (
                      <span className="h-5 w-px bg-gray-700/50"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
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

      {/* Mobile Floating Navigation */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
        <TooltipProvider delayDuration={100}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-900/80 backdrop-blur-md rounded-full border border-purple-500/20 p-2 flex justify-around items-center shadow-lg shadow-purple-500/10"
          >
            {navItems.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "p-3 rounded-full flex items-center justify-center transition-all duration-300",
                      activeSection === item.name.toLowerCase()
                        ? "bg-purple-500/20 text-purple-400"
                        : "text-gray-400 hover:text-purple-400"
                    )}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {activeSection === item.name.toLowerCase() ? (
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          {item.icon}
                        </motion.div>
                      ) : (
                        item.icon
                      )}
                    </motion.div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={15}
                  className="bg-gray-800 text-white border-gray-700"
                >
                  {item.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>

      <div className="md:hidden fixed top-0 w-full z-40">
        <div className="bg-gray-900/70 backdrop-blur-md border-b border-purple-500/10 px-4 py-3">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-[18px] font-fira-code font-bold text-xl transition-colors duration-300 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:from-blue-300 hover:via-purple-400 hover:to-blue-300"
              dangerouslySetInnerHTML={{ __html: "[ LaidaSpace ]" }}
            />

            {/* Popup Menu for Mobile */}
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-purple-400"
                onClick={() => setIsSheetOpen(!isSheetOpen)}
              >
                <MenuIcon size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50"
              onClick={() => setIsSheetOpen(false)}
            ></motion.div>

            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div className="bg-gray-900/90 backdrop-blur-lg border border-purple-500/20 rounded-lg w-full max-w-xs shadow-xl shadow-purple-500/20 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSheetOpen(false)}
                  className="absolute top-3 right-3 text-white hover:bg-white/10 hover:text-purple-400 rounded-full h-8 w-8 p-0 flex items-center justify-center"
                >
                  <X size={18} />
                </Button>

                <div className="flex flex-col gap-6 p-6 pt-12">
                  {/* Navigation items */}
                  <div className="border-b border-gray-700/50 pb-5">
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      Navigation
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsSheetOpen(false)}
                          className={cn(
                            "flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                            activeSection === item.name.toLowerCase()
                              ? "bg-purple-500/20 text-purple-400"
                              : "text-gray-300 hover:text-purple-400 hover:bg-white/5"
                          )}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-b border-gray-700/50 pb-5">
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      Connect with me
                    </p>
                    <div className="flex gap-6 justify-center">
                      <Link
                        href="https://github.com/laidalavenia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                      >
                        <Github size={24} />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/laidalavenia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                      >
                        <Linkedin size={24} />
                      </Link>
                      <Link
                        href="https://www.instagram.com/laidalav_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                      >
                        <Instagram size={24} />
                      </Link>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      Themes
                    </p>
                    {/* theme togglers */}
                    <div className="text-gray-400 text-sm text-center italic">
                      themes coming soon
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
