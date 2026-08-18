import { useState, useMemo } from "react";
import { Search, SearchX, Library } from "lucide-react";
import BookCard from "../components/BookCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { PageHero } from "../components/PageHelpers.jsx";
import { books } from "../data/books.js";

export default function BooksPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHero
        title="مكتبة إم النور"
        subtitle="مجموعة من الكتب المسيحية للتأمل والقراءة والنمو الروحي."
      />

      <section className="section">
        <div className="container">
          {books.length === 0 ? (
            <div className="bk-empty">
              <div className="bk-empty-icon">
                <Library size={40} aria-hidden="true" />
              </div>
              <h3>لا توجد كتب متاحة حاليًا</h3>
              <p>سيتم إضافة الكتب قريبًا إن شاء الله.</p>
            </div>
          ) : (
            <>
              <div className="bk-search">
                <Search size={18} aria-hidden="true" className="bk-search-icon" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ابحث عن كتاب..."
                  className="bk-search-input"
                  aria-label="ابحث عن كتاب"
                />
              </div>

              {filtered.length > 0 ? (
                <div className="bk-grid">
                  {filtered.map((book, index) => (
                    <Reveal key={book.id} delay={(index % 4) + 1}>
                      <BookCard book={book} cover />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="bk-empty">
                  <div className="bk-empty-icon">
                    <SearchX size={36} aria-hidden="true" />
                  </div>
                  <h3>لم يتم العثور على كتب مطابقة لبحثك.</h3>
                  <button
                    className="btn btn-outline"
                    onClick={() => setQuery("")}
                  >
                    عرض جميع الكتب
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
