import { motion } from "framer-motion";
import { ExternalLink, Palette, TrendingUp } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Eco-Brand Identity",
            desc: "Full brand visual redesign using Figma and custom Canva assets for a sustainable startup.",
            tech: ["UI/UX", "Branding", "Figma"],
            icon: <Palette className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Viral Campaign Booster",
            desc: "Digital marketing strategy that achieved 1M+ impressions across social platforms in 30 days.",
            tech: ["Marketing", "SEO", "Ads"],
            icon: <TrendingUp className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Finance App Interface",
            desc: "Intuitive mobile app UI designed in Figma with a focus on user accessibility and retention.",
            tech: ["UI/UX", "Mobile", "Figma"],
            icon: <Palette className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-foreground">Case Studies</h2>
                        <p className="text-foreground/70">Solving business challenges through design and strategy.</p>
                    </div>
                    <a href="#" className="hidden md:block text-primary font-bold hover:underline mb-2">View Portfolio ↗</a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl glass mb-6 shadow-xl shadow-primary/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <button className="p-3 bg-primary text-background rounded-full hover:bg-foreground hover:text-background transition-colors capitalize text-sm font-bold flex items-center gap-2">
                                        {project.icon} View Case
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">{project.title}</h3>
                            <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.desc}</p>
                            <div className="flex gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 glass rounded-md text-foreground/80">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
