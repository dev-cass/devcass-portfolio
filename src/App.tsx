import { ParticlesBg } from "./components/Particles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesBg />
      <Navbar />
      <main className="flex-grow h-full">
        <Hero />
        <Projects id="projects" />
        <Skills id="skills" />
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  )
}

export default App
