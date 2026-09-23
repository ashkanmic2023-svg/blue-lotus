import "./Footer.css";
import logo from "../assets/blue-lotus-logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* About */}
        <div className="footer-column footer-about">

          <div className="footer-logo">
            <div className="footer-logo-mark">
            <img src={logo} alt="Blue Lotus" />
          </div>

            <div className="footer-logo-text">
              <strong>Blue Lotus</strong>
              <span>نیلوفر آبی</span>
            </div>
          </div>

          <p>
            نیلوفر آبی جایی برای کشف، تماشا و گفت‌وگو درباره
            فیلم‌ها، سریال‌ها و انیمه‌هاست.
            <br />
            هر داستان، فرصتی برای دیدن یک جهان تازه است.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>دسترسی سریع</h3>

          <a href="#">صفحه اصلی</a>
          <a href="#trending">آثار محبوب</a>
          <a href="#reviews">نقد و بررسی</a>
          <a href="#community">صدای تماشاگران</a>

        </div>


        {/* Social */}
        <div className="footer-column">

          <h3>ارتباط با ما</h3>

          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Telegram
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            X / Twitter
          </a>

          <a href="mailto:hello@bluelotus.com">
            Email
          </a>

        </div>


        {/* Support */}
        <div className="footer-column footer-support">

          <h3>پشتیبانی</h3>

          <p>
            نظری، پیشنهادی یا مشکلی داری؟
            <br />
            با ما در میان بگذار.
          </p>

          <button type="button" className="footer-support-button">
            ارسال پیام
            <span>←</span>
          </button>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

         <div className="footer-legal">
           <a href="#">Terms</a>
           <span>·</span>
           <a href="#">Privacy</a>
         </div>

       <div className="footer-credit">

          <span>ساخته شده با</span>

            <img
              src={logo}
              alt="Blue Lotus"
              className="footer-credit-logo"
             />

         <span>
            توسط Ashkan برای عاشقان داستان
         </span>

        </div>

     <div className="footer-copy">
       © 2026 Blue Lotus
     </div>

    </div>
    </footer>

     );
    }

export default Footer;