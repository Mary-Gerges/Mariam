import { useState } from "react";
import { lifeStory } from "../data/lifeStory.js";
import { maryFaith } from "../data/maryFaith.js";
import { spiritualResponses } from "../data/marySpiritualResponses.js";
import { maryFeasts } from "../data/maryFeasts.js";
import { maryTitles } from "../data/maryTitles.js";
import { maryVirtues } from "../data/maryVirtues.js";
import Reveal from "../components/Reveal.jsx";
import { PageHero } from "../components/PageHelpers.jsx";
import {
  BookOpen,
  Quote,
  ShieldCheck,
  Sparkles,
  Heart,
  Calendar,
  ChevronDown,
  ChevronUp,
  Crown,
  Star,
} from "lucide-react";

/* ─── ألقابها ورموزها ─── */
function TitlesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="ml-section-head">
            <Crown size={22} className="ml-section-icon" />
            <h2 className="ml-section-title">{maryTitles.title}</h2>
          </div>
        </Reveal>

        <div className="ml-faith-grid">
          {maryTitles.titles.map((t, i) => (
            <Reveal key={i} delay={(i % 2) + 1}>
              <div className="ml-faith-card">
                <div className="ml-faith-card-head">
                  <Crown size={18} className="ml-faith-card-icon" />
                  <h3>{t.title}</h3>
                </div>
                <span className="ml-preview-badge">{t.badge}</span>
                {t.desc.map((d, j) => (
                  <p key={j} style={{ fontSize: "0.92rem", lineHeight: "1.9", color: "var(--text-soft)", marginBottom: 8 }}>{d}</p>
                ))}
                {t.quote && (
                  <blockquote className="ml-stage-quote">
                    <Quote size={18} className="ml-stage-quote-icon" />
                    <p>{t.quote}</p>
                    {t.ref && <cite>{t.ref}</cite>}
                  </blockquote>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── فضائلها العشر ─── */
function VirtuesSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="ml-section-head">
            <Star size={22} className="ml-section-icon" />
            <h2 className="ml-section-title">فضائل السيدة العذراء مريم العشر</h2>
          </div>
        </Reveal>

        <div className="ml-faith-grid">
          {maryVirtues.map((v, i) => (
            <Reveal key={v.id} delay={(i % 2) + 1}>
              <div className="ml-faith-card">
                <div className="ml-faith-card-head">
                  <Star size={18} className="ml-faith-card-icon" />
                  <h3>{v.title}</h3>
                </div>
                <p className="ml-preview-quote">{v.scripture}</p>
                <p style={{ fontSize: "0.92rem", color: "var(--text)", lineHeight: "1.8", marginTop: 10 }}>{v.message}</p>
                <span className="ml-preview-badge" style={{ marginTop: 10 }}>{v.reference}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── مراحل حياة العذراء ─── */
function LifeStages() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="ml-section-head">
            <BookOpen size={22} className="ml-section-icon" />
            <h2 className="ml-section-title">قصة حياة السيدة العذراء مريم</h2>
          </div>
        </Reveal>

        {lifeStory.stages.map((stage) => (
          <Reveal key={stage.id}>
            <article className={`ml-stage ${stage.mood === "calm" ? "ml-stage--calm" : ""}`}>
              <div className="ml-stage-header">
                <span className="ml-stage-num">{stage.id}</span>
                <h3 className="ml-stage-title">{stage.title}</h3>
              </div>
              <div className="ml-stage-body">
                {stage.image && (
                  <div className="ml-stage-img-wrap">
                    <img src={stage.image} alt={stage.title} className="ml-stage-img" loading="lazy" />
                  </div>
                )}
                <div className="ml-stage-content">
                  {stage.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {stage.quote && (
                    <blockquote className="ml-stage-quote">
                      <Quote size={18} className="ml-stage-quote-icon" />
                      <p>{stage.quote}</p>
                      {stage.ref && <cite>{stage.ref}</cite>}
                    </blockquote>
                  )}
                  {stage.tradition && (
                    <div className="ml-stage-tradition">
                      <h4>من التقليد الكنسي</h4>
                      {stage.tradition.map((t, j) => (
                        <p key={j}>{t}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── إيمانها ─── */
function FaithSection() {
  const { whatIsFaith, greatestMoments, fruits, lessons, conclusion } = maryFaith;
  const blocks = [whatIsFaith, greatestMoments, fruits, lessons];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="ml-section-head">
            <ShieldCheck size={22} className="ml-section-icon" />
            <h2 className="ml-section-title">{maryFaith.title}</h2>
            <p className="ml-section-sub">{maryFaith.subtitle}</p>
          </div>
        </Reveal>

        <div className="ml-faith-grid">
          {blocks.map((block, i) => (
            <Reveal key={i} delay={(i % 2) + 1}>
              <div className="ml-faith-card">
                <div className="ml-faith-card-head">
                  <Sparkles size={18} className="ml-faith-card-icon" />
                  <h3>{block.heading}</h3>
                </div>
                <ul className="ml-faith-list">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="ml-conclusion">
            <h3>{conclusion.heading}</h3>
            <p>{conclusion.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── مشاعرها الروحية ─── */
function SpiritualResponses() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="ml-section-head">
            <Heart size={22} className="ml-section-icon" />
            <h2 className="ml-section-title">المشاعر والردود الروحية للعذراء</h2>
            <p className="ml-section-sub">أحداث من الكتاب المقدس تكشف عمق الحياة الداخلية للسيدة العذراء مريم</p>
          </div>
        </Reveal>

        <div className="ml-sr-grid">
          {spiritualResponses.map((sr, i) => (
            <Reveal key={sr.id} delay={(i % 3) + 1}>
              <div className="ml-sr-card">
                <div className="ml-sr-num">{sr.id}</div>
                <h3 className="ml-sr-title">{sr.title}</h3>
                <p className="ml-sr-situation">{sr.situation}</p>
                <p className="ml-sr-response">{sr.response}</p>
                <blockquote className="ml-sr-verse">
                  <p>{sr.verse}</p>
                  <cite>{sr.reference}</cite>
                </blockquote>
                {sr.extraVerse && (
                  <blockquote className="ml-sr-verse">
                    <p>{sr.extraVerse}</p>
                    <cite>{sr.extraReference}</cite>
                  </blockquote>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── أعيادها ─── */
function FeastsSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="ml-section-head">
            <Calendar size={22} className="ml-section-icon" />
            <h2 className="ml-section-title">أعياد السيدة العذراء مريم</h2>
            <p className="ml-section-sub">10 مناسبات مقدسة من حياة السيدة العذراء مريم</p>
          </div>
        </Reveal>

        <div className="ml-feasts-grid">
          {maryFeasts.map((feast, i) => (
            <Reveal key={feast.id} delay={(i % 3) + 1}>
              <div className="ml-feast-card">
                <div className="ml-feast-head" onClick={() => setOpenId(openId === feast.id ? null : feast.id)}>
                  <div className="ml-feast-head-text">
                    <h3 className="ml-feast-title">{feast.title}</h3>
                    <div className="ml-feast-dates">
                      <span className="ml-feast-coptic">{feast.copticDate}</span>
                      <span className="ml-feast-sep">|</span>
                      <span className="ml-feast-greg">{feast.gregorianDate}</span>
                    </div>
                  </div>
                  {openId === feast.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                <p className="ml-feast-summary">{feast.summary}</p>
                {openId === feast.id && (
                  <div className="ml-feast-details">
                    <p>{feast.details}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── الصفحة الرئيسية ─── */
export default function MaryLifePage() {
  return (
    <>
      <PageHero title={lifeStory.title} subtitle={lifeStory.subtitle} />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="ml-intro">
              {lifeStory.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <LifeStages />

      <TitlesSection />

      <VirtuesSection />

      <FaithSection />
      <SpiritualResponses />
      <FeastsSection />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="ml-verses">
              <BookOpen size={24} className="ml-verses-icon" />
              <h3 className="ml-verses-title">آيات من الكتاب المقدس عن العذراء</h3>
              <div className="ml-verses-grid">
                {lifeStory.verses.map((v, i) => (
                  <blockquote key={i} className="ml-verse">
                    <p>{v.text}</p>
                    <cite>{v.ref}</cite>
                  </blockquote>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
