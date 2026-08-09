import { useState } from "react";
import { BookOpen } from "lucide-react";
import ReflectionCard from "../components/ReflectionCard.jsx";
import ReflectionModal from "../components/ReflectionModal.jsx";
import EmptyNotice from "../components/EmptyNotice.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  PageHero,
  SearchBar,
  EmptyState,
} from "../components/PageHelpers.jsx";
import { reflections } from "../data/reflections.js";

export default function ReflectionsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = reflections.filter(
    (reflection) =>
      reflection.title.includes(query) ||
      reflection.excerpt.includes(query) ||
      reflection.content.some((p) => p.includes(query))
  );

  return (
    <>
      <PageHero
        title="تأملات مع أم النور"
        subtitle="تأملات هادئة في فضائل العذراء وحضورها في حياتنا."
      />

      <section className="section">
        <div className="container">
          {reflections.length === 0 ? (
            <EmptyNotice
              icon={<BookOpen size={30} aria-hidden="true" />}
              title="لم يتم إضافة تأملات بعد"
              text="سيظهر قريبًا بعد الإضافة"
            />
          ) : (
            <>
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="ابحث عن تأمل..."
              />

              <div className="grid grid-3" style={{ marginTop: 44 }}>
                {filtered.map((reflection, index) => (
                  <Reveal key={reflection.id} delay={(index % 3) + 1}>
                    <ReflectionCard reflection={reflection} onRead={setActive} />
                  </Reveal>
                ))}
              </div>

              {filtered.length === 0 && (
                <EmptyState message="لا توجد تأملات مطابقة لبحثك." />
              )}
            </>
          )}
        </div>
      </section>

      {active && (
        <ReflectionModal reflection={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
