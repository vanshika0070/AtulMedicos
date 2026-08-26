import { useState } from "react";
import "./Style.css";
import "./Header.css";
import { Link } from "react-router-dom";
import Offcanvas from "./Offcanvas";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav id="navbar">
        {/* LEFT SIDE */}
        <div className="nav-left">
          <button
            className={`nav-toggler ${isOpen ? "open" : ""}`}
            aria-label="Open navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a href="/" className="nav-logo">
            <img src="/images/logo.png" alt="Lazeez Logo" className="logo" />
          </a>
        </div>

        {/* CENTER LINKS */}
        <ul className="nav-links">        
           <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/healthtips">Health Tips</Link>
          </li>

          <a href="tel:+919818125138" ><button className="btn-white" >Call For Enquiry </button></a>
        </ul>
      </nav>

      <Offcanvas isOpen={isOpen} closeOffcanvas={() => setIsOpen(false)} />
    </header>
  );
}

export default Header;