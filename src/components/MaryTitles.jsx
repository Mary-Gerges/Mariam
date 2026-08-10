import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import {
  BookOpen,
  ChevronDown,
  Crown,
  Flame,
  Cloud,
  Building2,
  Grape,
  Sun,
  Lamp,
  Sparkles,
  HeartHandshake,
  Trees,
} from "lucide-react";
import { maryTitles } from "../data/maryTitles.js";

const iconMap = {
  Crown,
  Flame,
  Cloud,
  Building2,
  Grape,
  Sun,
  Lamp,
  Sparkles,
  HeartHandshake,
  Trees,
};

const LONG_THRESHOLD = 220;

/**
 * بطاقة لقب / رمز واحدة مع إمكانية توسيع الشرح الطويل
 */
function TitleCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[item.icon];
  const fullText = item.desc.join(" ");
  const isLong = fullText.length > LONG_THRESHOLD;
  const collapsed = isLong && !expanded;

  return (
    <Reveal
      as="article"
      delay={(index % 3) + 1}
      className="title-card"
    >
      <span className="title-badge">{item.badge}</span>

      <div className="title-icon" aria-hidden="true">
        <Icon size={30} strokeWidth={1.7} />
      </div>

      <h3 className="title-card-title">{item.title}</h3>

      <div className={`title-card-desc${collapsed ? " is-collapsed" : ""}`}>
        {item.desc.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {item.quote && (
        <blockquote className="title-card-quote">{item.quote}</blockquote>
      )}

      {isLong && (
        <button
          type="button"
          className="title-toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "عرض أقل" : "اقرأ المزيد"}
          <ChevronDown
            size={16}
            className={`title-toggle-icon${expanded ? " rotated" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}

      {item.ref && (
        <span className="title-card-ref">
          <BookOpen size={14} aria-hidden="true" />
          {item.ref}
        </span>
      )}
    </Reveal>
  );
}

/**
 * قسم «ألقاب ورموز السيدة العذراء مريم»
 * يُعرض قبل قسم الفضائل في صفحة حياة العذراء
 */
export default function MaryTitles() {
  return (
    <section className="section section--titles" id="titles">
      <div className="container">
        <SectionHead kicker={maryTitles.kicker} title={maryTitles.title} />

        <Reveal className="titles-intro">
          {maryTitles.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="titles-divider" aria-hidden="true">
          <span>✦</span>
        </div>

        <div className="grid grid-3 title-grid">
          {maryTitles.titles.map((item, index) => (
            <TitleCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
