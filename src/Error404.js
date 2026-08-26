import { Link } from "react-router-dom";
import "./Error404.css";

export default function Error404() {
  return (
    <section className="error404">
      <div className="error-content">

           <span className="error-tag">404 ERROR</span>

        <h1>Page Not Found</h1>

        <p>
          The page you're looking for doesn't exist, may have been moved,
          or the URL is incorrect.
        </p>
<div className="error-buttons">
  <Link to="/" className="btn-white">
    Back to Home
  </Link>

  <Link to="/projectsall" className="btn-dark">
    View Projects
  </Link>
</div>
      </div>
    </section>
  );
}








