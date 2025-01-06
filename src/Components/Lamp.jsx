"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { SpinningText } from "./SpinningTextProps";
import HeroSection from "../Pages/HeroSection";
// import { SideMenu } from "./SideMenu";
export function LampDemo() {
 
  return (
    <>
      {/* Header with Logo and Side Menu */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
        </div>

        {/* Side Menu */}
        {/* <SideMenu /> */}
      </header>

      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center flex flex-col items-center justify-center max-w-[90%] md:max-w-[60%]  "
        >
          <motion.h1 className="font-nohemi bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-transparent text-5xl md:text-9xl font-extrabold tracking-tight ">
            ABDISHAKUR
          </motion.h1>
          <motion.h2 className="text-cyan-300 font-generalsans text-lg md:text-xl font-medium tracking-wide mt-2">
            FULLSTACK DEVELOPER
          </motion.h2>
          <motion.h1 className="font-nohemi bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-transparent text-5xl md:text-9xl font-extrabold tracking-tight  mt-4">
            SHARIF
          </motion.h1>
        </motion.div>
        <SpinningText
          radius={6}
          fontSize={1.2}
          className="font-medium leading-none font-nohemi text-cyan-300 absolute bottom-1 left-1 "
        >
          {`Available For Work • Freelancer • `}
        </SpinningText>
      </LampContainer>
      <HeroSection />
    </>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0", // Center both lamp and text
        className
      )}
    >
      {/* Lamp Design */}
      <div className="relative flex w-full flex-1 scale-y-110 items-center justify-center isolate z-0 mt-36">
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-48 w-[24rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-48 w-[24rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-40 w-full translate-y-10 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-40 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-32 w-[24rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-32 w-48 -translate-y-[5rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[24rem] -translate-y-[6rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-40 w-full -translate-y-[11rem] bg-slate-950 "></div>
      </div>

      {/* Text Content Below Lamp */}
      <div className="relative z-50 flex flex-col items-center px-5 mb-60">
        {children}
      </div>
    </div>
  );
};
