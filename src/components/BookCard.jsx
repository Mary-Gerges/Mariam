import { ExternalLink, BookOpen } from "lucide-react";

/**
 * بطاقة كتاب قابلة لإعادة الاستخدام
 */
export default function BookCard({ book }) {
  return (
    <article className="card book-card">
      <div className="book-cover">
        <img src={book.cover} alt={`غلاف كتاب ${book.title}`} loading="lazy" />
      </div>

      <span className="book-category">{book.category}</span>
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="card-description">{book.description}</p>

      <div className="card-actions">
        <a
          className="btn btn-gold btn-sm"
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen size={16} aria-hidden="true" />
          اقرأ المزيد
        </a>
        <a
          className="btn btn-outline btn-sm"
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`فتح مصدر كتاب ${book.title}`}
        >
          <ExternalLink size={15} aria-hidden="true" />
          المصدر
        </a>
      </div>
    </article>
  );
}
