import { Link } from "react-router-dom";

function Offcanvas({ isOpen, closeOffcanvas }) {
  return (
    <>
      <div
        className={`offcanvas-overlay ${isOpen ? "active" : ""}`}
        onClick={closeOffcanvas}
      />
      <div className={`offcanvas ${isOpen ? "active" : ""}`}>
        <button
          className="offcanvas-close"
          aria-label="Close navigation"
          onClick={closeOffcanvas}
        >
          <span></span>
          <span></span>
        </button>

<div className="inner">
 <Link to="/home">
  <h3>ATUL MEDICOS</h3>
</Link>
<h4>  Your Health, Our Care  </h4>
</div>


        <ul className="offcanvas-links">
          <li>
            <Link to="/about" onClick={closeOffcanvas}>👤 About</Link>
          </li>
          <li>
            <Link to="/products" onClick={closeOffcanvas}>💊 Products</Link>
          </li>
          <li>
            <Link to="/healthtips" onClick={closeOffcanvas}>❤️ Health Tips</Link>
          </li>

  <a href="tel:+919818125138" ><button className="btn-white" >Call For Enquiry </button></a>

   <a
  href="https://wa.me/9266363466?text=Hello%20Atul%20Medicos!%20I%20have%20an%20enquiry."
  target="_blank"
  rel="noopener noreferrer"
  className="btn-white"
>
  WhatsApp
</a>
        </ul>
      </div>
    </>
  );
}

export default Offcanvas;