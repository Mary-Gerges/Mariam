import { useState } from "react";
import { Library } from "lucide-react";
import BookCard from "../components/BookCard.jsx";
import EmptyNotice from "../components/EmptyNotice.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  PageHero,
  SearchBar,
  FilterButtons,
  EmptyState,
} from "../components/PageHelpers.jsx";
import { books, bookCategories } from "../data/books.js";

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = books.filter((book) => {
    const matchesCategory = category === "all" || book.category === category;
    const matchesQuery =
      book.title.includes(query) ||
      book.author.includes(query) ||
      book.description.includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <PageHero
        title="كتب عن العذراء مريم"
        subtitle="مكتبة روحية من الكتب والدراسات عن سيرة أم النور وفضائلها."
      />

      <section className="section">
        <div className="container">
          {books.length === 0 ? (
            <EmptyNotice
              icon={<Library size={30} aria-hidden="true" />}
              title="لم يتم إضافة كتب بعد"
              text="سيظهر قريبًا بعد الإضافة"
            />
          ) : (
            <>
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="ابحث عن كتاب أو اسم الكاتب..."
              />
              <FilterButtons
                categories={bookCategories}
                active={category}
                onChange={setCategory}
              />

              <div className="grid grid-3" style={{ marginTop: 44 }}>
                {filtered.map((book, index) => (
                  <Reveal key={book.id} delay={(index % 3) + 1}>
                    <BookCard book={book} />
                  </Reveal>
                ))}
              </div>

              {filtered.length === 0 && (
                <EmptyState message="لا توجد كتب مطابقة لبحثك." />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
