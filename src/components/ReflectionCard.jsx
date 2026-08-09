import { BookOpen } from "lucide-react";

/**
 * بطاقة تأمل قابلة لإعادة الاستخدام
 */
export default function ReflectionCard({ reflection, onRead }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={reflection.image} alt={reflection.title} loading="lazy" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{reflection.title}</h3>
        <p className="card-description">{reflection.excerpt}</p>

        <div className="card-actions">
          <button className="btn btn-primary btn-sm" onClick={() => onRead(reflection)}>
            <BookOpen size={16} aria-hidden="true" />
            اقرأ التأمل
          </button>
        </div>
      </div>
    </article>
  );
}
