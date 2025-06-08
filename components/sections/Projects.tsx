"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FaReact, FaVuejs, FaBootstrap, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiShadcnui,
  SiVercel,
  SiPostman,
  SiNuxtdotjs,
  SiChakraui,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A personal portfolio website built with Next.js and Tailwind CSS featuring a modern design with interactive elements, animations, and responsive layout.",
    //   imageSrc: "/assets/images/sample-image.jpg",
    //   techStack: [
    //     { icon: <FaReact className="text-blue-400" />, name: "React" },
    //     { icon: <RiNextjsFill className="text-white" />, name: "NextJS" },
    //     { icon: <SiShadcnui className="text-white" />, name: "Shadcn" },
    //     {
    //       icon: <SiTailwindcss className="text-sky-400" />,
    //       name: "Tailwind CSS",
    //     },
    //     {
    //       icon: <TbBrandFramerMotion className="text-purple-400" />,
    //       name: "Framer Motion",
    //     },
    //     { icon: <SiVercel className="text-white" />, name: "Vercel" },
    //   ],
    //   isWorkProject: false,
    //   githubLink: "https://github.com/laidalavenia/laida-porto-nextjs",
    //   isPrivateRepo: false,
    //   liveDemo: "https://yourportfolio.com",
    //   detailImages: [
    //     "/assets/images/portfolio/portfolio-2.jpg",
    //     "/assets/images/portfolio/portfolio-3.jpg",
    //     "/assets/images/portfolio/portfolio-4.jpg",
    //   ],
    //   detailDescription:
    //     "A comprehensive personal portfolio website showcasing my skills, experiences, and projects. Built with modern web technologies including Next.js 15, React 19, ShadCN UI Component and Tailwind CSS. Features include responsive design, dark theme, smooth animations with Framer Motion, interactive components, and optimized performance. The website includes sections for about me, skills showcase, project portfolio with detailed case studies, work experience timeline, and contact information. Deployed on Vercel with automatic CI/CD pipeline.",
    // },
    {
      title: "Oneflux Project",
      description:
        "OneFlux is an integrated digital platform by Mitratel (PT Dayamitra Telekomunikasi Tbk) designed to efficiently manage business relationships with customers. It supports communication, marketing, and faster decision-making at the corporate level. The platform includes a Customer Portal for self-service access to services and an NPS Dashboard to monitor customer satisfaction and loyalty.",
      imageSrc: "/assets/images/projects/Oneflux/Oneflux Project.png",
      techStack: [
        { icon: <FaVuejs className="text-green-400" />, name: "Vue.js" },
        { icon: <SiNuxtdotjs className="text-green-400" />, name: "Nuxt.js" },
        { icon: <SiShadcnui className="text-white" />, name: "Shadcn" },
        {
          icon: <SiTailwindcss className="text-sky-400" />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiTypescript className="text-blue-500" />,
          name: "TypeScript",
        },
        {
          icon: <FaPython className="text-yellow-400" />,
          name: "Python",
        },
      ],
      isWorkProject: true,
      isPrivateRepo: true,
      githubLink: "",
      liveDemo: null,
      companyName: "PT. Teknologic Aksara Nusantara",
      detailImages: [
        "/assets/images/projects/Oneflux/Oneflux Project.png",
        "/assets/images/projects/Oneflux/CP-Admin MSA.png",
        "/assets/images/projects/Oneflux/CP-Maintenance Order.png",
        "/assets/images/projects/Oneflux/NPS-Detail VOC.png",
        "/assets/images/projects/Oneflux/NPS-Admin MSA.png",
      ],
      detailDescription:
        "OneFlux is an integrated digital platform by Mitratel (PT Dayamitra Telekomunikasi Tbk) designed to efficiently manage business relationships with customers. It supports communication, marketing, and faster decision-making at the corporate level. The platform includes a Customer Portal for self-service access to services and an NPS Dashboard to monitor customer satisfaction and loyalty.",
    },
    {
      title: "Ideabox Platform",
      description:
        "Ideabox website is an idea crowdsourcing platform for Telkom employees to collaborate,accelerate, and developed ideas. Developed with Next JS & React Bootstrap component, this platform allows employees to submit, join, and collaborate on innovative ideas.",
      imageSrc: "/assets/images/projects/Ideabox/IB-Landing Page.png",
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
      ],
      isWorkProject: true,
      githubLink: "",
      isPrivateRepo: true,
      liveDemo: null,
      companyName: "Digital Amoeba",
      detailImages: [
        "/assets/images/projects/Ideabox/IB-Landing Page.png",
        "/assets/images/projects/Ideabox/IB-Login.png",
        "/assets/images/projects/Ideabox/IB-Homepage.png",
        "/assets/images/projects/Ideabox/IB-MyIdea2.png",
        "/assets/images/projects/Ideabox/IB-EmailVerification.png",
      ],
      detailDescription:
        "A comprehensive idea crowdsourcing platform developed for Telkom Indonesia during my internship at Digital Amoeba. The platform enables employees to submit innovative ideas, participate in collaborative discussions, and vote on solutions to company challenges. Key features include user authentication and role management, idea submission with rich text editor and file attachments, voting and rating system, comment and discussion threads, admin dashboard for idea management, analytics and reporting tools, and responsive design for mobile and desktop. The platform was built using React with Next.js for server-side rendering, styled with SCSS and Bootstrap for responsive design, and integrated with RESTful APIs for backend communication.",
    },
    {
      title: "Landing Page Docs Digital Amoeba",
      description:
        "Landing Page Docs Digital Amoeba is a web-based design system documentation presented as a landing page to support visual consistency within the Digital Amoeba ",
      imageSrc: "/assets/images/projects/LP-Amoeba/AMA-LogoSection.png",
      techStack: [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        { icon: <RiNextjsFill className="text-white" />, name: "Next.js" },
        { icon: <IoLogoSass className="text-pink-400" />, name: "SCSS" },
        {
          icon: <FaBootstrap className="text-purple-500" />,
          name: "Bootstrap",
        },
        {
          icon: <TbBrandFramerMotion className="text-purple-400" />,
          name: "Framer Motion",
        },
        {
          icon: <SiPostman className="text-orange-500" />,
          name: "API Integration",
        },
      ],
      isWorkProject: true,
      githubLink: "",
      isPrivateRepo: true,
      liveDemo: null,
      companyName: "Digital Amoeba",
      detailImages: [
        "/assets/images/projects/LP-Amoeba/AMA-LogoSection.png",
        "/assets/images/projects/LP-Amoeba/AMA-Values1.png",
        "/assets/images/projects/LP-Amoeba/AMA-Values2.png",
      ],
      detailDescription:
        "Landing Page Docs Digital Amoeba is a web-based design system documentation presented as a landing page to support visual consistency within the Digital Amoeba. It showcases a structured collection of design assets, including color palettes, UI components, typography, and layout guidelines. Built as an accessible reference hub, this site helps design and development teams maintain a cohesive user interface while aligning with the brand identity and design principles of Digital Amoeba. I contributed to the creation of the Logo & Values section, helping define and visually represent the core identity and principles of the program",
    },
    {
      title: "Wedding Invitation Website",
      description:
        "The wedding invitation website is an online platform designed to celebrate and share the joy of a wedding.",
      imageSrc: "/assets/images/projects/Wedding-Invitation/WI-1.png",
      techStack: [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        {
          icon: <IoLogoJavascript className="text-yellow-400" />,
          name: "Javascript",
        },
        {
          icon: <SiChakraui className="text-teal-400" />,
          name: "Chakra UI",
        },
        { icon: <SiVercel className="text-white" />, name: "Vercel" },
      ],
      isWorkProject: false,
      githubLink: "https://github.com/laidalavenia/wedding-invitato",
      isPrivateRepo: false,
      liveDemo: "https://wedding-invitato.vercel.app/",
      detailImages: [
        "/assets/images/projects/Wedding-Invitation/WI-1.png",
        "/assets/images/projects/Wedding-Invitation/WI-2.png",
        "/assets/images/projects/Wedding-Invitation/WI-3.png",
        "/assets/images/projects/Wedding-Invitation/WI-4.png",
        "/assets/images/projects/Wedding-Invitation/WI-5.png",
      ],
      detailDescription:
        "The wedding invitation website is an online platform designed to celebrate and share the joy of a wedding. It features the wedding date, a gallery showcasing memorable moments of the couple, background music, and an option to send thoughtful gifts. This project was built using React.js and Chakra UI, and is fully responsive for tablet and mobile views, ensuring a seamless and enjoyable experience across all devices.",
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
