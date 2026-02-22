import { motion } from "framer-motion";
import {
    Palette,
    Search,
    Brain,
    Briefcase,
    Layout,
    PenTool,
    LineChart,
    Users
} from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Design Expertise",
            icon: <Palette className="w-6 h-6 text-primary" />,
            skills: [
                { name: "UX Design", icon: <Layout className="w-4 h-4" /> },
                { name: "Graphics Design", icon: <PenTool className="w-4 h-4" /> },
                { name: "Brand Identity Design", icon: <Palette className="w-4 h-4" /> },
            ],
        },
        {
            title: "Strategy & Consulting",
            icon: <Briefcase className="w-6 h-6 text-secondary" />,
            skills: [
                { name: "UX Consultant", icon: <Search className="w-4 h-4" /> },
                { name: "Business Consultant", icon: <LineChart className="w-4 h-4" /> },
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

    return (
        <section id="skills" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        Design & <span className="text-primary underline decoration-accent/30 underline-offset-8">Psychology</span>
                    </motion.h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Combining artistic creativity with behavioral science to build impactful digital strategies.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl group hover:border-primary/20 transition-all shadow-xl shadow-primary/5"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-primary/5 rounded-2xl group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group/item"
                                    >
                                        <div className="text-primary/70 group-hover/item:text-primary transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="font-semibold text-foreground/80 group-hover/item:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
