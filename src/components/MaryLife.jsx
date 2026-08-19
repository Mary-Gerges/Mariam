import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { lifeStory } from "../data/lifeStory.js";

export default function MaryLife() {
  const previewStages = lifeStory.stages.slice(0, 6);

  return (
    <section className="section" id="mary-life">
      <div className="container">
        <SectionHead
          icon={<BookOpen size={16} aria-hidden="true" />}
          kicker="حياتها"
          title="حياة السيدة العذراء مريم"
          subtitle={lifeStory.subtitle}
        />

        <div className="ml-preview-grid">
          {previewStages.map((stage, i) => (
            <Reveal key={stage.id} delay={(i % 3) + 1}>
              <div className="ml-preview-card">
                <div className="ml-preview-num">{stage.id}</div>
                <h3 className="ml-preview-title">{stage.title}</h3>
                <p className="ml-preview-text">
                  {stage.paragraphs[0]}
                </p>
                {stage.quote && (
                  <p className="ml-preview-quote">{stage.quote}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head" style={{ marginTop: 44, marginBottom: 0 }}>
          <Link to="/about" className="btn btn-outline">
            اقرأ المزيد
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
