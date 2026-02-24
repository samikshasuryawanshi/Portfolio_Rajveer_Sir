import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PeepIllustration from "./PeepIllustration";

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
    <section id="about" className="relative py-32 bg-background text-black overflow-hidden">
      {/* Background Text Illustration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="text-[30vw] font-black text-black/[0.03] tracking-tighter leading-none -ml-20">
          STUDIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              <span className="text-xs uppercase tracking-[0.3em] text-black font-black">
                About — Studio
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-light tracking-tight mb-10 leading-[1.1]">
              Designing <span className="italic text-black/70">intent</span>, <br className="hidden md:block" />
              measuring <span className="text-black/90">impact</span>.
            </h2>

            <motion.p
              variants={itemVars}
              className="text-xl text-black max-w-xl leading-relaxed mb-16 font-medium"
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
                  className="group relative flex items-center justify-between py-6 border-b border-black/5 hover:border-black/20 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-black/60 font-black">0{i + 1}</span>
                    <h3 className="text-2xl font-light group-hover:translate-x-2 transition-transform duration-500">
                      {skill.title}
                    </h3>
                  </div>
                  <div className="absolute -left-20 top-0 hidden xl:block">
                    <PeepIllustration
                      index={skill.peepIndex}
                      className="w-16 h-16 opacity-70 group-hover:opacity-100 transition-all duration-700"
                      animated={true}
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-black/40 group-hover:text-black transition-colors font-bold">
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
                src="./profile.jpeg"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[1px] border-black/5" />

              {/* Illustration Interaction */}
              <PeepIllustration
                index={10}
                className="absolute top-4 right-4 w-24 h-24 z-20 opacity-100"
              />
              <PeepIllustration
                index={1 * 5 + 20} // Assuming idx is 1 for this example, adjust as needed
                className="absolute -right-20 top-0 w-20 h-20 opacity-80 hidden xl:block"
                animated={false}
              />
            </div>

            {/* Minimal Floaties with Handwritten Note */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-none shadow-2xl z-20"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <p className="text-4xl font-light tracking-tighter">200%</p>
                    <p className="text-[10px] uppercase tracking-tighter font-bold opacity-60">Avg. ROI Boost</p>
                  </div>
                  <ArrowUpRight size={16} className="text-white/30" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: -5 }}
                className="absolute -bottom-20 -left-4 text-black text-lg leading-tight w-40"
              >
                Tested & verified through data.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 2 }}
                whileInView={{ opacity: 1 }}
                className="text-black/70 text-2xl flex items-center gap-4"
              >
                Wait no more! <PeepIllustration index={14} className="w-12 h-12 opacity-100" animated={false} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;