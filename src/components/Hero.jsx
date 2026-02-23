import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Target, Layout, Palette, Sparkles } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Smoother easing and better Y-offset to prevent clipping
  const letterVariant = {
    hidden: { y: "120%", opacity: 0 },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { 
        delay: i * 0.03, 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      },
    }),
  };

  const titleLines = ["Turning Pixels", "Into Profit."];

  return (
    <section id="hero" className="relative min-h-screen bg-[#050505] text-white flex items-center overflow-hidden pt-32 pb-24 px-6">
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        
        {/* 2. LEFT COLUMN: CONTENT */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Sparkles size={16} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
              Available for new projects
            </span>
          </motion.div>

          <div className="mb-12">
            {titleLines.map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden py-2 -my-2 flex flex-wrap items-center">
                {line.split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="relative flex mr-[0.4em] overflow-hidden py-1 px-1">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={letterVariant}
                        initial="hidden"
                        animate="visible"
                        custom={(lineIdx * 10) + (wordIdx * 5) + charIndex}
                        className={`text-6xl md:text-8xl font-light tracking-tighter leading-[1.1] inline-block
                          ${word === "Profit." ? "text-primary italic font-serif" : "text-white"}
                        `}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/40 max-w-xl leading-relaxed font-light mb-14"
          >
            I bridge the gap between <span className="text-white italic">visual poetry</span> and 
            ruthless <span className="text-primary font-medium">conversion logic</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-8 items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="px-12 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-sm transition-all"
            >
              View Portfolio
            </motion.button>
            
            <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">
              Get in Touch <ArrowUpRight size={18} className="text-primary group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* 3. RIGHT COLUMN: BENTO GRID */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="col-span-2 bg-white/[0.03] border border-white/10 rounded-sm p-8 h-60 flex flex-col justify-between hover:bg-white/[0.05] transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                <Palette size={20} />
              </div>
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">/ UI_UX.Studio</span>
            </div>
            <div>
              <h3 className="text-3xl font-light text-white tracking-tight">Interface Design</h3>
              <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">Performance-led visuals</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/[0.03] border border-white/10 rounded-sm p-6 aspect-square flex flex-col justify-center items-center gap-4 group hover:border-primary/40 transition-colors"
          >
            <Target size={28} className="text-primary/40 group-hover:text-primary transition-colors duration-500" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Strategy</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white/[0.03] border border-white/10 rounded-sm p-6 aspect-square flex flex-col justify-center items-center gap-4 group hover:border-secondary/40 transition-colors"
          >
             <Layout size={28} className="text-secondary/40 group-hover:text-secondary transition-colors duration-500" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Marketing</span>
          </motion.div>
        </div>
      </div>

      {/* 4. MARQUEE TEXT */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-10 border-t border-white/5">
        <div className="flex whitespace-nowrap gap-24 animate-marquee opacity-20">
          {[1,2,3,4].map((n) => (
            <div key={n} className="flex gap-24 items-center">
                <span className="text-[9px] font-bold text-white uppercase tracking-[1em]">
                  STRATEGY • DESIGN • MARKETING • GROWTH • UI/UX • CONVERSION
                </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 60s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;