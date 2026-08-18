import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { Star, Quote, BookOpen, Heart } from "lucide-react";
import { maryVirtues } from "../data/maryVirtues.js";

/**
 * فضائل السيدة العذراء مريم العشر
 */
export default function Virtues() {
  return (
    <section className="section section--alt" id="virtues">
      <div className="container">
        <SectionHead
          icon={<Star size={16} aria-hidden="true" />}
          kicker="فضائلها"
          title="فضائل السيدة العذراء مريم"
          subtitle="عشر فضائل من حياة العذراء تلمس حياتنا وتقودنا نحو الله."
        />

        <div className="virtues-new-grid">
          {maryVirtues.map((virtue, index) => (
            <Reveal
              key={virtue.id}
              delay={(index % 4) + 1}
              className="virtue-new-card"
            >
              <div className="virtue-new-num" aria-hidden="true">
                {String(virtue.id).padStart(2, "0")}
              </div>

              <h3 className="virtue-new-title">{virtue.title}</h3>

              <div className="virtue-new-quote">
                <Quote size={14} aria-hidden="true" />
                <p>{virtue.quote}</p>
              </div>

              <div className="virtue-new-badge">{virtue.virtue}</div>

              <div className="virtue-new-verse">
                <BookOpen size={14} aria-hidden="true" className="virtue-new-verse-icon" />
                <blockquote>{virtue.scripture}</blockquote>
                <span className="virtue-new-ref">{virtue.reference}</span>
              </div>

              <p className="virtue-new-message">{virtue.message}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
