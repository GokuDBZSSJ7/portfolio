import DefaultLayout from "./layouts/DefaultLayout";
import Hero from './sections/Hero';
import FeatureHighlight from './sections/FeatureHighlight';
import FeatureCards from './sections/FeatureCards';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function App() {

 return (
    <DefaultLayout>
      <Hero />
      <FeatureHighlight />
      <FeatureCards />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </DefaultLayout>
  );
}

export default App
