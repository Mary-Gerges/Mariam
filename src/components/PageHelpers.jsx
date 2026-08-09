import { Search, SearchX } from "lucide-react";

/**
 * شريط بحث قابل لإعادة الاستخدام يعمل بـ React State فقط
 */
export function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <Search size={18} aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}

/**
 * قائمة تصنيفات (Filters) قابلة لإعادة الاستخدام
 */
export function FilterButtons({ categories, active, onChange }) {
  return (
    <div className="filters" role="group" aria-label="تصنيفات">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${active === cat.id ? "active" : ""}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

/**
 * حالة عدم وجود نتائج
 */
export function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <SearchX size={40} aria-hidden="true" style={{ margin: "0 auto 12px", opacity: 0.5 }} />
      <p>{message}</p>
    </div>
  );
}

/**
 * ترويسة صفحة داخلية
 */
export function PageHero({ title, subtitle }) {
  return (
    <div className="page-hero">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
