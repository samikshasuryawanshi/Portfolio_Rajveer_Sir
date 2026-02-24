import React from "react";
import { motion } from "framer-motion";
import CrowdCanvas from "./CrowdCanvas";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full bg-background text-black overflow-hidden pt-20">
      {/* Header Info */}
      <div className="absolute lg:top-20 top-40 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 grid justify-items-center gap-12 text-center text-black z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center w-full"
        >

          <h1 className="flex flex-col items-center">
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-7xl md:text-[8vw] font-black tracking-lighter leading-[1] block"
            >
              Designing
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="text-7xl md:text-[8vw] font-black tracking-lighter leading-[1] italic text-black/90 block -mt-2"
            >
              intent.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:mt-0 mt-5 flex flex-col items-center gap-4"
          >
            <div className="h-[1px] w-24 bg-black/10" />
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-black/60 max-w-xl">
              UX Designer <span className="text-black/40 mx-2">•</span> UX Analyst <span className="text-black/20 mx-2">•</span> Product Strategist
            </p>
          </motion.div>
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