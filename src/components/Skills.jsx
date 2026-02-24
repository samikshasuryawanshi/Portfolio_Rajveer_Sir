import { motion } from "framer-motion";
import {
  Palette, Search, Brain, Briefcase,
  Layout, PenTool, LineChart, Users, ArrowRight
} from "lucide-react";
import PeepIllustration from "./PeepIllustration";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Expertise",
      icon: <Palette className="w-6 h-6 text-black" />,
      note: "Where it all starts.",
      skills: [
        { name: "UX Design", icon: <Layout className="w-4 h-4" /> },
        { name: "Graphics Design", icon: <PenTool className="w-4 h-4" /> },
        { name: "Brand Identity", icon: <Palette className="w-4 h-4" /> },
      ],
    },
    {
      title: "Strategy & Consulting",
      icon: <Briefcase className="w-6 h-6 text-black" />,
      note: "Thinking ahead.",
      skills: [
        { name: "UX Consultant", icon: <Search className="w-4 h-4" /> },
        { name: "Business Strategy", icon: <LineChart className="w-4 h-4" /> },
      ],
    },
    {
      title: "Analysis & Psychology",
      icon: <Brain className="w-6 h-6 text-black/60" />,
      note: "Human-first approach.",
      skills: [
        { name: "User Analysis", icon: <Users className="w-4 h-4" /> },
        { name: "Human Psychology", icon: <Brain className="w-4 h-4" /> },
        { name: "UX Psychology", icon: <Brain className="w-4 h-4" /> },
      ],
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 bg-background text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">

          {/* Section Info: Sticky on Desktop */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-light tracking-tight mb-10 leading-[1.1]">
                Design & <br className="hidden md:block" />
                <span className="italic text-black/70">Psychology</span>.
              </h2>

              <p className="text-xl text-black max-w-sm leading-relaxed mb-16 font-medium">
                Combining artistic creativity with behavioral science to build impactful digital strategies that actually convert.
              </p>

              {/* Decorative Peep */}
              <div className="relative h-32 w-full mb-12">
                <PeepIllustration index={25} className="w-24 h-24 absolute bottom-0 left-0" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute bottom-12 left-28 text-black/80 text-lg rotate-3"
                >
                  It's all about empathy.
                </motion.div>
              </div>

              <div className="flex gap-2">
                <div className="w-12 h-1 bg-black rounded-full" />
                <div className="w-4 h-1 bg-black/60 rounded-full" />
                <div className="w-2 h-1 bg-black/20 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Skills List */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVars} className="group relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-black/60 font-black">0{idx + 1}</span>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-black">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-black/80 text-sm italic">
                    {category.note}
                  </span>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ x: 10 }}
                      className="glass flex items-center justify-between p-5 rounded-2xl group/item hover:border-black/20 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-black/60 group-hover/item:text-black transition-colors">
                          {skill.icon}
                        </span>
                        <span className="text-2xl font-light text-black group-hover/item:text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-black" />
                    </motion.div>
                  ))}
                </div>

                {/* Random Peep onlooker for some categories */}
                {idx % 2 === 1 && (
                  <PeepIllustration
                    index={idx * 5 + 20}
                    className="absolute -right-20 top-0 w-20 h-20 opacity-20 hidden xl:block"
                    animated={false}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;