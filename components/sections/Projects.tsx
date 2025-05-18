"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Github, ExternalLink, Lock, Briefcase, Code } from "lucide-react";
import Image from "next/image";
import { ProjectCard } from "@/components/projects/ProjectCard";
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
  SiShadcnui,
  SiVercel,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5, IoLogoSass } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS featuring a modern design with interactive elements, animations, and responsive layout. Showcases my skills, experiences, and projects in an elegant manner.",
      imageSrc: "/assets/images/sample-image.jpg",
      techStack: [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        { icon: <RiNextjsFill className="text-white" />, name: "NextJS" },
        { icon: <SiShadcnui className="text-white" />, name: "Shadcn" },
        {
          icon: <SiTailwindcss className="text-sky-400" />,
          name: "Tailwind CSS",
        },
        {
          icon: <TbBrandFramerMotion className="text-purple-400" />,
          name: "Framer Motion",
        },
      ],
      // techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      isWorkProject: false,
      githubLink: "https://github.com/yourusername/portfolio",
      isPrivateRepo: false,
      liveDemo: "https://yourportfolio.com",
    },
    {
      title: "Ideabox Platform",
      description:
        "An idea crowdsourcing platform for Telkom Indonesia employees. Developed during my internship at Digital Amoeba, this platform allows employees to submit, vote on, and collaborate on innovative ideas to solve company challenges.",
      imageSrc: "/assets/images/projects/ideabox.jpg",
      techStack: ["React", "Next.js", "SCSS", "Bootstrap"],
      isWorkProject: true,
      githubLink: "",
      isPrivateRepo: true,
      liveDemo: null,
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for e-commerce businesses with features like inventory management, sales analytics, order processing, and customer management. Built with Vue.js and integrated with RESTful APIs.",
      imageSrc: "/assets/images/projects/ecommerce-dashboard.jpg",
      techStack: ["Vue.js", "TypeScript", "Vuetify", "Pinia"],
      isWorkProject: true,
      githubLink: "",
      isPrivateRepo: true,
      liveDemo: null,
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts for locations worldwide. Features include weather maps, hourly and daily forecasts, and location-based services using the OpenWeatherMap API.",
      imageSrc: "/assets/images/projects/weather-app.jpg",
      techStack: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      isWorkProject: false,
      githubLink: "https://github.com/yourusername/weather-app",
      isPrivateRepo: false,
      liveDemo: "https://weather-app-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving
            through various projects I've developed both professionally and
            personally
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              techStack={project.techStack}
              isWorkProject={project.isWorkProject}
              githubLink={project.githubLink}
              isPrivateRepo={project.isPrivateRepo}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
