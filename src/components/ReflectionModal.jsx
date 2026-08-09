import { useEffect } from "react";
import { X, Quote } from "lucide-react";

/**
 * مودال عرض التأمل الكامل
 */
export default function ReflectionModal({ reflection, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={reflection.title}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{reflection.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="إغلاق">
            <X size={20} />
          </button>
        </div>
        <div className="modal-body reflection-text">
          <img src={reflection.image} alt={reflection.title} />
          {reflection.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p style={{ display: "flex", alignItems: "center", gap: 8, color: "#3F8FB0", fontWeight: 700 }}>
            <Quote size={18} aria-hidden="true" />
            تأمل من مساحة «أم النور»
          </p>
        </div>
      </div>
    </div>
  );
}
