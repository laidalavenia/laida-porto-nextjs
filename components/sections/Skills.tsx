"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaFigma,
  FaGithub,
  FaBootstrap,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiPostman,
  SiJira,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5, IoLogoSass } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}

const SkillItem = ({ icon, name }: SkillItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-3">
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const animationDistance = screenWidth > 0 ? screenWidth * 1.5 : 2000;

  const skillsRow1 = [
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <FaVuejs className="text-green-400" />, name: "Vue.js" },
    {
      icon: <TbBrandFramerMotion className="text-purple-400" />,
      name: "Framer Motion",
    },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaFigma className="text-pink-400" />, name: "Figma" },
    {
      icon: <SiTypescript className="text-blue-500" />,
      name: "TypeScript",
    },
  ];

  const skillsRow2 = [
    { icon: <FaGithub className="text-gray-200" />, name: "GitHub" },
    { icon: <SiVercel className="text-white" />, name: "Vercel" },
    { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
    {
      icon: <RiNextjsFill className="text-white" />,
      name: "Next.js",
    },
    {
      icon: <IoLogoJavascript className="text-yellow-400" />,
      name: "Javascript",
    },
    { icon: <IoLogoHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <IoLogoSass className="text-pink-400" />, name: "Sass" },
    { icon: <SiJira className="text-blue-600" />, name: "Jira" },
  ];

  return (
    <section id="skills" className="py-16 relative overflow-hidden w-full">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(15,23,42,1) 0%, rgba(0,0,0,1) 100%)",
            backgroundSize: "100% 100%",
          }}
        >
          {/* glow effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.3), transparent 60%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3), transparent 60%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-4">
        {/* Lamp Effect */}
        <div className="relative mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative z-10">
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Tech Skills
            </span>
          </h2>
          {/* Light beam effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-20 h-20 bg-blue-500 rounded-full filter blur-xl opacity-30"></div>
        </div>

        <motion.div
          className="space-y-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Row 1 */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{
                x: [0, -animationDistance],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // speed  effect
                  ease: "linear",
                },
              }}
            >
              {[...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1].map(
                (skill, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    className="flex-shrink-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-xl backdrop-blur-lg m-2 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <SkillItem icon={skill.icon} name={skill.name} />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{
                x: [-animationDistance, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2].map(
                (skill, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    className="flex-shrink-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl backdrop-blur-lg m-2 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <SkillItem icon={skill.icon} name={skill.name} />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
