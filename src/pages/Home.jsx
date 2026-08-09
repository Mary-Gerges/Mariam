import Hero from "../components/Hero.jsx";
import AboutMary from "../components/AboutMary.jsx";
import Virtues from "../components/Virtues.jsx";
import Sermons from "../components/Sermons.jsx";
import Hymns from "../components/Hymns.jsx";
import Reflections from "../components/Reflections.jsx";
import Books from "../components/Books.jsx";
import QuoteSection from "../components/QuoteSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMary />
      <Virtues />
      <Sermons />
      <Hymns />
      <Reflections />
      <Books />
      <QuoteSection />
    </>
  );
}
