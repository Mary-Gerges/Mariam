import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Sparkles,
  Heart,
  ShieldCheck,
  Smile,
  Calendar,
  ScrollText,
  Church,
  Quote,
} from "lucide-react";

const sections = [
  { id: "life-story", label: "قصة حياتها", icon: BookOpen },
  { id: "mary-titles", label: "ألقابها ورموزها", icon: Sparkles },
  { id: "mary-virtues", label: "فضائلها", icon: Heart },
  { id: "mary-faith", label: "إيمانها", icon: ShieldCheck },
  { id: "spiritual-responses", label: "المشاعر والردود", icon: Smile },
  { id: "mary-feasts", label: "أعيادها", icon: Calendar },
  { id: "mary-verses", label: "آيات مميزة", icon: ScrollText },
  { id: "mary-church", label: "في حياة الكنيسة", icon: Church },
  { id: "quote-section", label: "الاقتباس", icon: Quote },
];

export default function StickyNav() {
  const [active, setActive] = useState(sections[0].id);
  const observer = useRef(null);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!targets.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.current.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="sticky-nav" aria-label="أقسام الصفحة">
      {sections.map((s) => {
        const Icon = s.icon;
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            className={`sticky-nav-item ${isActive ? "sticky-nav-item--active" : ""}`}
            onClick={() => scrollTo(s.id)}
            aria-current={isActive ? "true" : undefined}
          >
            <Icon size={16} aria-hidden="true" />
            <span>{s.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
