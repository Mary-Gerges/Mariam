import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { Star } from "lucide-react";
import { siteInfo } from "../data/site.js";

/**
 * بطاقات فضائل العذراء
 */
export default function Virtues() {
  return (
    <section className="section section--alt" id="virtues">
      <div className="container">
        <SectionHead
          icon={<Star size={16} aria-hidden="true" />}
          kicker="فضائلها"
          title="فضائل تعلّمناها من العذراء"
          subtitle="في كل فضيلة من فضائلها تلمس حياتنا وتقودنا نحو الله."
        />

        <div className="grid virtues-grid">
          {siteInfo.virtues.map((virtue, index) => (
            <Reveal key={virtue.title} delay={(index % 5) + 1} className="virtue-card">
              <div className="virtue-icon" aria-hidden="true">
                <Star size={28} />
              </div>
              <h3 className="virtue-title">{virtue.title}</h3>
              <p className="virtue-text">{virtue.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
