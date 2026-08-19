import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import LifeStory from "../components/LifeStory.jsx";
import MaryTitles from "../components/MaryTitles.jsx";
import Virtues from "../components/Virtues.jsx";
import MaryFaith from "../components/MaryFaith.jsx";
import SpiritualResponses from "../components/SpiritualResponses.jsx";
import MaryFeasts from "../components/MaryFeasts.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import StickyNav from "../components/StickyNav.jsx";
import { PageHero } from "../components/PageHelpers.jsx";
import { Quote } from "lucide-react";
import { lifeStory } from "../data/lifeStory.js";

export default function About() {
  return (
    <>
      <PageHero
        title="حياة السيدة العذراء مريم"
        subtitle="قصة حياة أم النور، رحلة إيمان وطاعة بدأت من بيت متواضع في الناصرة وصارت نورًا لكل البشرية."
      />

      <div className="about-layout">
        <aside className="about-sidebar">
          <StickyNav />
        </aside>

        <main className="about-main">
          <div id="life-story">
            <LifeStory />
          </div>

          <div id="mary-titles">
            <MaryTitles />
          </div>

          <div id="mary-virtues">
            <Virtues />
          </div>

          <div id="mary-faith">
            <MaryFaith />
          </div>

          <div id="spiritual-responses">
            <SpiritualResponses />
          </div>

          <div id="mary-feasts">
            <MaryFeasts />
          </div>

          <div id="mary-verses">
            <section className="section">
              <div className="container">
                <SectionHead kicker="من الكتاب المقدس" title="آيات مميزة عن السيدة العذراء" />
                <div className="grid grid-3">
                  {lifeStory.verses.map((verse, index) => (
                    <Reveal
                      key={verse.ref}
                      delay={(index % 3) + 1}
                      className="verse-card"
                    >
                      <Quote className="verse-icon" size={22} aria-hidden="true" />
                      <p className="verse-text">{verse.text}</p>
                      <span className="verse-ref">{verse.ref}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div id="mary-church">
            <section className="section">
              <div className="container">
                <SectionHead
                  kicker="حضورها"
                  title="العذراء في حياة الكنيسة"
                />
                <div className="grid grid-3">
                  {[
                    {
                      title: "أم الكنيسة",
                      text: "أوصانا السيد المسيح من على الصليب أن نأخذ مريم أمًا، وهي تبقى أمًا حاضرة لكل مؤمن ولكل الكنيسة.",
                    },
                    {
                      title: "شفيعتنا",
                      text: "تتشفع العذراء فينا عند ابنها، وتصلي لأجل الكنيسة كلها، كما كانت مع التلاميذ في العلية يوم الخمسين.",
                    },
                    {
                      title: "قدوتنا",
                      text: "تظل مريم مثالًا يحتذى في الإيمان والطاعة والتواضع، إذ كل جيل يطوّبها: «فإنه من الآن جميع الأجيال تطوّبني».",
                    },
                  ].map((item, index) => (
                    <Reveal key={item.title} delay={(index % 3) + 1} className="card">
                      <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-description">{item.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div id="quote-section">
            <QuoteSection />
          </div>
        </main>
      </div>
    </>
  );
}
