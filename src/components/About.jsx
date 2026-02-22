import { motion } from "framer-motion";
import { Palette, Share2, Compass, MessageSquare } from "lucide-react";

const About = () => {
  const skills = [
    { icon: <Palette />, title: "UI/UX Design", desc: "Crafting pixel-perfect user interfaces in Figma & Canva." },
    { icon: <Share2 />, title: "Digital Marketing", desc: "Driving growth through social media strategy and SEO." },
    { icon: <Compass />, title: "Brand Identity", desc: "Creating unique visual languages for modern brands." },
    { icon: <MessageSquare />, title: "Engagement", desc: "Optimizing content for maximum user interaction." },
  ];

  return (
    <section id="about" className="py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Blending Creativity with <br /> Marketing Precision.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              I'm a UI/UX Designer and Digital Marketing expert dedicated to creating visual experiences that convert.
              By combining high-end design aesthetics with strategic marketing insights, I help brands stand out and grow in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 rounded-2xl glass hover:border-primary/30 transition-colors group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <h3 className="font-bold mb-1 text-foreground">{skill.title}</h3>
                  <p className="text-sm text-foreground/60">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 relative group shadow-2xl shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="https://images.unsplash.com/photo-1541461946822-961849d111ef?auto=format&fit=crop&q=80&w=800"
                alt="Creative Design Workspace"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl border border-primary/10">
              <div className="text-3xl font-black text-primary">50+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-foreground/50">UI/UX Layouts</div>
            </div>
            <div className="absolute -top-6 -left-6 glass p-6 rounded-2xl shadow-2xl border border-secondary/10">
              <div className="text-3xl font-black text-secondary">200%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-foreground/50">ROI Generated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
