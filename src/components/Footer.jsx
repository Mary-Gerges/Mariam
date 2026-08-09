import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { siteInfo } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <span className="logo-cross" aria-hidden="true">✝</span>
              <span>{siteInfo.name}</span>
            </Link>
            <p>{siteInfo.subtitle}</p>
          </div>

          <nav className="footer-links" aria-label="روابط الموقع">
            <h4>روابط سريعة</h4>
            <ul>
              {siteInfo.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <ChevronLeft size={14} aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <span aria-hidden="true" className="footer-cross">✝</span>
        <span>
          جميع الحقوق محفوظة © أم النور — السيدة العذراء مريم. صُنع بواسطة{" "}
          <a
            href="https://www.linkedin.com/in/mary-gerges-aa607b2a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Mary Gerges
          </a>
        </span>
        <span aria-hidden="true" className="footer-cross">✝</span>
      </div>
    </footer>
  );
}
