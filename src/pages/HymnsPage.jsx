import { useState } from "react";
import { Music } from "lucide-react";
import HymnCard from "../components/HymnCard.jsx";
import YouTubeModal from "../components/YouTubeModal.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  PageHero,
  SearchBar,
  EmptyState,
} from "../components/PageHelpers.jsx";
import { hymnTabs, hymns } from "../data/hymns.js";

export default function HymnsPage() {
  const [tab, setTab] = useState(hymnTabs[0].id);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = hymns.filter((hymn) => {
    const matchesType = hymn.type === tab;
    const matchesQuery =
      hymn.title.includes(query) || hymn.description.includes(query);
    return matchesType && matchesQuery;
  });

  return (
    <>
      <PageHero
        title="ترانيم ومدايح العذراء"
        subtitle="أصوات تسبيح وألحان هادئة ترفع القلب في محبة السيدة العذراء."
      />

      <section className="section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="أنواع الترانيم">
            {hymnTabs.map((t) => (
              <button
                key={t.id}
                className={`tab-btn ${tab === t.id ? "active" : ""}`}
                onClick={() => setTab(t.id)}
                role="tab"
                aria-selected={tab === t.id}
              >
                <Music size={16} style={{ verticalAlign: "-3px", marginInlineEnd: 6 }} aria-hidden="true" />
                {t.label}
              </button>
            ))}
          </div>

          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="ابحث عن ترنيمة أو مديح..."
          />

          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {filtered.map((hymn, index) => (
              <Reveal key={hymn.id} delay={(index % 3) + 1}>
                <HymnCard hymn={hymn} onPlay={setActive} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <EmptyState message="لا توجد نتائج مطابقة لبحثك." />
          )}
        </div>
      </section>

      {active && (
        <YouTubeModal
          title={active.title}
          youtubeId={active.youtubeId}
          description={active.description}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
