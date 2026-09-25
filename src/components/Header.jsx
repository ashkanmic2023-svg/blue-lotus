import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import blueLotusLogo from "../assets/blue-lotus-logo.png";
import { searchAll } from "../data/searchAll";
import "./Header.css";

function Header() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const suggestions = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return searchAll(q, 8);
  }, [query]);

  // Close on outside click + Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function goToResults(q) {
    const value = q.trim();
    if (!value) return;

    navigate(`/movies?q=${encodeURIComponent(value)}`);
    setIsOpen(false);
    setQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    goToResults(query);
  }

  function handleSuggestionClick() {
    setIsOpen(false);
    setQuery("");
  }

  return (
    <header className="header">
      <div className="container header-inner">

        <Link to="/" className="logo">
          <span className="logo-mark">
            <img
              src={blueLotusLogo}
              alt="Blue Lotus"
            />
          </span>

          <span className="logo-text">
            <strong>BLUE LOTUS</strong>
            <span>نیلوفرآبی</span>
          </span>
        </Link>

        <nav className="nav">
          <Link to="/" className="active">خانه</Link>
          <a href="#movies">فیلم‌ها</a>
          <a href="#series">سریال‌ها</a>
          <a href="#popular">محبوب‌ترین‌ها</a>
        </nav>

        <div className="header-actions">

          <div className="search-wrapper" ref={wrapperRef}>
            <form
              className="search"
              onSubmit={handleSubmit}
              role="search"
            >
              <input
                type="text"
                placeholder="جستجوی فیلم، سریال یا انیمه..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => {
                  if (query.trim()) setIsOpen(true);
                }}
              />

              <button type="submit" aria-label="جستجو">
                🔍
              </button>
            </form>

            {isOpen && suggestions.length > 0 && (
              <ul className="search-suggestions">
                {suggestions.map((item) => {
                  const target =
                    item.kind === "movie"
                      ? `/movies?q=${encodeURIComponent(item.title)}`
                      : item.kind === "series"
                      ? `/series/${item.slug}`
                      : `/anime/${item.slug}`;

                  return (
                    <li key={`${item.kind}-${item.id}`}>
                      <Link
                        to={target}
                        onClick={handleSuggestionClick}
                      >
                        <img
                          src={item.poster}
                          alt={item.title}
                          className="search-suggestions__poster"
                        />

                        <div className="search-suggestions__info">
                          <strong>{item.title}</strong>
                          <span>
                            {item.persianTitle} · {item.year}
                          </span>
                        </div>

                        <span
                          className={`search-suggestions__kind search-suggestions__kind--${item.kind}`}
                        >
                          {item.kindLabel}
                        </span>

                        <span className="search-suggestions__rating">
                          ★ {item.rating}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {isOpen && query.trim() && suggestions.length === 0 && (
              <ul className="search-suggestions search-suggestions--empty">
                <li>
                  <span>نتیجه‌ای پیدا نشد</span>
                </li>
              </ul>
            )}
          </div>

          <button className="profile-button" type="button">
            👤
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;
