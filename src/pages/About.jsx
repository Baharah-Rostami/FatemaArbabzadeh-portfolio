import Hero from "../components/ui/hero"
import AboutStory from "../sections/About/AboutStory"
import StatsSection from "../sections/About/Stats"
import { images } from "../assets/Images"
export default function About() {
    return (
        <div>
            <Hero
                badge="About Me"
                title="Empowering Communities Through Education"
                subtitle="Agriculture graduate with experience in educational programs, community development, and teaching. Passionate about learning, creativity, and making a positive impact through education."
                image={images.avatar}
            />
            <AboutStory/>
            <StatsSection/>
        </div>
    )
}
