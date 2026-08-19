import { BookOpen } from "lucide-react";

export default function ReflectionCard({ reflection, onRead }) {
  const isPdf = !!reflection.file;

  const handleOpen = () => {
    if (isPdf) {
      window.open(reflection.file, "_blank", "noopener,noreferrer");
    } else {
      onRead(reflection);
    }
  };

  return (
    <article className="card">
      {!isPdf && reflection.image && (
        <div className="card-media">
          <img src={reflection.image} alt={reflection.title} loading="lazy" />
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{reflection.title}</h3>
        <p className="card-description">{reflection.excerpt}</p>

        <div className="card-actions">
          <button className="btn btn-primary btn-sm" onClick={handleOpen}>
            <BookOpen size={16} aria-hidden="true" />
            {isPdf ? "فتح التأمل" : "اقرأ التأمل"}
          </button>
        </div>
      </div>
    </article>
  );
}
