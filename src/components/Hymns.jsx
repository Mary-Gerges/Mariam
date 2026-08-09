import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Music } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import HymnCard from "./HymnCard.jsx";
import YouTubeModal from "./YouTubeModal.jsx";
import { hymnTabs, hymns } from "../data/hymns.js";

export default function Hymns() {
  const [tab, setTab] = useState(hymnTabs[0].id);
  const [active, setActive] = useState(null);

  const filtered = hymns.filter((h) => h.type === tab);

  return (
    <section className="section section--alt" id="hymns">
      <div className="container">
        <SectionHead
          icon={<Music size={16} aria-hidden="true" />}
          kicker="الترانيم والمدايح"
          title="ترانيم ومدايح العذراء"
          subtitle="أصوات هادئة وألحان سماوية ترفع القلب في تسبيح لمريم وابنها."
        />

        <Reveal>
          <div className="tabs" role="tablist" aria-label="أنواع الترانيم">
            {hymnTabs.map((t) => (
              <button
                key={t.id}
                className={`tab-btn ${tab === t.id ? "active" : ""}`}
                onClick={() => setTab(t.id)}
                role="tab"
                aria-selected={tab === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-3">
          {filtered.map((hymn, index) => (
            <Reveal key={hymn.id} delay={(index % 3) + 1}>
              <HymnCard hymn={hymn} onPlay={setActive} />
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head" style={{ marginTop: 44, marginBottom: 0 }}>
          <Link to="/hymns" className="btn btn-outline">
            كل الترانيم والمدايح
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
