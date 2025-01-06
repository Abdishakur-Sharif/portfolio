import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-32 px-6 md:px-12 text-center flex flex-col items-center justify-center min-h-screen">
      {/* Call to Action Section */}
      <motion.h2
        className="text-6xl md:text-8xl font-bold font-nohemi"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HAVE AN IDEA?
      </motion.h2>

      <motion.p
        className="text-gray-400 mt-4 text-lg font-nohemi"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Drop me an email:
      </motion.p>

      {/* Email with Hover Effect */}
      <motion.a
        href="mailto:your.email@example.com"
        className="mt-4 text-2xl font-nohemi font-bold text-white relative inline-block cursor-pointer"
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
      >
        abdishakursharif420@gmail.com
        <motion.span
          className="absolute left-0 top-full font-nohemi w-full text-lg text-blue-500"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          Let's create magic ✨
        </motion.span>
      </motion.a>
      {/* Copyright Footer */}
      <p className="relative top-40 text-cyan-400 text-sm">
        &copy; {new Date().getFullYear()} Abdishakur Sharif. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
