import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import PeepIllustration from "./PeepIllustration";
import { motion } from "framer-motion";

const ContactAndFooter = () => {
  const socialLinks = [
    { name: "Github", icon: <Github className="w-5 h-5" />, url: "#" },
    { name: "Linkedin", icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "#" },
  ];

  return (
    <section id="contact" className="pt-32 pb-12 bg-background text-black relative overflow-hidden">
      {/* Background Illustration */}
      <PeepIllustration
        index={88}
        className="absolute top-20 right-20 w-32 h-32 opacity-20 hidden lg:block"
        animated={true}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top: Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-black/70 font-black">
                Connection — Reach Out
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-light tracking-tight mb-10 leading-[1.1]">
              Let's start <br className="hidden md:block" />
              <span className="italic text-black/70">the conversation</span>.
            </h2>

            <p className="text-xl text-black/80 max-w-sm leading-relaxed font-medium mb-8">
              Have a big idea or a brand to polish? I’m always open to discussing new projects and creative opportunities.
            </p>

            <motion.div
              initial={{ opacity: 0, rotate: 2 }}
              whileInView={{ opacity: 1 }}
              className="text-black/70 text-2xl flex items-center gap-4"
            >
              Wait no more! <PeepIllustration index={14} className="w-12 h-12 opacity-80" animated={false} />
            </motion.div>
          </div>

          <div className="space-y-10 md:pt-20">
            <div className="group flex items-center gap-6 border-l border-black/10 pl-6 hover:border-black transition-colors duration-500">
              <Mail className="w-5 h-5 text-black/80" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-black/80 mb-1 font-bold">Email</div>
                <div className="text-lg font-light text-black/80 group-hover:text-black transition-colors">rajveerrd14@gmail.com</div>
              </div>
            </div>

            <div className="group flex items-center gap-6 border-l border-black/10 pl-6 hover:border-black transition-colors duration-500">
              <Phone className="w-5 h-5 text-black/70" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-black/80 mb-1 font-bold">Phone</div>
                <div className="text-lg font-light text-black/80 group-hover:text-black transition-colors">+91 9109298199</div>
              </div>
            </div>

            <div className="group flex items-center gap-6 border-l border-black/10 pl-6 hover:border-black transition-colors duration-500">
              <MapPin className="w-5 h-5 text-black/70" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-black/80 mb-1 font-bold">Location</div>
                <div className="text-lg font-light text-black/80 group-hover:text-black transition-colors">Bhopal, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Footer Section */}
        <footer className="pt-12 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold tracking-tighter text-black mb-2">
                Rajveer Parmar<span className="text-black/70">.</span>
              </div>
              <p className="text-black/80 text-xs uppercase tracking-widest font-black">Building digital excellence.</p>
            </div>

            {/* Minimalist Socials */}
            <div className="flex gap-8 items-center">
              <PeepIllustration index={102} className="w-10 h-10 opacity-80 mr-4" animated={false} />
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-black/70 hover:text-black transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-black/70 text-[10px] uppercase tracking-[0.3em] font-black">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactAndFooter;