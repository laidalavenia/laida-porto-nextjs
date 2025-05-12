"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { User, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion
            for web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 rounded-2xl p-1">
                <div className="bg-gray-900 h-full w-full rounded-xl overflow-hidden">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <User size={60} className="text-gray-600" />
                    {/* Uncomment and use your actual image
                    <Image
                      src="/profile.jpg"
                      alt="Your Name"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-gray-800/30 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              <p className="text-gray-300 mb-4">
                Hello! I'm a passionate frontend developer with a keen eye for
                creating beautiful, functional, and user-centered digital
                experiences. With 3+ years of experience in the field, I've
                worked on various projects ranging from small business websites
                to large-scale web applications.
              </p>
              <p className="text-gray-300 mb-6">
                I specialize in JavaScript frameworks like React and Next.js,
                coupled with modern CSS solutions like Tailwind CSS. I'm
                constantly learning and exploring new technologies to stay at
                the forefront of web development.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
