"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  Github,
  ExternalLink,
  Lock,
  Briefcase,
  Code,
  Building2,
  CircleUserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techStack: Array<{ name: string; icon: React.ReactNode }>;
  isWorkProject: boolean;
  githubLink: string;
  isPrivateRepo: boolean;
  liveDemo: string | null;
  companyName?: string;
  detailImages?: string[];
  detailDescription?: string;
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
  companyName,
  detailImages,
  detailDescription,
}: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <BackgroundGradient containerClassName="h-full">
          <div className="bg-gray-900 p-6 rounded-3xl flex flex-col h-[520px]">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <Image src={imageSrc} alt={title} fill className="object-cover" />
            </div>

            {/* Project Details */}
            <div className="flex flex-col flex-grow">
              {/* Header - Fixed Height */}
              <div className="h-20 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-500 text-transparent bg-clip-text truncate mr-2">
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

                {/* Company/Development Info */}
                <div className="h-4 flex items-center">
                  {isWorkProject && companyName ? (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Building2 size={10} />
                      <span>Powered by {companyName}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <CircleUserRound size={10} />
                      <span>Developed by Laida</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description - Fixed Height */}
              <div className="h-16 mb-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {truncateText(description, 100)}
                  {description.length > 100 && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-teal-400 hover:text-teal-300 ml-1 transition-colors"
                    >
                      read more
                    </button>
                  )}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="h-20 mb-4">
                <h4 className="text-xs uppercase text-gray-500 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1 overflow-hidden">
                  {techStack.slice(0, 4).map((tech, index) => (
                    <TechItem key={index} icon={tech.icon} name={tech.name} />
                  ))}
                  {techStack.length > 4 && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-xs text-teal-400 hover:text-teal-300 bg-gray-800 px-2 py-1 rounded-full transition-colors"
                    >
                      +{techStack.length - 4} more
                    </button>
                  )}
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

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors text-xs ml-auto"
                >
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        project={{
          title,
          description,
          imageSrc,
          techStack,
          isWorkProject,
          githubLink,
          isPrivateRepo,
          liveDemo,
          companyName,
          detailImages,
          detailDescription,
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
