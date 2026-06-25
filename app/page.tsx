import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <FeaturedWork />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
