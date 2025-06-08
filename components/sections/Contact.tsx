"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Clipboard,
  Instagram,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const email = "laida.avenia@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      url: "https://www.linkedin.com/in/laidalavenia/",
      color: "text-blue-500 hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github />,
      url: "https://github.com/laidalavenia",
      color: "text-gray-300 hover:text-white",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://www.instagram.com/laidalav_/",
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      name: "Email Me",
      icon: <ExternalLink size={24} />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=laida.avenia@gmail.com",
      color: "text-indigo-400 hover:text-indigo-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black"
      ref={ref}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block">
              Let&apos;s{" "}
              {"Connect".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out through any of the channels
            below.
          </p>
        </motion.div>

        {/* Email Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="relative w-fit mx-auto">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-[2px] rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(79, 70, 229, 0.2)",
                  "0 0 20px rgba(79, 70, 229, 0.4)",
                  "0 0 5px rgba(79, 70, 229, 0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="bg-gray-900 rounded-2xl py-8 px-12 flex flex-col items-center">
                <motion.div
                  className="mb-6 p-4 bg-indigo-600/20 rounded-full"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail size={32} className="text-indigo-400" />
                </motion.div>
                <p className="text-gray-300 mb-4 text-md">Reach me at</p>
                <div className="flex items-center space-x-2">
                  <p className="text-md text-white font-mono">{email}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Copy email address"
                  >
                    <Clipboard size={16} />
                  </motion.button>
                </div>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 text-sm mt-2"
                  >
                    Copied to clipboard!
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-5"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center transition-all"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              title={social.name}
              aria-label={`Visit my ${social.name}`}
            >
              {React.cloneElement(social.icon, {
                className: `${social.color} w-6 h-6 transition-colors`,
              })}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-16 text-sm"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 1 } } : {}}
        >
          Looking forward to connecting with you!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
