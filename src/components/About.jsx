import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const skills = [
    { title: "Interface Design", category: "Visual" },
    { title: "User Experience", category: "Strategy" },
    { title: "Digital Marketing", category: "Growth" },
    { title: "Brand Identity", category: "Identity" },
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start"
        >
          {/* Left Column: Content */}
          <div>
            <motion.div variants={itemVars} className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">
                About — Studio
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVars}
              className="text-5xl md:text-7xl font-light tracking-tight mb-10 leading-[1.1]"
            >
              Designing <span className="italic font-serif text-white/60">intent</span>, <br /> 
              measuring <span className="text-primary">impact</span>.
            </motion.h2>

            <motion.p 
              variants={itemVars}
              className="text-xl text-white/50 max-w-xl leading-relaxed mb-16"
            >
              I bridge the gap between aesthetic excellence and commercial performance. 
              My approach is minimal by design, ensuring your brand speaks clearly 
              in a crowded digital space.
            </motion.p>

            {/* Clean Skill List */}
            <motion.div variants={itemVars} className="space-y-0">
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-white/30">0{i + 1}</span>
                    <h3 className="text-2xl font-light group-hover:translate-x-2 transition-transform duration-500">
                      {skill.title}
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                    {skill.category}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual & Stats */}
          <motion.div 
            variants={itemVars}
            className="relative sticky top-32"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                src="https://images.unsplash.com/photo-1541461946822-961849d111ef?auto=format&fit=crop&q=80&w=800"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[1px] border-white/10" />
            </div>

            {/* Minimal Floaties */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white text-black p-8 rounded-none shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-4xl font-light tracking-tighter">200%</p>
                  <p className="text-[10px] uppercase tracking-tighter font-bold opacity-60">Avg. ROI Boost</p>
                </div>
                <ArrowUpRight size={16} className="text-black/30" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;