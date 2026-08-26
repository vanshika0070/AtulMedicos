import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Left */}
          <div className="footer-left">
            <Link to="/" className="logo">
              <img
                src="/images/logo.png"
                alt="Vanshika Manav"
              />
            </Link>

            <p>© 2025</p>
          </div>

          {/* Right */}
          <div className="footer-right">

            <div className="social-icons">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDribbble />
              </a>

              <a
                href="https://behance.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="footer-bottom">
              <span>
                Made by <a href="/index"><strong> Vanshika </strong></a>
              </span>
              <span>
                Built in <strong>React</strong>
              </span>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;





