import Hero from '@/components/home/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import AIAssistant from '@/components/AIAssistant';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <AIAssistant />
    </div>
  );
}
