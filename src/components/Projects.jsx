import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import PeepIllustration from "./PeepIllustration";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { title: "Eco-Brand Identity", category: "Branding", year: "2024", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600", note: "Sustainability first." },
    { title: "Viral Campaign Booster", category: "Marketing", year: "2023", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", note: "300% growth." },
    { title: "Finance App Interface", category: "Product", year: "2023", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600", note: "Security & speed." },
    { title: "Health Tech Platform", category: "UI/UX", year: "2024", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600", note: "Patient-centered." },
  ];

  // Refined Easing Constant
  const studioEase = [0.22, 1, 0.36, 1];

  return (
    <section id="projects" className="py-24 bg-background text-black overflow-hidden relative">
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
              Selected <span className="italic font-serif text-black/70">Works</span>.
            </h2>
          </motion.div>

          <div className="flex flex-col items-end gap-2 text-right">
            <div className="flex items-center gap-4">
              <PeepIllustration index={67} className="w-10 h-10 opacity-70" animated={false} />
              <p className="text-sm text-black/60 font-mono tracking-widest uppercase">
                / {projects.length} Total Projects
              </p>
            </div>
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-[family-name:var(--font-hand)] text-black/60 text-lg"
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
              className="group relative border-b border-black/10"
            >
              <div className="flex items-center justify-between py-10 px-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:px-8 cursor-pointer">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xs font-mono text-black/20">0{index + 1}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500 group-hover:translate-x-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <span className="hidden md:block font-[family-name:var(--font-hand)] text-black/20 text-xl group-hover:text-black/40 italic transition-colors">
                    {project.note}
                  </span>
                  <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-black/30 font-black group-hover:text-black transition-colors duration-500">
                    {project.category}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <ArrowUpRight size={20} className="text-black group-hover:text-white group-hover:rotate-45 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </div>
                </div>
              </div>

              {/* Smooth Image Reveal */}
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
                      <div className="w-72 aspect-[4/5] overflow-hidden rounded-sm border border-black/10 shadow-2xl relative z-10">
                        <motion.img
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: studioEase }}
                          src={project.image}
                          className="w-full h-full object-cover"
                          alt="Preview"
                        />
                      </div>
                      {/* Artistic Shadow Peep */}
                      <PeepIllustration index={project.index + 12} className="absolute -bottom-8 -right-8 w-20 h-20 opacity-20 z-0" animated={false} />
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
          <PeepIllustration index={33} className="w-12 h-12 opacity-30" />
          <button className="group text-[10px] uppercase tracking-[0.4em] text-black/40 flex items-center gap-4 hover:text-black transition-all duration-500 font-bold">
            Explore All <div className="w-12 h-[1px] bg-black/10 group-hover:w-24 group-hover:bg-black transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;