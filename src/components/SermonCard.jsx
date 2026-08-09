import { Play, ExternalLink, User, Clock } from "lucide-react";

/**
 * غلاف الفيديو من يوتيوب تلقائيًا
 * إن لم توجد صورة مخصصة في البيانات
 */
const youTubeThumbnail = (youtubeId) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

/**
 * بطاقة عظة قابلة لإعادة الاستخدام
 * @param {object} sermon بيانات العظة
 * @param {function} onPlay يفتح مودال الفيديو
 */
export default function SermonCard({ sermon, onPlay }) {
  const thumbnail = sermon.thumbnail || youTubeThumbnail(sermon.youtubeId);

  return (
    <article className="card">
      <div className="card-media">
        <img src={thumbnail} alt={sermon.title} loading="lazy" />
        {sermon.category && (
          <span className="card-badge">{sermon.category}</span>
        )}
        {sermon.duration && (
          <span className="card-duration">
            <Clock size={12} aria-hidden="true" style={{ verticalAlign: "-2px" }} /> {sermon.duration}
          </span>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{sermon.title}</h3>
        <p className="card-speaker">
          <User size={15} aria-hidden="true" />
          {sermon.speaker}
        </p>
        {sermon.description && (
          <p className="card-description">{sermon.description}</p>
        )}

        <div className="card-actions">
          <button className="btn btn-primary btn-sm" onClick={() => onPlay(sermon)}>
            <Play size={16} aria-hidden="true" />
            مشاهدة
          </button>
          <a
            className="btn btn-outline btn-sm"
            href={sermon.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={15} aria-hidden="true" />
            شاهد على YouTube
          </a>
        </div>
      </div>
    </article>
  );
}
