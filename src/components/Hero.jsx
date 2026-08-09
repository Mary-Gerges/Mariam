import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";
import { siteInfo } from "../data/site.js";

/**
 * توليد نجوم متوهجة ثابتة داخل خلفية الهيرو
 */
function HeroStars() {
  const stars = Array.from({ length: 16 }, (_, i) => ({
    left: `${(i * 53 + 17) % 100}%`,
    top: `${(i * 37 + 11) % 100}%`,
    size: 10 + ((i * 7) % 10),
    delay: `${(i % 5) * 0.7}s`,
  }));

  return (
    <div className="hero-stars" aria-hidden="true">
      {stars.map((s, i) => (
        <Sparkles
          key={i}
          className="hero-star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <HeroStars />

      <div className="hero-halo" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">{siteInfo.heroTitle}</h1>
          <p className="hero-tagline">{siteInfo.heroTagline}</p>
          <p className="hero-paragraph">{siteInfo.heroParagraph}</p>

          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              {siteInfo.heroPrimaryButton}
              <ArrowLeft size={18} aria-hidden="true" />
            </Link>
            <Link to="/reflections" className="btn btn-outline">
              {siteInfo.heroSecondaryButton}
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-halo" aria-hidden="true" />

          {/* جزيئات ضوئية عائمة */}
          <span className="particle" style={{ top: "18%", right: "12%", width: 10, height: 10 }} />
          <span className="particle particle-2" style={{ bottom: "22%", left: "8%", width: 8, height: 8 }} />
          <span className="particle particle-3" style={{ top: "12%", left: "22%", width: 6, height: 6 }} />

          <img
            src={siteInfo.heroImage}
            alt={siteInfo.heroImageAlt}
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
