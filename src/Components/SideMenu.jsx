import { motion } from "framer-motion";
import { useState } from "react";

// Side Menu Button Component
export const SideMenuBtn = ({ onClick, crossed }) => {
  return (
    <button
      aria-expanded={crossed}
      onClick={onClick}
      className="flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
    >
      <motion.div
        style={{
          width: "20px",
          borderTop: "2px solid var(--neutral-500)",
          transformOrigin: "center",
        }}
        initial={{ translateY: "-3px" }}
        animate={
          crossed
            ? { rotate: "45deg", translateY: "1px" }
            : { translateY: "-3px", rotate: "0deg" }
        }
        transition={{ bounce: 0, duration: 0.2 }}
      />
      <motion.div
        style={{
          width: "20px",
          borderTop: "2px solid var(--neutral-500)",
          transformOrigin: "center",
        }}
        initial={{ translateY: "3px" }}
        animate={
          crossed
            ? { rotate: "-45deg", translateY: "-1px" }
            : { translateY: "3px", rotate: "0deg" }
        }
        transition={{ bounce: 0, duration: 0.2 }}
      />
    </button>
  );
};

// Side Menu Component
export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* SideMenuBtn */}
      <div className="fixed top-6 right-6 z-50">
        <SideMenuBtn onClick={toggleMenu} crossed={isOpen} />
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu} // Close menu when background clicked
          className="fixed inset-0 bg-black z-40"
        />
      )}

      {/* Side Menu */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0.1, x: "100%", y: "100%" }}
          animate={{ scale: 1, x: "0%", y: "0%" }}
          exit={{ scale: 0.1, x: "100%", y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-6 right-6 h-3/4 w-1/2 bg-black text-white rounded-lg shadow-lg z-50"
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>

          <div className="flex flex-col items-start p-6 space-y-6">
            <h2 className="text-5xl font-bold hover:text-cyan-300 mt-5">
              HOME
            </h2>
            <h2 className="text-5xl font-bold  hover:text-cyan-300 mt-5">
              WORKS
            </h2>
            <h2 className="text-5xl font-bold  hover:text-cyan-300 mt-5">
              ABOUT
            </h2>
            <div className="mt-6 space-y-2">
              <p>abdishakursharif420@gmail.com</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg">Freelancer Availability</p>
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                ></motion.div>
                <p>Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
