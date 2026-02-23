import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
