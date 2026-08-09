import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import ReflectionCard from "./ReflectionCard.jsx";
import ReflectionModal from "./ReflectionModal.jsx";
import EmptyNotice from "./EmptyNotice.jsx";
import { reflections } from "../data/reflections.js";

export default function Reflections() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="reflections">
      <div className="container">
        <SectionHead
          icon={<BookOpen size={16} aria-hidden="true" />}
          kicker="التأملات"
          title="تأملات مع أم النور"
          subtitle="تأملات قصيرة هادئة تقودنا من سيرة العذراء إلى عمق حياتنا الروحية."
        />

        {reflections.length === 0 ? (
          <Reveal>
            <EmptyNotice
              icon={<BookOpen size={30} aria-hidden="true" />}
              title="لم يتم إضافة تأملات بعد"
              text="سيظهر قريبًا بعد الإضافة"
            />
          </Reveal>
        ) : (
          <>
            <div className="grid grid-3">
              {reflections.slice(0, 3).map((reflection, index) => (
                <Reveal key={reflection.id} delay={(index % 3) + 1}>
                  <ReflectionCard reflection={reflection} onRead={setActive} />
                </Reveal>
              ))}
            </div>

            <Reveal className="section-head" style={{ marginTop: 44, marginBottom: 0 }}>
              <Link to="/reflections" className="btn btn-outline">
                كل التأملات
                <ArrowLeft size={17} aria-hidden="true" />
              </Link>
            </Reveal>
          </>
        )}
      </div>

      {active && <ReflectionModal reflection={active} onClose={() => setActive(null)} />}
    </section>
  );
}
