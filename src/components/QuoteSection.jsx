import { Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { siteInfo } from "../data/site.js";

export default function QuoteSection() {
  const stars = Array.from({ length: 10 }, (_, i) => ({
    left: `${(i * 43 + 9) % 100}%`,
    top: `${(i * 31 + 7) % 100}%`,
    size: 12 + ((i * 5) % 10),
    delay: `${(i % 4) * 0.8}s`,
  }));

  return (
    <section className="quote-section" aria-label="اقتباس">
      {stars.map((s, i) => (
        <Sparkles
          key={i}
          className="quote-star"
          aria-hidden="true"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}

      <div className="quote-inner">
        <Reveal>
          <div className="quote-cross" aria-hidden="true">✝</div>
          <blockquote className="quote-text">{siteInfo.quote}</blockquote>
          <p className="quote-source">— {siteInfo.quoteSource}</p>
        </Reveal>
      </div>
    </section>
  );
}
