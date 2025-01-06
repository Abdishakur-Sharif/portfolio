"use client";
import { useMediaQuery } from "../hooks/use-media-query";
import { MoveUpRight } from "lucide-react";
import React, { useState, useRef, useCallback, useEffect } from "react";

const projects = [
  {
    id: 1,
    url: "https://afya-mis-project.vercel.app/",
    title: "Afya MIS",
  },
  {
    id: 2,
    url: "https://inventa-project.vercel.app/",
    title: "Inventa",
  },
  {
    id: 3,
    url: "https://project-petpal.vercel.app/",
    title: "PetPal",
  },
  {
    id: 4,
    url: "https://abdishakur-sharif.github.io/Travel-and-Tour-project/",
    title: "Travel and Tour",
  },
];

const LinkReveal = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [activeProject, setActiveProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (isDesktop) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isDesktop, handleMouseMove]);

  const handleProjectHover = useCallback((project) => {
    setActiveProject(project);
    setOpacity(1);
    setScale(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    timeoutRef.current = setTimeout(() => setActiveProject(null), 300);
  }, []);

  return (
    <div
      className="relative w-full min-h-fit dark:bg-gradient-to-b from-black to-gray-950 bg-cyan-100 rounded-md border font-nohemi"
      onMouseLeave={handleMouseLeave}
    >
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group p-4 relative sm:flex items-center justify-between cursor-pointer transition-all duration-300 rounded-lg mb-8"
          onMouseEnter={() => handleProjectHover(project)}
        >
          {/* Project Title */}
          <h2
            className={`uppercase font-semibold text-xl md:text-5xl sm:text-2xl leading-[100%] transition-all duration-300 ${
              activeProject?.id === project.id
                ? "mix-blend-difference z-20 text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {project.title}
          </h2>

          {/* Button with Arrow */}
          <button
            className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
              activeProject?.id === project.id
                ? "mix-blend-difference z-30 bg-white text-black"
                : "bg-transparent text-gray-700 dark:text-gray-300"
            }`}
          >
            <MoveUpRight className="w-8 h-8" />
          </button>

          {/* Bottom Border Animation */}
          <div
            className={`h-[2px] bg-black dark:bg-white absolute bottom-0 left-0 transition-all duration-300 ${
              activeProject?.id === project.id ? "w-full" : "w-0"
            }`}
          />
        </a>
      ))}

      {/* Homepage Live Preview on Hover */}
      {isDesktop && activeProject && (
        <iframe
          src={activeProject.url}
          title={activeProject.title}
          className="fixed z-10 pointer-events-none bg-white dark:bg-gray-950 shadow-lg rounded-lg"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            width: "350px",
            height: "500px",
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
            border: "none",
          }}
        />
      )}
    </div>
  );
};

export default LinkReveal;
