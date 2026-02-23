import { motion } from "framer-motion";
import { 
  Palette, Search, Brain, Briefcase, 
  Layout, PenTool, LineChart, Users, ArrowRight 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Expertise",
      icon: <Palette className="w-6 h-6 text-primary" />,
      skills: [
        { name: "UX Design", icon: <Layout className="w-4 h-4" /> },
        { name: "Graphics Design", icon: <PenTool className="w-4 h-4" /> },
        { name: "Brand Identity", icon: <Palette className="w-4 h-4" /> },
      ],
    },
    {
      title: "Strategy & Consulting",
      icon: <Briefcase className="w-6 h-6 text-secondary" />,
      skills: [
        { name: "UX Consultant", icon: <Search className="w-4 h-4" /> },
        { name: "Business Strategy", icon: <LineChart className="w-4 h-4" /> },
      ],
    },
    {
      title: "Analysis & Psychology",
      icon: <Brain className="w-6 h-6 text-accent" />,
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
    <section id="skills" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          
          {/* Section Info: Sticky on Desktop */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Header formatted exactly like About page */}
              <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-10 leading-[1.1] text-foreground">
                Design & <br />
                <span className="italic font-serif text-foreground/60">Psychology</span>.
              </h2>
              
              {/* Paragraph formatted like About page */}
              <p className="text-xl text-foreground/50 max-w-sm leading-relaxed mb-16">
                Combining artistic creativity with behavioral science to build impactful digital strategies that actually convert.
              </p>
              
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-4 h-1 bg-secondary rounded-full" />
                <div className="w-2 h-1 bg-accent rounded-full" />
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
              <motion.div key={idx} variants={itemVars} className="group">
                <div className="flex items-center gap-4 mb-6">
                  {/* Category Counter / Label matched to About style */}
                  <span className="text-xs font-mono text-foreground/30">0{idx + 1}</span>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ x: 10 }}
                      className="glass flex items-center justify-between p-5 rounded-2xl group/item hover:border-primary/30 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-primary/50 group-hover/item:text-primary transition-colors">
                          {skill.icon}
                        </span>
                        {/* Title text weight matched to About list items */}
                        <span className="text-2xl font-light text-foreground/80 group-hover/item:text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;