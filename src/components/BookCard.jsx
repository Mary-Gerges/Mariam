import { BookOpen, Download } from "lucide-react";
import { usePdfCover } from "../hooks/usePdfCover.js";

export default function BookCard({ book, cover }) {
  const encodedFile = encodeURI(book.file);
  const coverSrc = usePdfCover(cover ? book.file : null);

  return (
    <article className="card">
      <a
        href={encodedFile}
        target="_blank"
        rel="noopener noreferrer"
        className="card-media"
        aria-label={`فتح كتاب ${book.title}`}
      >
        {coverSrc ? (
          <img src={coverSrc} alt={`غلاف كتاب ${book.title}`} />
        ) : (
          <div className="bk-cover-placeholder">
            <BookOpen size={48} className="bk-cover-lucide" />
            <span className="bk-cover-label">{book.title}</span>
          </div>
        )}
        <span className="card-badge">PDF</span>
      </a>

      <div className="card-body">
        <h3 className="card-title">{book.title}</h3>
        {book.author && <p className="card-speaker">{book.author}</p>}
        {book.description && <p className="card-description">{book.description}</p>}

        <div className="card-actions">
          <a
            className="btn btn-primary btn-sm"
            href={encodedFile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`قراءة كتاب ${book.title}`}
          >
            <BookOpen size={15} aria-hidden="true" />
            قراءة الكتاب
          </a>
          <a
            className="btn btn-outline btn-sm"
            href={encodedFile}
            download={book.title + ".pdf"}
            aria-label={`تحميل كتاب ${book.title}`}
          >
            <Download size={15} aria-hidden="true" />
            تحميل
          </a>
        </div>
      </div>
    </article>
  );
}
