"use client";

import { TextRevealByWord } from "../Components/TextRevealByWordProps";
import { motion } from "framer-motion";
import { IconCloud } from "../Components/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "postman",
  "figma",
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-8 relative">
      <div className="max-w-7xl w-full flex flex-col items-center gap-12">
        {/* Heading */}

        {/* Cloud and Photo Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Photo */}
          <motion.div
            className="relative w-72 md:w-80 lg:w-96 flex justify-end md:justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="../images/shakur.JPG"
              alt="Abdishakur Sharif"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Cloud */}
          <motion.div
            className="w-full md:w-1/2 flex justify-start md:justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-80 md:w-full">
              <IconCloud iconSlugs={slugs} />
            </div>
          </motion.div>
        </div>

        <motion.h1
          className="text-4xl font-nohemi md:text-5xl font-bold text-white text-center leading-snug"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Abdishakur is a{" "}
          <span className="text-blue-500">Full-Stack Developer</span>
        </motion.h1>

        {/* Subheading Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TextRevealByWord
            text="WHO BUILDS WEBSITES THAT DRIVE BUSINESS GROWTH AND ACHIEVE RESULTS."
            className="text-center font-nohemi"
            size="text-4xl md:text-6xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
