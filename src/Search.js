import { FaSearch } from "react-icons/fa";
import "./Search.css";

function Search() {
  return (
    <section className="search-section">

      <div className="container">

        <div className="search-content">
          
          <div className="search-box">

            <input
              type="text"
              placeholder="Search Healthcare Categories..."
            />

            <button className="btn-search"><FaSearch className="search-icon" /> </button>

          </div>

          <div className="popular-searches">

            <span>Popular:</span>

            <button>Paracetamol</button>
            <button>Vitamin C</button>
            <button>Baby Care</button>
            <button>Diabetes Care</button>
            <button>BP Monitor</button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Search;