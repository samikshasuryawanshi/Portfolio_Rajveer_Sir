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
      title: "Senior UI/UX Designer",
      company: "Creative Pulse Agency",
      period: "2022 — Present",
      desc: "Leading design systems for global brands and optimizing conversion rates through data-driven UI.",
      peepIndex: 5,
      note: "Full creative freedom."
    },
    {
      type: "education",
      title: "Master of Design",
      company: "Institute of Digital Arts",
      period: "2020 — 2022",
      desc: "Specialized in User Experience and Human-Computer Interaction.",
      peepIndex: 94, // Graduation cap style
      note: "Learned the 'Why'."
    },
    {
      type: "work",
      title: "Digital Marketing Specialist",
      company: "Growth Hackers Ltd",
      period: "2018 — 2020",
      desc: "Managed $100k+ monthly budgets and increased organic reach by 300%.",
      peepIndex: 45,
      note: "Numbers don't lie."
    },
    {
      type: "education",
      title: "Bachelors in Fine Arts",
      company: "Metropolitan University",
      period: "2014 — 2018",
      desc: "Foundation in visual storytelling and color theory.",
      peepIndex: 82,
      note: "The beginning."
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
    <section id="career" className="relative py-40 bg-background text-black overflow-hidden" ref={containerRef}>
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
          <div className="relative">
            <div className="lg:sticky lg:top-40 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-black/70 font-black mb-6 block">
                  Evolution
                </span>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                  The <br />
                  <span className="italic font-serif text-black/70">Journey</span>.
                </h2>
                <p className="text-lg text-black/70 font-medium leading-relaxed max-w-xs">
                  A curated record of professional growth and academic milestones.
                </p>

                {/* Handwritten addition */}
                <motion.div
                  initial={{ opacity: 0, rotate: -3 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-8 font-[family-name:var(--font-hand)] text-black/60 text-xl"
                >
                  Continuously evolving.
                </motion.div>
              </motion.div>

              {/* Minimal Progress Indicator */}
              <div className="hidden lg:flex items-center gap-6 group">
                <div className="h-[1px] w-12 bg-black/10 group-hover:w-20 transition-all duration-500" />
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown size={14} className="text-black/30" />
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
                    <div className="w-[10px] h-[10px] rounded-full bg-white border border-black group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  {/* Period Label with Handwritten note */}
                  <div className="flex items-center justify-between mb-6 pr-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-black/20">0{i + 1}</span>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-black">
                        {item.period}
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-hand)] text-black/30 text-sm italic group-hover:text-black/60 transition-colors">
                      {item.note}
                    </span>
                  </div>

                  {/* Content with Contextual Peep */}
                  <div className="max-w-2xl relative">
                    <div className="absolute -left-20 top-0 hidden xl:block">
                      <PeepIllustration
                        index={item.peepIndex}
                        className="w-16 h-16 opacity-50 group-hover:opacity-100 transition-all duration-700"
                        animated={true}
                      />
                    </div>

                    <h4 className="text-3xl md:text-5xl font-light text-black mb-4 group-hover:translate-x-2 transition-transform duration-700">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-3 mb-8">
                      {item.type === 'work' ?
                        <Briefcase size={14} className="text-black/20" /> :
                        <GraduationCap size={14} className="text-black/20" />
                      }
                      <p className="text-[11px] uppercase tracking-widest text-black/40 font-black italic">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-black/40 text-lg md:text-xl leading-relaxed font-light">
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