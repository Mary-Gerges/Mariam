import { Play, ExternalLink } from "lucide-react";

/**
 * غلاف الفيديو من يوتيوب تلقائيًا
 * إن لم توجد صورة مخصصة في البيانات
 */
const youTubeThumbnail = (youtubeId) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

/**
 * بطاقة ترنيمة / مديح / لحن قابلة لإعادة الاستخدام
 */
export default function HymnCard({ hymn, onPlay }) {
  const image = hymn.image || youTubeThumbnail(hymn.youtubeId);

  return (
    <article className="card">
      <div className="card-media">
        <img src={image} alt={hymn.title} loading="lazy" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{hymn.title}</h3>
        {hymn.description && (
          <p className="card-description">{hymn.description}</p>
        )}

        <div className="card-actions">
          <button className="btn btn-primary btn-sm" onClick={() => onPlay(hymn)}>
            <Play size={16} aria-hidden="true" />
            تشغيل
          </button>
          <a
            className="btn btn-outline btn-sm"
            href={hymn.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={15} aria-hidden="true" />
            YouTube
          </a>
        </div>
      </div>
    </article>
  );
}
