import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { title: "Eco-Brand Identity", category: "Branding", year: "2024", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600" },
    { title: "Viral Campaign Booster", category: "Marketing", year: "2023", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
    { title: "Finance App Interface", category: "Product", year: "2023", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600" },
    { title: "Health Tech Platform", category: "UI/UX", year: "2024", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" },
  ];

  // Refined Easing Constant
  const studioEase = [0.22, 1, 0.36, 1];

  return (
    <section id="projects" className="py-24 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: studioEase }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium mb-4 block">
              Case Studies
            </span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              Selected <span className="italic font-serif text-white/60">Works</span>.
            </h2>
          </motion.div>
          <p className="text-sm text-white/30 font-mono tracking-widest uppercase">
            / {projects.length} Total Projects
          </p>
        </div>

        {/* Project List */}
        <div className="relative border-t border-white/10">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10"
            >
              <div className="flex items-center justify-between py-10 px-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:px-8 cursor-pointer">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xs font-mono text-white/20">0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500 group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-12">
                  <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-white transition-colors duration-500">
                    {project.category}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <ArrowUpRight size={20} className="text-white group-hover:rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
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
                    <div className="w-72 aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                      <motion.img 
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: studioEase }}
                        src={project.image} 
                        className="w-full h-full object-cover" 
                        alt="Preview" 
                      />
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
          className="mt-16 flex justify-end"
        >
          <button className="group text-[10px] uppercase tracking-[0.4em] text-white/40 flex items-center gap-4 hover:text-white transition-all duration-500">
            Explore All <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;