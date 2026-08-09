import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { Info } from "lucide-react";
import { siteInfo } from "../data/site.js";

export default function AboutMary() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          icon={<Info size={16} aria-hidden="true" />}
          kicker={siteInfo.aboutKicker}
          title={siteInfo.aboutTitle}
        />

        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="about-frame" aria-hidden="true" />
            <img
              src={siteInfo.aboutImage}
              alt={siteInfo.aboutImageAlt}
              className="about-image"
            />
          </Reveal>

          <Reveal className="about-body" delay={1}>
            {siteInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
