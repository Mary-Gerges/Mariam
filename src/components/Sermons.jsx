import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mic } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import SermonCard from "./SermonCard.jsx";
import YouTubeModal from "./YouTubeModal.jsx";
import { sermons } from "../data/sermons.js";

export default function Sermons() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="sermons">
      <div className="container">
        <SectionHead
          icon={<Mic size={16} aria-hidden="true" />}
          kicker="العظات"
          title="عظات عن السيدة العذراء"
          subtitle="كلمات روحية من خدام الكنيسة تفتح لنا أبواب التأمل في حياة أم النور."
        />

        <div className="grid grid-3">
          {sermons.slice(0, 3).map((sermon, index) => (
            <Reveal key={sermon.id} delay={(index % 3) + 1}>
              <SermonCard sermon={sermon} onPlay={setActive} />
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head" style={{ marginTop: 44, marginBottom: 0 }}>
          <Link to="/sermons" className="btn btn-outline">
            كل العظات
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      {active && (
        <YouTubeModal
          title={active.title}
          youtubeId={active.youtubeId}
          description={active.description}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
