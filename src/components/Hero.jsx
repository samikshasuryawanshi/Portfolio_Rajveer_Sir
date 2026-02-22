import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Target, Zap, Layout, Palette, Sparkles } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const letterVariant = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { delay: i * 0.02, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
  };

  const title = "Turning Pixels Into Profit.";

  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden py-24 px-6">
      {/* 1. ANIMATED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* 2. LEFT COLUMN: CONTENT */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest"
          >
            <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <Sparkles size={14} fill="currentColor" />
            </motion.span>
            Available for new opportunities
          </motion.div>

          {/* Fixed Headline: Added padding-bottom and leading adjustment */}
          <h1 className="text-6xl md:text-8xl font-black text-foreground leading-[1.1] tracking-tighter flex flex-wrap items-center">
            {title.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="mr-[0.2em] mb-2 overflow-hidden flex py-1 px-1">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterVariant}
                    initial="hidden"
                    animate="visible"
                    custom={wordIndex * 5 + charIndex}
                    className={`inline-block whitespace-pre ${word === "Profit." ? "text-gradient italic px-1" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed font-light"
          >
            A bridge between <span className="text-foreground font-semibold underline decoration-primary/30 underline-offset-8">visual poetry</span> and 
            ruthless <span className="text-foreground font-semibold underline decoration-secondary/30 underline-offset-8">conversion logic</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-foreground text-background font-bold rounded-2xl overflow-hidden transition-all shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                View Portfolio <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button 
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="px-10 py-5 border-2 border-foreground/10 text-foreground font-bold rounded-2xl transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* 3. RIGHT COLUMN: BENTO */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="col-span-2 bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 flex flex-col justify-between h-64 group hover:bg-foreground/[0.05] transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="p-4 bg-primary text-background rounded-2xl shadow-lg shadow-primary/20">
                <Palette size={28} />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-foreground/30 font-mono tracking-widest">SERVICES</p>
                <div className="flex gap-1 mt-1 justify-end">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />)}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight">UI/UX Design</h3>
              <p className="text-foreground/50 mt-1">High-fidelity interfaces that convert users.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-secondary/10 border border-secondary/20 rounded-[2rem] p-6 flex flex-col justify-center items-center gap-4 text-secondary"
          >
            <Target size={40} />
            <span className="font-black text-xs uppercase tracking-tighter text-center leading-none">Growth Strategy</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-primary/10 border border-primary/20 rounded-[2rem] p-6 flex flex-col justify-center items-center gap-4 text-primary"
          >
             <Layout size={40} />
            <span className="font-black text-xs uppercase tracking-tighter text-center leading-none">Digital Ads</span>
          </motion.div>
        </div>
      </div>

      {/* 4. MARQUEE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden py-8 border-t border-foreground/5 bg-background/80 backdrop-blur-sm"
      >
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[1,2].map((n) => (
            <div key={n} className="flex gap-12 items-center">
                <span className="text-xs font-bold text-foreground/20 italic tracking-[0.5em]">STRATEGY • DESIGN • MARKETING • GROWTH • UI/UX • CONVERSION</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 25s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;