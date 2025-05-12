"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceCard = ({
  title,
  role,
  duration,
  description,
  icon,
  isLeft,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const Icon = icon;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10" ref={cardRef}>
      {/* Timeline middle bar */}
      <div className="hidden md:flex md:col-span-2 justify-center">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
          <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-black border-2 border-purple-500 text-white">
            <Icon size={16} />
          </div>
        </div>
      </div>

      {/* Content - Alternating layout on desktop */}
      <motion.div
        className={`bg-black/30 backdrop-blur-md p-5 rounded-xl border border-gray-800/30 shadow-lg md:col-span-5 ${
          isLeft ? "md:order-first" : "md:order-last"
        }`}
        initial={{ opacity: 0, y: 20, x: isLeft ? -20 : 20 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center mb-2 gap-2">
          <span className="md:hidden flex h-6 w-6 items-center justify-center rounded-full bg-black border border-purple-500 text-white">
            <Icon size={12} />
          </span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <h4 className="text-purple-400 font-medium mb-1">{role}</h4>
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{duration}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </motion.div>

      {/* Empty space for alternating layout */}
      <div
        className={`hidden md:block md:col-span-5 ${
          isLeft ? "md:order-last" : "md:order-first"
        }`}
      ></div>
    </div>
  );
};

const Experiences = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Tech Company XYZ",
      role: "Senior Frontend Developer",
      duration: "Jan 2022 - Present",
      description:
        "Led the development of responsive web applications using React and Next.js. Implemented UI/UX designs with Tailwind CSS and collaborated with cross-functional teams to deliver high-quality solutions.",
      icon: Briefcase,
      isLeft: true,
    },
    {
      title: "Digital Agency ABC",
      role: "Web Developer",
      duration: "Mar 2020 - Dec 2021",
      description:
        "Developed and maintained client websites, created custom themes, and implemented various web animations. Worked closely with designers to ensure pixel-perfect implementations.",
      icon: Briefcase,
      isLeft: false,
    },
    {
      title: "University of Technology",
      role: "Computer Science Degree",
      duration: "2016 - 2020",
      description:
        "Graduated with honors in Computer Science with a focus on web technologies and user interface design. Participated in various hackathons and coding competitions.",
      icon: GraduationCap,
      isLeft: true,
    },
    {
      title: "Web Innovation Awards",
      role: "Best Portfolio Design",
      duration: "2023",
      description:
        "Received recognition for exceptional portfolio design and implementation, showcasing creative use of modern web technologies and attention to user experience.",
      icon: Award,
      isLeft: false,
    },
  ];

  return (
    <section
      id="experiences"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
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
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in the tech industry, highlighting key roles and
            achievements that have shaped my career.
          </p>
        </motion.div>

        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              icon={exp.icon}
              isLeft={exp.isLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
