import { Fragment } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { BookOpen, Quote, Sparkles } from "lucide-react";
import { lifeStory } from "../data/lifeStory.js";

export default function LifeStory() {
  return (
    <>
      <section className="section section--story" id="story">
        <div className="container">
          <SectionHead
            icon={<BookOpen size={16} aria-hidden="true" />}
            kicker="قصة حياتها"
            title={lifeStory.title}
            subtitle={lifeStory.subtitle}
          />
          <Reveal className="story-intro">
            {lifeStory.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt section--timeline" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="story-timeline">
            {lifeStory.stages.map((stage, index) => (
              <Reveal
                key={stage.id}
                as="article"
                delay={(index % 3) + 1}
                className={`story-stage${stage.mood === "calm" ? " story-stage--calm" : ""}${
                  stage.tall ? " story-stage--tall" : ""
                }`}
              >
                <div className="story-stage-media">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    loading="lazy"
                  />
                  {stage.imageCaption && (
                    <span className="story-stage-caption">{stage.imageCaption}</span>
                  )}
                </div>

                <div className="story-stage-body">
                  <div className="story-stage-head">
                    <span className="story-stage-num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <h3>{stage.title}</h3>
                  </div>
                  {stage.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {stage.quote && (
                    <blockquote className="story-stage-quote">{stage.quote}</blockquote>
                  )}
                  {stage.tradition && (
                    <div className="story-stage-tradition">
                      <h4>
                        <Sparkles size={15} aria-hidden="true" />
                        من التقليد الكنسي
                      </h4>
                      {stage.tradition.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {stage.ref && (
                    <span className="story-stage-verse">
                      <BookOpen size={14} aria-hidden="true" />
                      {stage.ref}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="timeline">
        <div className="container">
          <SectionHead kicker="المراحل" title="Timeline مختصر لحياة العذراء" />
          <div className="story-timeline-mini">
            {lifeStory.timeline.map((item, index) => (
              <Fragment key={item}>
                <Reveal delay={(index % 3) + 1} className="story-timeline-mini-item">
                  <span className="story-timeline-mini-num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="story-timeline-mini-text">{item}</span>
                </Reveal>
                {index < lifeStory.timeline.length - 1 && (
                  <span className="story-timeline-mini-arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead kicker="من الكتاب المقدس" title="آيات مميزة عن السيدة العذراء" />
          <div className="grid grid-3">
            {lifeStory.verses.map((verse, index) => (
              <Reveal
                key={index}
                delay={(index % 3) + 1}
                className="verse-card"
              >
                <Quote className="verse-icon" size={22} aria-hidden="true" />
                <p className="verse-text">{verse.text}</p>
                <span className="verse-ref">{verse.ref}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
