import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteInfo } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={close} aria-label="الصفحة الرئيسية">
          <span className="logo-cross" aria-hidden="true">✝</span>
          <span>{siteInfo.name}</span>
        </Link>

        <nav className="navbar-links" aria-label="التنقل الرئيسي">
          {siteInfo.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="navbar-menu-mobile" aria-label="قائمة الجوال">
          {siteInfo.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
