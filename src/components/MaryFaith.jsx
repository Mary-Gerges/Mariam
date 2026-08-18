import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import {
  ShieldCheck,
  Sparkles,
  Heart,
  BookOpen,
  ScrollText,
  Check,
} from "lucide-react";
import { maryFaith } from "../data/maryFaith.js";

const iconMap = { ShieldCheck, Sparkles, Heart, BookOpen, ScrollText };

function FaithBlock({ heading, icon: iconName, items, variant }) {
  const Icon = iconMap[iconName] || ShieldCheck;

  return (
    <Reveal className={`mff-block mff-block--${variant}`}>
      <div className="mff-block-head">
        <div className="mff-block-icon">
          <Icon size={22} aria-hidden="true" />
        </div>
        <h3 className="mff-block-title">{heading}</h3>
      </div>

      <ul className="mff-block-list">
        {items.map((item, i) => (
          <li key={i} className="mff-block-item">
            <span className="mff-check" aria-hidden="true">
              <Check size={12} />
            </span>
            <span className="mff-block-text">{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function MaryFaith() {
  const { whatIsFaith, greatestMoments, fruits, lessons, verses, conclusion } =
    maryFaith;

  return (
    <section className="section" id="mary-faith">
      <div className="container">
        <SectionHead
          icon={<ShieldCheck size={16} aria-hidden="true" />}
          kicker="إيمانها"
          title={maryFaith.title}
          subtitle={maryFaith.subtitle}
        />

        <div className="mff-hero">
          {/* العمود الأيمن — قسمان */}
          <div className="mff-side mff-side--right">
            <FaithBlock {...whatIsFaith} variant="a" />
            <FaithBlock {...greatestMoments} variant="b" />
          </div>

          {/* العمود الأوسط — الصورة */}
          <Reveal className="mff-center" delay={1}>
            <div className="mff-img-frame">
              <div className="mff-img-ring mff-img-ring--outer" aria-hidden="true" />
              <div className="mff-img-ring mff-img-ring--inner" aria-hidden="true" />
              <div className="mff-img-glow" aria-hidden="true" />
              <img
                src={maryFaith.image}
                alt={maryFaith.imageAlt}
                className="mff-img"
              />
            </div>
          </Reveal>

          {/* العمود الأيسر — قسمان + آيات */}
          <div className="mff-side mff-side--left">
            <FaithBlock {...fruits} variant="c" />
            <FaithBlock {...lessons} variant="d" />

            <Reveal className="mff-verses-block" delay={2}>
              <div className="mff-verses-head">
                <ScrollText size={18} aria-hidden="true" />
                <h3 className="mff-block-title">آيات كتابية</h3>
              </div>
              <div className="mff-verses-list">
                {verses.map((v, i) => (
                  <blockquote key={i} className="mff-verse">
                    <p>{v.text}</p>
                    <cite className="mff-verse-ref">{v.ref}</cite>
                  </blockquote>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* الخاتمة */}
        <Reveal delay={1} className="mff-conclusion">
          <div className="mff-conclusion-box">
            <div className="mff-conclusion-cross" aria-hidden="true">✦</div>
            <h3 className="mff-conclusion-title">{conclusion.heading}</h3>
            <div className="mff-conclusion-divider" aria-hidden="true" />
            <p className="mff-conclusion-text">{conclusion.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
