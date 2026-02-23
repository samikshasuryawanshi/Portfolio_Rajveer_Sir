import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, ArrowDown } from "lucide-react";
import { useRef } from "react";

const Career = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timeline = [
    { type: "work", title: "Senior UI/UX Designer", company: "Creative Pulse Agency", period: "2022 — Present", desc: "Leading design systems for global brands and optimizing conversion rates through data-driven UI." },
    { type: "education", title: "Master of Design", company: "Institute of Digital Arts", period: "2020 — 2022", desc: "Specialized in User Experience and Human-Computer Interaction." },
    { type: "work", title: "Digital Marketing Specialist", company: "Growth Hackers Ltd", period: "2018 — 2020", desc: "Managed $100k+ monthly budgets and increased organic reach by 300%." },
    { type: "education", title: "Bachelors in Fine Arts", company: "Metropolitan University", period: "2014 — 2018", desc: "Foundation in visual storytelling and color theory." },
  ];

  const itemVars = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="career" className="py-40 bg-[#050505] text-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Structural Change: 2-Column Grid with different widths */}
        <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Header & Navigation */}
          <div className="relative">
            <div className="lg:sticky lg:top-40 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium mb-6 block">
                  Evolution
                </span>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                  The <br /> 
                  <span className="italic font-serif text-white/60">Journey</span>.
                </h2>
                <p className="text-lg text-white/40 font-light leading-relaxed max-w-xs">
                  A curated record of professional growth and academic milestones.
                </p>
              </motion.div>

              {/* Minimal Progress Indicator */}
              <div className="hidden lg:flex items-center gap-6 group">
                <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 transition-all duration-500" />
                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown size={14} className="text-primary" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: The Actual Timeline */}
          <div className="relative pl-8 lg:pl-0">
            
            {/* Structural Line: Positioned to the far left of the right column */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-white/5">
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
              />
            </div>

            <div className="space-y-32">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={itemVars}
                  className="relative pl-12 lg:pl-20 group"
                >
                  {/* Decorative Anchor Dot */}
                  <div className="absolute left-[-4.5px] top-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#050505] border border-primary group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  {/* Period Label: Positioned above for cleaner structure */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-white/20">0{i + 1}</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold">
                      {item.period}
                    </span>
                  </div>

                  {/* Content with Variable Weights */}
                  <div className="max-w-2xl">
                    <h4 className="text-3xl md:text-5xl font-light text-white mb-4 group-hover:text-primary transition-colors duration-700">
                      {item.title}
                    </h4>
                    
                    <div className="flex items-center gap-3 mb-8">
                      {item.type === 'work' ? 
                        <Briefcase size={14} className="text-white/20" /> : 
                        <GraduationCap size={14} className="text-white/20" />
                      }
                      <p className="text-[11px] uppercase tracking-widest text-white/40 font-bold italic">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-white/40 text-lg md:text-xl leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;