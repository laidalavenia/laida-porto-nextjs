"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experiences = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Google",
      role: "Senior Frontend Developer",
      duration: "Jan 2022 - Present",
      description: [
        "Led development of responsive web applications using React and Next.js, improving user engagement by 37%",
        "Implemented advanced UI/UX designs with Tailwind CSS, resulting in 25% reduction in bounce rates",
        "Collaborated with cross-functional teams to deliver high-quality solutions, meeting 100% of project deadlines",
        "Optimized application performance, reducing load time by 40% and increasing conversion rates",
      ],
      icon: Briefcase,
      isLeft: true,
      logoSrc: "/assets/images/logo_tan_digital-color.png", 
      hasWhiteLogoBg: true,
    },
    {
      title: "Meta",
      role: "Web Developer",
      duration: "Mar 2020 - Dec 2021",
      description: [
        "Developed and maintained client websites with 99.9% uptime, serving over 1M monthly users",
        "Created custom themes and implemented animations that increased user engagement by 28%",
        "Collaborated with designers to ensure pixel-perfect implementations across all devices",
        "Implemented responsive designs that improved mobile conversion rates by 45%",
      ],
      icon: Briefcase,
      isLeft: false,
      logoSrc: "/api/placeholder/40/40", // Use Meta logo or placeholder
    },
    {
      title: "MIT",
      role: "Computer Science Degree",
      duration: "2016 - 2020",
      description: [
        "Graduated with honors (3.92 GPA) in Computer Science with focus on web technologies",
        "Completed capstone project developing a full-stack application with 10,000+ users",
        "Participated in 12+ hackathons, winning 'Best Technical Innovation' award twice",
        "Served as teaching assistant for Advanced Web Development course for 3 semesters",
      ],
      icon: GraduationCap,
      isLeft: true,
      logoSrc: "/api/placeholder/40/40", // Use MIT logo or placeholder
    },
    {
      title: "Adobe",
      role: "Best Portfolio Design Award",
      duration: "2023",
      description: [
        "Received recognition for exceptional portfolio design from panel of industry experts",
        "Implemented innovative UI techniques resulting in 93/100 user experience score",
        "Featured in Adobe's annual showcase of outstanding web development projects",
        "Design approach has been adopted as case study material for UX design courses",
      ],
      icon: Award,
      isLeft: false,
      logoSrc: "/api/placeholder/40/40", // Use Adobe logo or placeholder
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
              logoSrc={exp.logoSrc}
              hasWhiteLogoBg={exp.hasWhiteLogoBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
