import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Sparkles,
  Baby,
  Church,
  Star,
  MapPin,
  Moon,
  Cloud,
  Building2,
  Eye,
  CalendarDays,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { maryFeasts } from "../data/maryFeasts.js";

const iconMap = {
  annunciation: Sparkles,
  birth: Baby,
  temple: Church,
  incarnation: Star,
  egypt: MapPin,
  dormition: Moon,
  assumption: Cloud,
  church: Building2,
  appearance: Eye,
  monthly: CalendarDays,
};

function FeastCard({ feast, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;
  const delay = (index % 3) + 1;
  const Icon = iconMap[feast.icon] || Calendar;

  return (
    <Reveal delay={delay} className={`mf-row ${isLeft ? "mf-row--left" : "mf-row--right"}`}>
      <div className="mf-card">
        <div className="mf-card-top">
          <div className="mf-card-icon" aria-hidden="true">
            <Icon size={22} />
          </div>
          <span className="mf-card-num">{String(feast.id).padStart(2, "0")}</span>
        </div>

        <h3 className="mf-card-title">{feast.title}</h3>

        <div className="mf-card-dates">
          <span className="mf-date">
            <Calendar size={13} aria-hidden="true" />
            {feast.copticDate}
          </span>
          <span className="mf-date mf-date--miladi">
            <Calendar size={13} aria-hidden="true" />
            {feast.gregorianDate}
          </span>
        </div>

        <p className="mf-card-summary">{feast.summary}</p>

        <button
          className="mf-toggle"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "اقرأ أقل" : "اقرأ المزيد"}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`mf-toggle-icon ${expanded ? "rotated" : ""}`}
          />
        </button>

        {expanded && (
          <div className="mf-card-details">
            <p>{feast.details}</p>
          </div>
        )}
      </div>

      <div className="mf-dot" aria-hidden="true">
        <span className="mf-dot-inner" />
      </div>
    </Reveal>
  );
}

export default function MaryFeasts() {
  return (
    <section className="section section--alt" id="mary-feasts">
      <div className="container">
        <SectionHead
          icon={<Calendar size={16} aria-hidden="true" />}
          kicker="أعيادها"
          title="أعياد السيدة العذراء مريم"
          subtitle="تحتفل الكنيسة بعدة مناسبات مرتبطة بحياة السيدة العذراء مريم، تمتد من البشارة بميلادها وحتى ظهورها التاريخي، وتعكس هذه الأعياد مراحل رحلتها المباركة مع الله."
        />

        <div className="mf-timeline">
          <div className="mf-timeline-line" aria-hidden="true" />

          {maryFeasts.map((feast, i) => (
            <FeastCard key={feast.id} feast={feast} index={i} />
          ))}
        </div>

        <Reveal delay={1} className="mf-conclusion">
          <div className="mf-conclusion-inner">
            <div className="mf-conclusion-icon" aria-hidden="true">
              <Sparkles size={28} />
            </div>
            <h3 className="mf-conclusion-title">رحلة مباركة عبر الزمن</h3>
            <p className="mf-conclusion-text">
              تعكس هذه الأعياد رحلة السيدة العذراء مريم منذ الوعد الإلهي بميلادها،
              مرورًا بخدمتها وطاعتها لله وأمومتها للسيد المسيح، وحتى نياحتها وإكرام
              الكنيسة لها عبر الأجيال، لتظل مثالًا للإيمان والاتضاع والطاعة.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
