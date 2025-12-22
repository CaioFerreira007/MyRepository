import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../styles/Layout.css";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.querySelector(".nav");
      const menuToggle = document.querySelector(".menu-toggle");

      if (
        isMenuOpen &&
        nav &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/" onClick={closeMenu}>
            <img className="logo" src={logo} alt="Logo" />
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={isMenuOpen ? "active" : ""}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/certifications" onClick={closeMenu}>
                Certifications
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <img
        className={`footer-logo ${isMenuOpen ? "active" : ""}`}
        src={logo}
        alt="Footer Logo"
      />

      <Outlet />
    </>
  );
}

export default Layout;
