import blueLotusLogo from "../assets/blue-lotus-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        <a href="/" className="logo">
          <span className="logo-mark">
            <img
              src={blueLotusLogo}
              alt="Blue Lotus"
            />
          </span>

          <span className="logo-text">
            <strong>نیلوفر آبی</strong>
            <span>BLUE LOTUS</span>
          </span>
        </a>

        <nav className="nav">
          <a href="/" className="active">خانه</a>
          <a href="#movies">فیلم‌ها</a>
          <a href="#series">سریال‌ها</a>
          <a href="#popular">محبوب‌ترین‌ها</a>
        </nav>

        <div className="header-actions">

          <div className="search">
            <input
              type="text"
              placeholder="جستجوی فیلم، سریال یا انیمه..."
            />

            <button type="button">
              🔍
            </button>
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