import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const ContactAndFooter = () => {
  const socialLinks = [
    { name: "Github", icon: <Github className="w-5 h-5" />, url: "#" },
    { name: "Linkedin", icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "#" },
  ];

  return (
    <section id="contact" className="pt-32 pb-12 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">
                Connection — Reach Out
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-10 leading-[1.1]">
              Let's start <br />
              <span className="italic font-serif text-white/60">the conversation</span>.
            </h2>

            <p className="text-xl text-white/50 max-w-sm leading-relaxed font-light">
              Have a big idea or a brand to polish? I’m always open to discussing new projects and creative opportunities.
            </p>
          </div>

          <div className="space-y-10 md:pt-20">
            <div className="group flex items-center gap-6 border-l border-white/10 pl-6 hover:border-primary transition-colors duration-500">
              <Mail className="w-5 h-5 text-primary/60" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1 font-mono">Email</div>
                <div className="text-lg font-light text-white/80 group-hover:text-white transition-colors">hello@rajveer.dev</div>
              </div>
            </div>

            <div className="group flex items-center gap-6 border-l border-white/10 pl-6 hover:border-primary transition-colors duration-500">
              <Phone className="w-5 h-5 text-white/20" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1 font-mono">Phone</div>
                <div className="text-lg font-light text-white/80 group-hover:text-white transition-colors">+91 98765 43210</div>
              </div>
            </div>

            <div className="group flex items-center gap-6 border-l border-white/10 pl-6 hover:border-primary transition-colors duration-500">
              <MapPin className="w-5 h-5 text-white/20" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1 font-mono">Location</div>
                <div className="text-lg font-light text-white/80 group-hover:text-white transition-colors">Mumbai, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Footer Section */}
        <footer className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold tracking-tighter text-white mb-2">Rajveer<span className="text-primary">.</span></div>
              <p className="text-white/30 text-xs uppercase tracking-widest font-light">Building digital excellence.</p>
            </div>

            {/* Minimalist Socials */}
            <div className="flex gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-white/30 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactAndFooter;