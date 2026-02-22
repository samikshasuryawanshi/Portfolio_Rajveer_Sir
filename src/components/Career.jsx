import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, TrendingUp, Pen, Layers } from "lucide-react";

const Career = () => {
    const timeline = [
        {
            type: "work",
            title: "Senior UI/UX Designer",
            company: "Creative Pulse Agency",
            period: "2022 - Present",
            desc: "Leading design systems for global brands and optimizing conversion rates through data-driven UI."
        },
        {
            type: "education",
            title: "Master of Design",
            company: "Institute of Digital Arts",
            period: "2020 - 2022",
            desc: "Specialized in User Experience and Human-Computer Interaction."
        },
        {
            type: "work",
            title: "Digital Marketing Specialist",
            company: "Growth Hackers Ltd",
            period: "2018 - 2020",
            desc: "Managed $100k+ monthly budgets and increased organic reach by 300% for key accounts."
        },
        {
            type: "education",
            title: "Bachelors in Fine Arts",
            company: "Metropolitan University",
            period: "2014 - 2018",
            desc: "Foundation in visual storytelling and color theory."
        },
        {
            type: "education",
            title: "Schooling (High School)",
            company: "Saint Joseph's Academy",
            period: "2012 - 2014",
            desc: "Focus on Arts and Communications."
        }
    ];

    const expertises = [
        { icon: <Layers className="w-8 h-8" />, label: "Figma Expert", color: "text-purple-400" },
        { icon: <Pen className="w-8 h-8" />, label: "Canva Pro", color: "text-cyan-400" },
        { icon: <TrendingUp className="w-8 h-8" />, label: "Growth Hacker", color: "text-rose-400" },
        { icon: <Award className="w-8 h-8" />, label: "Certified Marketer", color: "text-amber-400" }
    ];

    return (
        <section id="career" className="py-24 bg-surface/40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        Career <span className="text-primary underline decoration-accent/30 underline-offset-8">Roadmap</span>
                    </motion.h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        A journey of continuous learning, creative evolution, and measurable digital growth.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Expertise Panel */}
                    <div className="lg:col-span-1 space-y-6">
                        <h3 className="text-2xl font-bold mb-8 text-foreground">Core Mastery</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {expertises.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 glass rounded-2xl flex flex-col items-center text-center gap-3 shadow-xl shadow-primary/5 border border-primary/10"
                                >
                                    <div className={`${exp.color}`}>{exp.icon}</div>
                                    <span className="text-sm font-bold text-foreground">{exp.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Panel */}
                    <div className="lg:col-span-2 relative">
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative pl-0 md:pl-20"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 md:left-[30px] -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block shadow-[0_0_15px_rgba(45,106,79,0.2)]" />

                                    <div className="glass p-8 rounded-3xl relative overflow-hidden group border border-primary/10 shadow-xl shadow-primary/5">
                                        <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-primary`}>
                                            {item.type === 'work' ? <Briefcase size={80} /> : <GraduationCap size={80} />}
                                        </div>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                                                <p className="text-primary font-bold">{item.company}</p>
                                            </div>
                                            <span className="px-4 py-1 rounded-full bg-primary/5 text-xs font-black text-primary border border-primary/10">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="text-foreground/70 text-sm leading-relaxed">
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
