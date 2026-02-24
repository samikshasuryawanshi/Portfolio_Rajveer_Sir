import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import PeepIllustration from "./PeepIllustration";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projects = [
    { title: "Sound", category: "Web Design", year: "2024", image: "./sound.jpeg", note: "Headphone Brand." },
    { title: "Watch-man", category: "App Design", year: "2024", image: "./watch_man.jpeg", note: "Security application." },
    { title: "Paratha Mania", category: "Food App", year: "2023", image: "./paratha_mania.jpeg", note: "Culinary experience." },
    { title: "Swarn Ratna", category: "E-commerce", year: "2024", image: "./swarn_ratna.jpeg", note: "Jewellery showcase." },
  ];

  // Refined Easing Constant
  const studioEase = [0.22, 1, 0.36, 1];

  return (
    <section id="projects" className="pt-24 bg-background text-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Segment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: studioEase }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-black/70 font-black mb-4 block">
              Case Studies
            </span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              Selected <span className="italic text-black/70">Works</span>.
            </h2>
          </motion.div>

          <div className="flex flex-col items-end gap-2 text-right">
            <div className="flex items-center gap-4">
              <PeepIllustration index={67} className="w-10 h-10 opacity-70" animated={false} />
              <p className="text-sm text-black/80 tracking-widest uppercase">
                / {projects.length} Total Projects
              </p>
            </div>
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-black/80 text-lg"
            >
              Hover to peak.
            </motion.div>
          </div>
        </div>

        {/* Project List */}
        <div className="relative border-t border-black/10">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-16 px-2 transition-all duration-700 ease-studio-ease group-hover:px-8 cursor-pointer relative z-10">

                {/* Mobile Image Display (Visible on mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:hidden w-full aspect-[16/10] mb-8 overflow-hidden rounded-sm border border-black/5"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xs text-black/40 font-black">0{index + 1}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500 group-hover:translate-x-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-end gap-6 lg:gap-12 mt-8 lg:mt-0">
                  <span className="text-black/70 text-lg md:text-xl group-hover:text-black transition-colors italic">
                    {project.note}
                  </span>
                  <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-black group-hover:text-black transition-colors duration-500">
                      {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-700 ease-studio-ease">
                      <ArrowUpRight size={20} className="text-black group-hover:text-white group-hover:rotate-45 transition-all duration-500 ease-studio-ease" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Smooth Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 30, rotate: 2 }}
                    transition={{ duration: 0.5, ease: studioEase }}
                    className="hidden lg:block absolute right-40 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
                  >
                    <div className="relative">
                      <div className="w-80 aspect-[4/5] overflow-hidden rounded-sm border border-black/10 shadow-2xl relative z-10 bg-white">
                        <motion.img
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: studioEase }}
                          src={project.image}
                          className="w-full h-full object-cover"
                          alt="Preview"
                        />
                      </div>
                      <PeepIllustration index={index * 7 + 12} className="absolute -bottom-10 -right-10 w-24 h-24 opacity-30 z-0" animated={false} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-end items-center gap-6"
        >
          <PeepIllustration index={33} className="w-12 h-12 opacity-70" />
          <button className="group text-[10px] uppercase tracking-[0.4em] text-black/40 flex items-center gap-4 hover:text-black transition-all duration-500 font-bold">
            Explore All <div className="w-12 h-[1px] bg-black/10 group-hover:w-24 group-hover:bg-black transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;