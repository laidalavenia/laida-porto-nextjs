"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  FaReact,
  FaVuejs,
  FaFigma,
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
import { IoLogoJavascript, IoLogoSass } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS featuring a modern design with interactive elements, animations, and responsive layout.",
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
        { icon: <SiVercel className="text-white" />, name: "Vercel" },
      ],
      isWorkProject: false,
      githubLink: "https://github.com/yourusername/portfolio",
      isPrivateRepo: false,
      liveDemo: "https://yourportfolio.com",
      detailImages: [
        "/assets/images/portfolio/portfolio-2.jpg",
        "/assets/images/portfolio/portfolio-3.jpg",
        "/assets/images/portfolio/portfolio-4.jpg",
      ],
      detailDescription:
        "A comprehensive personal portfolio website showcasing my skills, experiences, and projects. Built with modern web technologies including Next.js 14, React 18, and Tailwind CSS. Features include responsive design, dark theme, smooth animations with Framer Motion, interactive components, and optimized performance. The website includes sections for about me, skills showcase, project portfolio with detailed case studies, work experience timeline, and contact information. Deployed on Vercel with automatic CI/CD pipeline and optimized for SEO and accessibility.",
    },
    {
      title: "Ideabox Platform",
      description:
        "An idea crowdsourcing platform for Telkom Indonesia employees. Developed during my internship at Digital Amoeba, this platform allows employees to submit, vote on, and collaborate on innovative ideas.",
      imageSrc: "/assets/images/projects/ideabox.jpg",
      techStack: [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        { icon: <RiNextjsFill className="text-white" />, name: "Next.js" },
        { icon: <IoLogoSass className="text-pink-400" />, name: "SCSS" },
        {
          icon: <FaBootstrap className="text-purple-500" />,
          name: "Bootstrap",
        },
        {
          icon: <SiPostman className="text-orange-500" />,
          name: "API Integration",
        },
        { icon: <SiJira className="text-blue-600" />, name: "Jira" },
      ],
      isWorkProject: true,
      githubLink: "",
      isPrivateRepo: true,
      liveDemo: null,
      companyName: "Digital Amoeba",
      detailImages: [
        "/assets/images/ideabox/ideabox-dashboard.jpg",
        "/assets/images/ideabox/ideabox-submission.jpg",
        "/assets/images/ideabox/ideabox-voting.jpg",
      ],
      detailDescription:
        "A comprehensive idea crowdsourcing platform developed for Telkom Indonesia during my internship at Digital Amoeba. The platform enables employees to submit innovative ideas, participate in collaborative discussions, and vote on solutions to company challenges. Key features include user authentication and role management, idea submission with rich text editor and file attachments, voting and rating system, comment and discussion threads, admin dashboard for idea management, analytics and reporting tools, and responsive design for mobile and desktop. The platform was built using React with Next.js for server-side rendering, styled with SCSS and Bootstrap for responsive design, and integrated with RESTful APIs for backend communication.",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for e-commerce businesses with features like inventory management, sales analytics, order processing, and customer management.",
      imageSrc: "/assets/images/projects/ecommerce-dashboard.jpg",
      techStack: [
        { icon: <FaVuejs className="text-green-400" />, name: "Vue.js" },
        {
          icon: <IoLogoJavascript className="text-yellow-400" />,
          name: "TypeScript",
        },
        { icon: <SiShadcnui className="text-white" />, name: "Vuetify" },
        { icon: <FaReact className="text-blue-400" />, name: "Pinia" },
        { icon: <FaFigma className="text-purple-400" />, name: "Figma" },
        { icon: <SiPostman className="text-orange-500" />, name: "REST API" },
      ],
      isWorkProject: true,
      githubLink: "",
      isPrivateRepo: true,
      liveDemo: null,
      companyName: "Tech Solutions Inc",
      detailImages: [
        "/assets/images/ecommerce/dashboard-overview.jpg",
        "/assets/images/ecommerce/inventory-management.jpg",
        "/assets/images/ecommerce/analytics-charts.jpg",
      ],
      detailDescription:
        "A feature-rich e-commerce admin dashboard built with Vue.js and TypeScript. The dashboard provides comprehensive tools for managing online stores including real-time sales analytics with interactive charts, inventory management with low stock alerts, order processing and fulfillment tracking, customer management and segmentation, product catalog management with bulk operations, financial reporting and revenue tracking, and user role management with permission controls. The interface is built with Vuetify components for consistent Material Design, state management with Pinia, and responsive design for tablet and desktop use.",
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts for locations worldwide. Features include weather maps, hourly and daily forecasts, and location-based services.",
      imageSrc: "/assets/images/projects/weather-app.jpg",
      techStack: [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        {
          icon: <IoLogoJavascript className="text-yellow-400" />,
          name: "JavaScript",
        },
        {
          icon: <SiTailwindcss className="text-sky-400" />,
          name: "Tailwind CSS",
        },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
        { icon: <SiVercel className="text-white" />, name: "Vercel" },
      ],
      isWorkProject: false,
      githubLink: "https://github.com/yourusername/weather-app",
      isPrivateRepo: false,
      liveDemo: "https://weather-app-demo.vercel.app",
      detailImages: [
        "/assets/images/weather/weather-forecast.jpg",
        "/assets/images/weather/weather-map.jpg",
        "/assets/images/weather/weather-mobile.jpg",
      ],
      detailDescription:
        "A modern weather application built with React that provides comprehensive weather information for locations worldwide. Features include current weather conditions with detailed metrics, 7-day weather forecast with hourly breakdowns, interactive weather maps with radar and satellite imagery, location-based weather using geolocation API, search functionality for cities worldwide, weather alerts and notifications, responsive design optimized for mobile and desktop, and integration with OpenWeatherMap API for reliable data. The app uses Tailwind CSS for styling and is deployed on Vercel with automatic deployments from GitHub.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving
            through various projects I&apos;ve developed both professionally and
            personally
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
              companyName={project.companyName}
              detailImages={project.detailImages}
              detailDescription={project.detailDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
