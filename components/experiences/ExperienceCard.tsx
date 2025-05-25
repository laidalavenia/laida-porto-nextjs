"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  role: string;
  duration: string;
  location: string;
  description: string | string[];
  icon: React.ElementType;
  isLeft: boolean;
  logoSrc?: string;
}

export const ExperienceCard = ({
  title,
  role,
  duration,
  location,
  description,
  icon,
  isLeft,
  logoSrc = "",
}: ExperienceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const Icon = icon;

  const bulletPoints = Array.isArray(description) ? description : [description];

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

      {/* Content */}
      <motion.div
        className={`md:col-span-5 ${
          isLeft ? "md:order-first" : "md:order-last"
        }`}
        initial={{ opacity: 0, y: 20, x: isLeft ? -20 : 20 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative p-6 rounded-xl backdrop-blur-md border border-purple-500/30 shadow-lg bg-gradient-to-br from-gray-900/90 to-black/90 group hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-300">
          {/* gradient overlay on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-3 gap-3">
              <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center bg-white">
                {logoSrc ? (
                  <Image
                    src={logoSrc}
                    alt={title}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center text-gray-400 text-xs font-bold">
                    {title.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <h4 className="text-purple-400 font-medium">{role}</h4>
              </div>
            </div>

            <div className="flex flex-col space-y-1 text-gray-300 text-sm mb-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span>{location}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 text-gray-200 list-disc pl-5">
              {bulletPoints.map((point, index) => (
                <li key={index} className="text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
