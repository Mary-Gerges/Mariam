import { useState } from "react";
import { Mic } from "lucide-react";
import SermonCard from "../components/SermonCard.jsx";
import YouTubeModal from "../components/YouTubeModal.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  PageHero,
  SearchBar,
  FilterButtons,
  EmptyState,
} from "../components/PageHelpers.jsx";
import { sermons, sermonCategories } from "../data/sermons.js";

export default function SermonsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = sermons.filter((sermon) => {
    const matchesCategory = category === "all" || sermon.category === category;
    const q = query.trim().toLowerCase();
    if (!q) return matchesCategory;
    const haystack = [sermon.title, sermon.speaker]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesCategory && haystack.includes(q);
  });

  return (
    <>
      <PageHero
        title="عظات عن السيدة العذراء"
        subtitle="مكتبة من العظات الروحية التي تقودنا إلى حياة أم النور."
      />

      <section className="section">
        <div className="container">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="ابحث عن عظة أو اسم الخادم..."
          />
          <FilterButtons
            categories={sermonCategories}
            active={category}
            onChange={setCategory}
          />

          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {filtered.map((sermon, index) => (
              <Reveal key={sermon.id} delay={(index % 3) + 1}>
                <SermonCard sermon={sermon} onPlay={setActive} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <EmptyState message="لا توجد عظات مطابقة لبحثك." />
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
