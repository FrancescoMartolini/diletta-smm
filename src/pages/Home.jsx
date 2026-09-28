import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro";
import Stats from "../components/sections/Stats";
import ServicesPreview from "../components/sections/ServicesPreview";
import SelectedWork from "../components/sections/SelectedWork";
import Testimonials from "../components/sections/Testimonials";

// La CTA finale è nel Footer (src/components/layout/Footer.jsx): compare
// su tutte le pagine tranne /contatti, quindi la Home si chiude con quella.
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <ServicesPreview />
      <SelectedWork />
      <Testimonials />
    </>
  );
}
