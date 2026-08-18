import Hero from "../components/Hero.jsx";
import AboutMary from "../components/AboutMary.jsx";
import MaryFaith from "../components/MaryFaith.jsx";
import Virtues from "../components/Virtues.jsx";
import SpiritualResponses from "../components/SpiritualResponses.jsx";
import MaryFeasts from "../components/MaryFeasts.jsx";
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
      <MaryFaith />
      <Virtues />
      <SpiritualResponses />
      <MaryFeasts />
      <Sermons />
      <Hymns />
      <Reflections />
      <Books />
      <QuoteSection />
    </>
  );
}
