import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <div className="text-2xl font-bold text-gradient mb-2">Rajveer.</div>
                        <p className="text-foreground/70 text-sm">Building digital excellence, one pixel at a time.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-3 glass rounded-full hover:text-primary transition-all hover:border-primary/30 border border-primary/5 shadow-xl shadow-primary/5"><Github className="w-5 h-5" /></a>
                        <a href="#" className="p-3 glass rounded-full hover:text-secondary transition-all hover:border-secondary/30 border border-secondary/5 shadow-xl shadow-secondary/5"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="p-3 glass rounded-full hover:text-accent transition-all hover:border-accent/30 border border-accent/5 shadow-xl shadow-accent/5"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="p-3 glass rounded-full hover:text-primary transition-all hover:border-primary/30 border border-primary/5 shadow-xl shadow-primary/5"><Instagram className="w-5 h-5" /></a>
                    </div>

                    <div className="text-foreground/50 text-sm font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} Rajveer. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
