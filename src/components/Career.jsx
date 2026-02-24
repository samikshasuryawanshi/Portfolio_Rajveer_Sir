import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, ArrowDown } from "lucide-react";
import { useRef } from "react";
import PeepIllustration from "./PeepIllustration";

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
    {
      type: "work",
      title: "Founder & CEO",
      company: "Zintrix Technologies",
      period: "Present",
      desc: "Architecting the technical vision and business strategy for future-facing digital products.",
      peepIndex: 33,
      note: "Visionary & founder."
    },
    {
      type: "work",
      title: "CTO",
      company: "Shiksha Salahkar Medical Advisory Pvt Ltd",
      period: "Strategic Tech Lead",
      desc: "Leading technical innovation and digital infrastructure for specialized medical services.",
      peepIndex: 45,
      note: "Tech strategy leaf."
    },
    {
      type: "work",
      title: "UI/UX Designer",
      company: "DSPL Technologies",
      period: "Core Design",
      desc: "Delivering high-fidelity prototypes and user-centric designs for complex enterprise applications.",
      peepIndex: 5,
      note: "Visual Architect."
    },
    {
      type: "work",
      title: "Designer & UX Consultant",
      company: "DV Hotel Consultant",
      period: "Consulting",
      desc: "Auditing user journey flows and implementing high-impact design transformations for hospitality brands.",
      peepIndex: 22,
      note: "Experience auditor."
    },
    {
      type: "work",
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      period: "Early Career",
      desc: "Building a foundation in visual storytelling, color theory, and digital branding across diverse industries.",
      peepIndex: 12,
      note: "Creative beginnings."
    },
    {
      type: "education",
      title: "10+2 Secondary Education",
      company: "CM Rise Hr Sec School, Bina",
      period: "Completed",
      desc: "Academic foundation in higher secondary education.",
      peepIndex: 82,
      note: "Foundation."
    },
    {
      type: "education",
      title: "Advanced UX Design",
      company: "Tutedude",
      period: "Certification",
      desc: "Intensive training in psychological principles and interaction design frameworks.",
      peepIndex: 12,
      note: "Mastering principles."
    },
    {
      type: "education",
      title: "How to Figma",
      company: "Design Sundays",
      period: "Certification",
      desc: "Mastery of collaborative design tools and component-driven architecture in Figma.",
      peepIndex: 42,
      note: "Tool proficiency."
    },
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
    <section id="career" className="relative py-40 bg-background text-black overflow-clip" ref={containerRef}>
      {/* Background Text Illustration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="text-[25vw] font-black text-black/[0.03] tracking-tighter leading-none ml-20">
          JOURNEY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Structural Change: 2-Column Grid with different widths */}
        <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-24">

          {/* Left Column: Sticky Header & Navigation */}
          <div className="relative h-full">
            <div className="lg:sticky lg:top-32 space-y-12 h-fit">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-black/70 font-black mb-6 block">
                  Evolution
                </span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                  The <br className="hidden md:block" />
                  <span className="italic text-black/70">Journey</span>.
                </h2>
                <p className="text-lg text-black font-medium leading-relaxed max-w-xs">
                  A curated record of professional growth and academic milestones.
                </p>

                {/* Handwritten addition */}
                <motion.div
                  initial={{ opacity: 0, rotate: -3 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-8 text-black text-xl"
                >
                  Continuously evolving.
                </motion.div>
              </motion.div>

              {/* Minimal Progress Indicator */}
              <div className="hidden lg:flex items-center gap-6 group">
                <div className="h-[1px] w-12 bg-black/40 group-hover:w-20 transition-all duration-500" />
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown size={14} className="text-black/80" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: The Actual Timeline */}
          <div className="relative pl-8 lg:pl-0">

            {/* Structural Line: Positioned to the far left of the right column */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-black/[0.03]">
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="w-full h-full bg-gradient-to-b from-black via-black/40 to-transparent"
              />
            </div>

            <div className="space-y-40">
              {/* Highlighted Work Experience Section */}
              <div className="space-y-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-[0.3em]">Work Experience</h3>
                </div>

                {timeline.filter(item => item.type === 'work').map((item, i) => (
                  <motion.div
                    key={`work-${i}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVars}
                    className="relative pl-12 lg:pl-20 group"
                  >
                    <div className="absolute left-[-4.5px] top-2">
                      <div className="w-[10px] h-[10px] rounded-full bg-black border border-white group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    <div className="flex items-center justify-between mb-6 pr-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-black/60 font-black">Ex-0{i + 1}</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-black">
                          {item.period}
                        </span>
                      </div>
                      <span className="text-black text-sm italic group-hover:text-black transition-colors">
                        {item.note}
                      </span>
                    </div>

                    <div className="max-w-2xl relative">
                      <div className="absolute -left-20 top-0 hidden xl:block">
                        <PeepIllustration
                          index={item.peepIndex}
                          className="w-16 h-16 opacity-60 group-hover:opacity-100 transition-all duration-700"
                          animated={true}
                        />
                      </div>
                      <h4 className="text-3xl md:text-5xl font-light text-black mb-4 group-hover:translate-x-2 transition-transform duration-700">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 mb-8">
                        <Briefcase size={14} className="text-black" />
                        <p className="text-[11px] uppercase tracking-widest text-black/80 font-black italic">
                          {item.company}
                        </p>
                      </div>
                      <p className="text-black text-lg md:text-xl leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Learning / Education Section */}
              <div className="space-y-24">
                <div className="flex items-center gap-4 mb-12 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-black" />
                  </div>
                  <h3 className="text-xl text-black font-bold uppercase tracking-[0.3em]">Education & Learning</h3>
                </div>

                {timeline.filter(item => item.type === 'education').map((item, i) => (
                  <motion.div
                    key={`edu-${i}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVars}
                    className="relative pl-12 lg:pl-20 group"
                  >
                    <div className="absolute left-[-4.5px] top-2">
                      <div className="w-[10px] h-[10px] rounded-full bg-white border border-black group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    <div className="flex items-center justify-between mb-6 pr-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-black/60 font-black">Ed-0{i + 1}</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-black">
                          {item.period}
                        </span>
                      </div>
                      <span className="text-black text-sm italic group-hover:text-black transition-colors">
                        {item.note}
                      </span>
                    </div>

                    <div className="max-w-2xl relative">
                      <div className="absolute -left-20 top-0 hidden xl:block">
                        <PeepIllustration
                          index={item.peepIndex}
                          className="w-16 h-16 opacity-60 group-hover:opacity-100 transition-all duration-700"
                          animated={true}
                        />
                      </div>
                      <h4 className="text-3xl md:text-5xl font-light text-black mb-4 group-hover:translate-x-2 transition-transform duration-700">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 mb-8">
                        <GraduationCap size={14} className="text-black" />
                        <p className="text-[11px] uppercase tracking-widest text-black/80 font-black italic">
                          {item.company}
                        </p>
                      </div>
                      <p className="text-black text-lg md:text-xl leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;