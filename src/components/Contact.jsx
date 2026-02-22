import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-surface/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-foreground">Get in Touch</h2>
                        <p className="text-foreground/70 mb-10 leading-relaxed">
                            Have a big idea or a brand to polish? Feel free to reach out.
                            I'm always open to discussing new projects and creative opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary shadow-lg shadow-primary/5">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-foreground/60">Email</div>
                                    <div className="font-bold text-foreground">hello@rajveer.dev</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-secondary shadow-lg shadow-secondary/5">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-foreground/60">Phone</div>
                                    <div className="font-bold text-foreground">+91 98765 43210</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-foreground/60">Location</div>
                                    <div className="font-bold text-foreground">Mumbai, India</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 glass p-8 rounded-3xl border border-primary/10 shadow-2xl shadow-primary/5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-foreground/70">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-foreground placeholder-primary/40"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-foreground/70">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-foreground placeholder-primary/40"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-foreground/70">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-foreground resize-none placeholder-primary/40"
                                placeholder="What's on your mind?"
                            />
                        </div>
                        <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-background font-bold text-lg hover:brightness-110 shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 group">
                            Send Message
                            <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
