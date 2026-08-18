import { BookOpen, Download } from "lucide-react";
import { usePdfCover } from "../hooks/usePdfCover.js";

export default function BookCard({ book, cover }) {
  const encodedFile = encodeURI(book.file);
  const coverSrc = usePdfCover(cover ? book.file : null);

  return (
    <article className="bk-card">
      <a
        href={encodedFile}
        target="_blank"
        rel="noopener noreferrer"
        className="bk-cover bk-cover-link"
        aria-label={`فتح كتاب ${book.title}`}
      >
        {coverSrc ? (
          <img src={coverSrc} alt={`غلاف كتاب ${book.title}`} className="bk-cover-img" />
        ) : (
          <div className="bk-cover-placeholder">
            <BookOpen size={48} className="bk-cover-lucide" />
            <span className="bk-cover-label">{book.title}</span>
          </div>
        )}
        <div className="bk-pdf-badge">
          <span>PDF</span>
        </div>
      </a>

      <div className="bk-body">
        <h3 className="bk-title">{book.title}</h3>
        {book.author && <p className="bk-author">{book.author}</p>}
        {book.description && <p className="bk-desc">{book.description}</p>}

        <div className="bk-actions">
          <a
            className="btn btn-primary btn-sm bk-btn"
            href={encodedFile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`قراءة كتاب ${book.title}`}
          >
            <BookOpen size={15} aria-hidden="true" />
            قراءة الكتاب
          </a>
          <a
            className="btn btn-outline btn-sm bk-btn"
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
