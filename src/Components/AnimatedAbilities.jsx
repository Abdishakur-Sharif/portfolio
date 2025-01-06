import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DURATION = 0.5;
const RESET_DELAY = 1; // Reset duration in seconds

const FlipAccordion = ({ title, description, isHovered }) => {
  const words = title.split(" ");
  const [showFlip, setShowFlip] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setShowFlip(true);
      const timer = setTimeout(() => setShowFlip(false), RESET_DELAY * 600);
      return () => clearTimeout(timer); // Reset immediately if hovered fast
    } else {
      setShowFlip(false);
    }
  }, [isHovered]);

  return (
    <div className="relative block text-[clamp(2rem,5vw,5rem)] font-black uppercase tracking-wide">
      <motion.button className="relative w-full text-left flex flex-col leading-tight">
        <div className="relative flex gap-3 overflow-hidden flex-wrap">
          {words.map((word, wordIndex) => (
            <div className="relative flex" key={wordIndex}>
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    flipped: { y: wordIndex % 2 === 0 ? -10 : 10, opacity: 0 },
                    reset: { y: 0, opacity: 1 },
                  }}
                  animate={showFlip ? "flipped" : "reset"}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </motion.button>

      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 overflow-hidden"
      >
        {isHovered && description}
      </motion.div>
    </div>
  );
};

export default function AbilitiesAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [prevHoveredIndex, setPrevHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setPrevHoveredIndex(hoveredIndex);
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
    setPrevHoveredIndex(null);
  };

  const abilities = [
    {
      id: 1,
      title: "Fullstack Development",
      description:
        "I build modern front-end and back-end applications with efficiency and scalability.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Creating visually appealing and user-friendly designs for seamless experiences.",
    },
    {
      id: 3,
      title: "API Integration",
      description:
        "Connecting apps with third-party and custom APIs for enhanced functionality.",
    },
    {
      id: 4,
      title: "Database Management",
      description:
        "Optimizing data storage and retrieval for high-performance applications.",
    },
  ];

  return (
    <section className="p-6 md:p-8 bg-slate-950 font-nohemi text-white min-h-screen flex flex-col items-center">
      <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold mb-6 text-cyan-500">
        ABILITIES
      </h1>

      <div className="space-y-6 w-full max-w-3xl">
        {abilities.map((ability, index) => (
          <div
            key={ability.id}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
            onClick={() => handleHover(index)} // Mobile friendly interaction
            className="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-100 hover:shadow-lg hover:shadow-cyan-500/20 p-4 rounded-lg"
          >
            <FlipAccordion
              title={ability.title}
              description={ability.description}
              isHovered={hoveredIndex === index || prevHoveredIndex === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
