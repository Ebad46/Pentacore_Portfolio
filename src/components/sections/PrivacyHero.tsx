"use client";

import { motion, Variants } from "framer-motion";
import TubesBackground from "@/components/ui/TubesBackground";
import Noise from "@/components/ui/Noise";

type PrivacyHeroProps = {
  eyebrow?: string;
  hideEyebrow?: boolean;
  titleTop?: string;
  titleBottom?: string;
  leftHeadline?: string;
  leftDescription?: string;
};

export default function PrivacyHero({
  eyebrow = "Pentacore Solution",
  hideEyebrow = false,
  titleTop = "PRIVACY",
  titleBottom = "POLICY",
  leftHeadline,
  leftDescription,
}: PrivacyHeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 60, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <TubesBackground />

      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <Noise />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">
        {(leftHeadline || leftDescription) && (
          <div className="absolute left-6 top-6 z-20 max-w-xl text-left md:left-8 md:top-8">
            {leftHeadline && (
              <p className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                {leftHeadline}
              </p>
            )}
            {leftDescription && (
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                {leftDescription}
              </p>
            )}
          </div>
        )}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {!hideEyebrow && eyebrow ? (
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-xs md:text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur-xl shadow-lg">
                {eyebrow}
              </span>
            </motion.div>
          ) : null}

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05] max-w-5xl"
          >
            {titleTop}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-white">
              {titleBottom}
            </span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
