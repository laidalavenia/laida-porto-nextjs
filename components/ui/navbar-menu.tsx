"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation transition settings
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon?: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      onMouseEnter={() => setActive(item)}
      className="relative text-white hover:text-purple-400 transition-all px-4 py-2 rounded-full flex items-center gap-2 font-medium"
    >
      {icon}
      {item}
      {active !== null && (
        <>
          {active === item && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-white/10"
              transition={transition}
            />
          )}
        </>
      )}
    </Link>
  );
};

export const NavMenu = ({
  setActive,
  active,
  navItems,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  navItems: { name: string; href: string; icon: React.ReactNode }[];
}) => {
  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="relative backdrop-blur-md rounded-xl px-3 py-1 flex items-center border border-gray-800/30"
    >
      {navItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={item.name}
            icon={item.icon}
            href={item.href}
          />
          {index < navItems.length - 1 && (
            <span className="h-5 w-px bg-gray-700/50"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
