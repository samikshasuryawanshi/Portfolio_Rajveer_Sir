import React from "react";
import { motion } from "framer-motion";
import CrowdCanvas from "./CrowdCanvas";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full bg-background text-black overflow-hidden pt-20">
      {/* Header Info */}
      <div className="absolute top-20 left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-10 text-center text-black z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >


          <h1 className="text-7xl md:text-[9vw] font-black tracking-lighter leading-[0.8] mb-5">
            Rajveer Parmar.
          </h1>

          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-black/70 max-w-xl">
            UX Designer • UX Analyst • Product Strategist
          </p>
        </motion.div>
      </div>

      {/* Background Text Illustration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-full flex justify-center">
        <span className="text-[25vw] font-black text-black/[0.04] tracking-tighter leading-none">
          RAJVEER
        </span>
      </div>

      {/* Crowd Canvas Background */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10">
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
      </div>

      {/* Bottom Gradient for Smooth Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-15" />
    </section>
  );
};

export default Hero;