import { useParams, Link, useLocation } from "react-router-dom";
import { productsall } from "./ProductsAll";
import "./Style.css";

function ProductsDetails() {
  const { slug } = useParams();

  const location = useLocation();
  const from = location.state?.from;

  const project = productsall.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <>
    <div className="breadcrumb">
  <Link to="/">Home</Link>

  {from === "productsall" && (
    <>
      <span className="separator">/</span>
      <Link to="/productsall">Featured Work</Link>
    </>
  )}

  {from === "freelance" && (
    <>
      <span className="separator">/</span>
      <Link to="/freelance">Start Your Project</Link>
    </>
  )}

  {from === "hire" && (
    <>
      <span className="separator">/</span>
      <Link to="/hire">Hire Me</Link>
    </>
  )}

  <span className="separator">/</span>

  <span className="current">
    {project.title}
  </span>
</div>


      {/* /////// */}

      <section className="project-hero">
        <div className="container">
        <div className="project-hero-grid">

  <div className="project-info">

    <h1>{project.title}</h1>

    {/* Mobile & Tablet Image */}
   <div className="project-preview mobile-preview">
  <img
    src={project.heroImage || project.image}
    alt={project.title}
  />
</div>


    <p className="project-description">
      {project.descs}
    </p>

    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-white"
    >
      Live Site Preview
    </a>

    <div className="project-meta">

      <div className="meta-item">
        <h5>Client</h5>
        <p>{project.client}</p>
      </div>

      <div className="meta-item">
        <h5>Services Provided</h5>
        <p>{project.services}</p>
      </div>

    </div>

  </div>

  {/* Desktop Only Image */}
<div className="project-preview desktop-preview">
  <img
    src={project.heroImage || project.image}
    alt={project.title}
  />
</div>

</div>


<br />
<hr />
<br />


{/* goal  */}
          <div className="projects-grid">
            <div className="project-info">

              <div className="project-meta">
                <div className="meta-item">
                  <h4>The Goal:</h4>
                  <p>{project.goal.text}</p>
                </div>
              </div>
              
            </div>

            <div className="project-preview">
              <img
                src={project.goal.image}
                alt={project.title}
              />
            </div>

          </div>


<br />
{/* challenge  */}
          <div className="projects-grid">
            <div className="project-meta">
                <div className="meta-item">
                  <h4>The Challenge:</h4>
                  <p>{project.challenge.text}</p>
                </div>
            </div>

            <div className="project-info">

               <div className="project-preview">
                <img
                  src={project.challenge.image}
                  alt={project.title}
                />
              </div>    
            </div>

          </div>
  
<br />

{/* result */}
          <div className="projects-grid">
            <div className="project-info">

              <div className="project-meta">
                <div className="meta-item">
                  <h4>The Result:</h4>
                  <p>{project.result.text}</p>
                </div>
              </div>
              
            </div>

            <div className="project-preview">
              <img
                src={project.result.image}
                alt={project.title}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;