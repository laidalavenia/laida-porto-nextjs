import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Briefcase,
  Code,
  Building2,
  CircleUserRound,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  companyName?: string;
  detailImages?: string[];
  detailDescription?: string;
}

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: ProjectCardProps;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project.imageSrc, ...(project.detailImages || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{
        cursor: "default",
        pointerEvents: "auto",
      }}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 relative"
        style={{
          cursor: "default",
          pointerEvents: "auto",
          zIndex: 51,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-500 text-transparent bg-clip-text">
              {project.title}
            </h2>
            <div
              className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                project.isWorkProject
                  ? "bg-blue-900 text-blue-200"
                  : "bg-purple-900 text-purple-200"
              }`}
            >
              {project.isWorkProject ? (
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
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors relative z-10"
            style={{ cursor: "pointer" }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl mb-6">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
                  style={{ cursor: "pointer" }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
                  style={{ cursor: "pointer" }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Company Info */}
          <div className="mb-4">
            {project.isWorkProject && project.companyName ? (
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Building2 size={14} />
                <span>Developed at {project.companyName}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <CircleUserRound size={14} />
                <span>Developed by Laida</span>
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              About This Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.detailDescription || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {!project.isPrivateRepo && project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                style={{ cursor: "pointer" }}
              >
                <Github size={16} />
                <span className="text-sm">View on GitHub</span>
              </Link>
            )}

            {project.liveDemo && (
              <Link
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                style={{ cursor: "pointer" }}
              >
                <ExternalLink size={16} />
                <span className="text-sm">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
