import Reveal from "./Reveal.jsx";

/**
 * ترويسة قسم قابلة لإعادة الاستخدام
 */
export default function SectionHead({ kicker, title, subtitle, icon }) {
  return (
    <Reveal className="section-head">
      {kicker && (
        <span className="section-kicker">
          {icon}
          {kicker}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="divider" aria-hidden="true">
        <span>✦</span>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
