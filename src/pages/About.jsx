import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import LifeStory from "../components/LifeStory.jsx";
import Virtues from "../components/Virtues.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import { PageHero } from "../components/PageHelpers.jsx";

export default function About() {
  return (
    <>
      <PageHero
        title="حياة السيدة العذراء مريم"
        subtitle="قصة حياة أم النور، رحلة إيمان وطاعة بدأت من بيت متواضع في الناصرة وصارت نورًا لكل البشرية."
      />
      <LifeStory />
      <Virtues />

      <section className="section section--alt" style={{ paddingTop: 0 }}>
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

      <QuoteSection />
    </>
  );
}
