"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Github, ExternalLink, Lock, Briefcase, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techStack: Array<{ name: string; icon: React.ReactNode }>;
  isWorkProject: boolean;
  githubLink: string;
  isPrivateRepo: boolean;
  liveDemo: string | null;
}

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
}

const TechItem = ({ icon, name }: TechItemProps) => {
  return (
    <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-full">
      <div className="w-4 h-4 flex items-center justify-center">{icon}</div>
      <span className="text-xs text-gray-300">{name}</span>
    </div>
  );
};

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  techStack,
  isWorkProject,
  githubLink,
  isPrivateRepo,
  liveDemo,
}: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <BackgroundGradient containerClassName="h-full">
        <div className="bg-gray-900 p-6 rounded-3xl flex flex-col h-full">
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>

          {/* Project Details */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text truncate mr-2">
                {title}
              </h3>

              {/* Project Type Badge */}
              <div
                className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 flex-shrink-0 ${
                  isWorkProject
                    ? "bg-blue-900 text-blue-200"
                    : "bg-purple-900 text-purple-200"
                }`}
              >
                {isWorkProject ? (
                  <>
                    <Briefcase size={10} />
                    <span>Work</span>
                  </>
                ) : (
                  <>
                    <Code size={10} />
                    <span>Personal</span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-sm flex-grow line-clamp-3">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-xs uppercase text-gray-500 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1">
                {techStack.map((tech, index) => (
                  <TechItem key={index} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
              <div className="flex items-center">
                {isPrivateRepo ? (
                  <div className="flex items-center gap-1 text-gray-400 cursor-not-allowed text-xs">
                    <Lock size={12} />
                    <span>Private</span>
                  </div>
                ) : (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                  >
                    <Github size={12} />
                    <span>GitHub</span>
                  </Link>
                )}
              </div>

              {liveDemo && (
                <Link
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors text-xs"
                >
                  <ExternalLink size={12} />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
};
