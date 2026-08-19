import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ScrollProgress } from "./components/ScrollProgress.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SermonsPage from "./pages/SermonsPage.jsx";
import HymnsPage from "./pages/HymnsPage.jsx";
import ReflectionsPage from "./pages/ReflectionsPage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import MaryLifePage from "./pages/MaryLifePage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/hymns" element={<HymnsPage />} />
          <Route path="/reflections" element={<ReflectionsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/life" element={<MaryLifePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
