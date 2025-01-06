"use client";
import React from "react";
import ScrollBaseAnimation from "../Components/TextMarquee";
import ImageReveal2 from "../Components/LinkReveal";

const ProjectShowcase = () => {
  return (
    <section className="w-full py-16 px-4 md:px-16 bg-slate-950 dark:bg-gray-900">
      {/* Marquee Heading */}
      <div className="mb-12">
        <ScrollBaseAnimation
          baseVelocity={-3}
          scrollDependent
          delay={500}
          clasname="font-bold uppercase text-cyan-500 dark:text-gray-200"
        >
          Selected Projects
        </ScrollBaseAnimation>
      </div>

      {/* Interactive Project Showcase */}
      <div className="w-full max-w-6xl mx-auto">
        <ImageReveal2 />
      </div>
    </section>
  );
};

export default ProjectShowcase;
