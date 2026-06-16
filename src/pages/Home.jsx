import { images } from "../assets/Images";
import Hero from "../components/ui/hero";
import About from "../sections/Home/About";
import Services from "../sections/Home/Services";
import SkillsPreview from "../sections/Home/SkillPreview";
import FadeIn from "../components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn>
        <Hero
          badge="Welcome"
          title="Hi, I'm Fatema"
          subtitle="A passionate graphic designer creating meaningful visual experiences."
          image={images.avatar}
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Services />
      </FadeIn>

      <FadeIn delay={0.2}>
        <About />
      </FadeIn>

      <FadeIn delay={0.3}>
        <SkillsPreview />
      </FadeIn>
    </>
  );
}