import { useEffect, useRef, useState } from "react";

/**
 * مكوّن Reveal — يعرض المحتوى بحركة Fade Up عند وصوله لمنطقة العرض
 * باستخدام IntersectionObserver
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  style,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${visible ? "visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
