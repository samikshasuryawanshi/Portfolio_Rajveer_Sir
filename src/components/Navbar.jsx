import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll Lock Logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Active Section & Scroll State Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "career", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Career", href: "#career", id: "career" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-500 pointer-events-none">
      <div
        className={`max-w-full mx-auto flex justify-between items-center transition-all duration-500 
        ${scrolled && !isOpen ? "py-4 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-lg" : "py-5"} 
        lg:px-16 px-6`}
      >
        {/* Logo with handwritten font */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto relative z-[120] text-3xl font-bold tracking-tighter text-black group flex items-center"
        >
          Rajveer Parmar<span className="text-black/70 group-hover:rotate-12 transition-transform inline-block">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hidden lg:flex items-center gap-1 p-1.5 pointer-events-auto rounded-full border border-black/5 bg-black/5 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group rounded-full 
              ${activeSection === link.id ? "text-black" : "text-black/70 hover:text-black"}`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.id && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-black/5 rounded-full z-0"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </motion.nav>

        {/* Action Side */}
        <div className="hidden lg:flex items-center gap-6 pointer-events-auto relative z-[120]">
          <div className="flex gap-4">
            <motion.a whileHover={{ y: -2 }} href="#" className="text-black/70 hover:text-black transition-colors"><Github size={18} /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="text-black/70 hover:text-black transition-colors"><Linkedin size={18} /></motion.a>
          </div>
          <motion.a
            href="#contact"
            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border 
            ${scrolled ? "bg-black text-white border-black" : "bg-transparent text-black border-black/10 hover:bg-black hover:text-white"}`}
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`pointer-events-auto relative z-[120] lg:hidden p-3 rounded-full transition-all active:scale-90 
            ${isOpen
              ? "bg-black text-white"
              : "bg-black/5 border border-black/10 text-black"
            }`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] lg:hidden bg-white pointer-events-auto flex flex-col p-8 pt-32 h-screen w-screen"
          >
            <div className="flex flex-col gap-4 relative z-10">
              <p className="text-black/70 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-5xl font-light tracking-tighter transition-all flex items-center justify-between group 
                  ${activeSection === link.id ? "text-black italic" : "text-black/80 hover:text-black"}`}
                >
                  {link.name}
                  <ArrowRight size={24} className={`opacity-0 group-hover:opacity-100 transition-all ${activeSection === link.id ? "opacity-100" : ""}`} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="mt-auto pb-12 flex flex-col gap-8 relative z-10">
              <div className="flex gap-8 text-black">
                <Github size={24} />
                <Linkedin size={24} />
                <Mail size={24} />
              </div>
              <p className="text-black/10 text-[10px] uppercase tracking-[0.4em]">
                © 2026 Rajveer Parmar
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;