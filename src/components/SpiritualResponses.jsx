import { Heart, BookOpen, Lightbulb, BookMarked } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { spiritualResponses } from "../data/marySpiritualResponses.js";

function ResponseCard({ event, index }) {
  const delay = (index % 4) + 1;

  return (
    <Reveal delay={delay} className="sr-card">
      <div className="sr-card-header">
        <span className="sr-card-num">{String(event.id).padStart(2, "0")}</span>
        <h3 className="sr-card-title">{event.title}</h3>
      </div>

      <div className="sr-card-body">
        <div className="sr-field">
          <div className="sr-field-icon sr-field-icon--situation">
            <BookOpen size={18} aria-hidden="true" />
          </div>
          <div className="sr-field-content">
            <span className="sr-field-label">الموقف الإنجيلي</span>
            <p>{event.situation}</p>
          </div>
        </div>

        <div className="sr-field">
          <div className="sr-field-icon sr-field-icon--response">
            <Lightbulb size={18} aria-hidden="true" />
          </div>
          <div className="sr-field-content">
            <span className="sr-field-label">المشاعر والرد الروحي</span>
            <p>{event.response}</p>
          </div>
        </div>

        <div className="sr-verse-block">
          <div className="sr-verse-icon">
            <BookMarked size={18} aria-hidden="true" />
          </div>
          <blockquote className="sr-verse-text">{event.verse}</blockquote>
          <span className="sr-verse-ref">{event.reference}</span>
        </div>

        {event.extraVerse && (
          <div className="sr-verse-block sr-verse-block--extra">
            <blockquote className="sr-verse-text">{event.extraVerse}</blockquote>
            <span className="sr-verse-ref">{event.extraReference}</span>
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function SpiritualResponses() {
  return (
    <section className="section" id="spiritual-responses">
      <div className="container">
        <SectionHead
          icon={<Heart size={16} aria-hidden="true" />}
          kicker="مشاعرها وردودها الروحية"
          title="المشاعر والردود الروحية للقديسة العذراء مريم كما دونها الإنجيل"
          subtitle="من خلال الأحداث التي سجلها الإنجيل، تظهر لنا ملامح روحية وإنسانية عميقة في شخصية القديسة العذراء مريم، من الاتضاع والتسليم، إلى الفرح والتأمل، والثبات أمام الألم، والمواظبة على الصلاة."
        />

        <div className="sr-timeline">
          <div className="sr-timeline-line" aria-hidden="true" />
          {spiritualResponses.map((event, i) => (
            <ResponseCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
