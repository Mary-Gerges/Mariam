import { Link } from "react-router-dom";
import { ArrowLeft, Library } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import BookCard from "./BookCard.jsx";
import EmptyNotice from "./EmptyNotice.jsx";
import { books } from "../data/books.js";

export default function Books() {
  return (
    <section className="section" id="books">
      <div className="container">
        <SectionHead
          icon={<Library size={16} aria-hidden="true" />}
          kicker="المكتبة"
          title="كتب عن العذراء مريم"
          subtitle="مختارات من الكتب والدراسات التي تقرّبنا من سيرة أم النور وفضائلها."
        />

        {books.length === 0 ? (
          <Reveal>
            <EmptyNotice
              icon={<Library size={30} aria-hidden="true" />}
              title="لم يتم إضافة كتب بعد"
              text="سيظهر قريبًا بعد الإضافة"
            />
          </Reveal>
        ) : (
          <>
            <div className="grid grid-3">
              {books.slice(0, 3).map((book, index) => (
                <Reveal key={book.id} delay={(index % 3) + 1}>
                  <BookCard book={book} />
                </Reveal>
              ))}
            </div>

            <Reveal className="section-head" style={{ marginTop: 44, marginBottom: 0 }}>
              <Link to="/books" className="btn btn-outline">
                كل الكتب
                <ArrowLeft size={17} aria-hidden="true" />
              </Link>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
