"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { Briefcase, GraduationCap } from "lucide-react";

const Experiences = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "TAN Digital",
      role: "Junior Frontend Engineer",
      duration: "May 2024 - Present",
      location: "BSD, South Tangerang",
      description: [
        "Developed user interfaces using Vue.js and typescript, Vuetify, and implemented state management with Pinia",
        "Migrated the Vuetify framework to ShadCN UI and Tailwind CSS for improved customization and performance",
        "Translated UI designs and wireframes into responsive web pages",
        "Collaborated with backend teams to integrate APIs seamlessly",
        "Conducted functional testing to ensure compliance with requirements and designs",
        "Utilize version control systems such as Git to manage code changes",
      ],
      icon: Briefcase,
      isLeft: true,
      logoSrc: "/assets/images/logo-tan-digital.png",
    },
    {
      title: "Digital Amoeba - PT. Telkom Indonesia",
      role: "Frontend Web Developer Intern",
      duration: "Feb 2023 - Jun 2023",
      location: "Bandung, West Java",
      description: [
        "Developed Digital Amoeba Landing Page using library Framer Motion",
        "Developed Ideabox website as an Idea Crowdsourcing Platform for Idea Innovators for Telkom Employees",
        "Developed the Ideabox website using React.js, Next.js, Sass (SCSS), and React Bootstrap",
        "Integrating API from Backend using REST API to fetch and store data",
        "Implementing UI/UX design wireframes into code",
        "Work closely with UI/UX team, System Analyst, QA, Backend and Product Owner using Agile Scrum Methodology",
        "Ensured code consistency through the use of Version Control System using Gitlab",
      ],
      icon: Briefcase,
      isLeft: false,
      logoSrc: "/assets/images/logo-digital-amoeba.png",
    },
    {
      title: "Software Engineering Laboratory ",
      role: "Assistant Lecturer",
      duration: "Agt 2022 - Jul 2023",
      location: "Jember, East Java",
      description: [
        "Tutoring around 97 Students in System Analysis Design and Object Oriented Design course",
        "Guiding around 120 Students in project and course of Software Development using Agile Scrum Methodology",
        "Conducting practical sessions and providing support to students in understanding software engineering architecture and design principles",
      ],
      icon: Briefcase,
      isLeft: true,
      logoSrc: "/assets/images/logo-ryper-lab.png",
    },
    {
      title: "Jember University",
      role: "Bachelor of Computer Science",
      duration: "2020 - 2024",
      location: "Jember, East Java",
      description: [
        "Graduated with honors (3.82 GPA) in Computer Science with focus on web technologies",
        "Completed a thesis on website optimization using code splitting, tree shaking, minification, and third-party script management",
        "Finalist in the Scientific Writing Contest Contribution of the Young Generation in optimizing Information Technology during the Covid-19 Pandemic",
        "Teaching assistant for System Analysis & Design, Software Development, and Object-Oriented Design in Software Development courses",
      ],
      icon: GraduationCap,
      isLeft: false,
      logoSrc: "/assets/images/logo-unej.png",
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
            A summary of my journey in the tech industry, showcasing the roles
            and achievements that have shaped my career
          </p>
        </motion.div>

        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              role={exp.role}
              duration={exp.duration}
              location={exp.location}
              description={exp.description}
              icon={exp.icon}
              isLeft={exp.isLeft}
              logoSrc={exp.logoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
