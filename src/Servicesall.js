import "./Products.css";
import "./Style.css";
import "./Breadcrumb.css";

import { Link } from "react-router-dom";
import Select from "./Select";

export const Servicesall = [
  {
    id: 1,
    title: "BankeAuction",
    desc: "Streamlined user experience for easier property discovery and navigation.",
    descs:
      "BankeAuctions is a platform that enables buyers to purchase properties through transparent online auctions.",
    image: "/images/bankeauction.avif",
    tags: ["UI/UX", "Web Design"],
    slug: "bankeauction",
    liveLink: "https://www.bankeauctions.com/",
    client: "Private Sector Bank",
    services: "Website Design, UI/UX",

    goal: {
      title: "The Goal",
      text: "The goal was to redesign the Banke Auctions platform from scratch with a focus on improving usability, clarity, and overall user experience. The aim was to simplify how users browse properties, understand auction details, and navigate the platform.",
      image: "/images/bankeauction.goal.avif",
    },

    challenge: {
      title: "The Challenge",
      text: "The existing platform presents large amounts of complex information, including property listings, legal details, and auction data, which can be difficult for users to process. A key challenge was restructuring this data into a clear and intuitive layout while ensuring that important information remained accessible. Additionally, designing a smoother experience for first-time users navigating the auction process required thoughtful planning.",
      image: "/images/bankeauction.challenge.avif",
    },

    result: {
      title: "The Result",
      text: "The redesigned interface delivers a more user-friendly and structured experience, making it easier to explore property listings and understand auction details. The improved layout and navigation reduce complexity and create a more accessible and modern platform experience.",
      image: "/images/bankeauction.result.avif",
    },
  },

  {
    id: 2,
    title: "Lazeez Restaurant",
    desc: "Updated and redesigned for improved usability and stronger brand identity.",
    descs:
      "Lazeez is a premium fine dining restaurant offering rich flavours, elegant ambience, and unforgettable dining experiences. Book your table online in seconds.",
    image: "/images/lazeez.avif",
    tags: ["React.js", "Frontend"],
    slug: "lazeez",
    liveLink: "https://lazeez-restaurant-lilac.vercel.app/",
    client: "Lazeez Restaurant",
    services: "React.js, Web Design, UI/UX Design, Frontend Development",

    goal: {
      title: "The Goal",
      text: "The goal was to create a modern, user-friendly restaurant website that makes exploring the menu and reserving a table simple and seamless.",
      image: "/images/lazeez.goal.avif",
    },

    challenge: {
      title: "The Challenge",
      text: "The main challenge was balancing luxury aesthetics with functionality. The website needed to communicate the restaurant's upscale identity while ensuring intuitive navigation, responsive layouts, smooth reservations, and an enjoyable experience across all devices.",
      image: "/images/lazeez.challenge.webp",
    },

    result: {
      title: "The Result",
      text: "The final product is a modern and responsive restaurant website built with React. It offers an engaging user experience through elegant visuals, streamlined reservations, interactive menu exploration, and improved accessibility, strengthening Lazeez's digital presence and customer engagement.",
      image: "/images/lazeez.result.webp",
    },
  },

  {
    id: 3,
    title: "Dart Creatives",
    desc: "Designed a modern website to enhance brand presence and client acquisition",
    descs:
      "Dart Creatives is a creative design agency delivering modern branding, web design, and digital solutions that help businesses build a strong online presence.",
    image: "/images/dart.webp",
    tags: ["React.js", "Frontend"],
    slug: "dartcreatives",
    liveLink: "https://dartcreatives.com/",
    client: "Dart Creatives",
    services: "Web Design, Web Development",

    goal: {
      title: "The Goal",
      text: "The goal was to redesign and enhance the dART Creatives website to create a more modern, professional, and engaging online presence.",
      image: "/images/dart.goal.webp",
    },

    challenge: {
      title: "The Challenge",
      text: "The existing website had multiple services and content sections but lacked clear structure and consistency.",
      image: "/images/dart.challenge.webp",
    },

    result: {
      title: "The Result",
      text: "The final result is a modern, interactive, and professional website that better represents the agency’s brand.",
      image: "/images/dart.result.webp",
    },
  },

  {
    id: 4,
    title: "Fervour",
    desc: "Created a modern e-commerce website concept for a design competition",
    descs:
      "Fervour is an online flower delivery platform offering fresh, handcrafted bouquets for every occasion with fast and reliable doorstep delivery.",
    image: "/images/fervour.webp",
    tags: ["UI/UX", "Frontend"],
    slug: "fervour",
    liveLink: "https://vanshika0070.github.io/fervour-blooms/",
    client: "E-commerce Design | Competition Project",
    services: "UI/UX, Web Designing",

    goal: {
      title: "The Goal",
      text: "The primary goal of Fervour is to offer creatives a sleek and sophisticated e-commerce website design.",
      image: "/images/fervour.goal.avif",
    },

    challenge: {
      title: "The Challenge",
      text: "Developed responsive layouts, interactive product modals, and form-based user interactions using HTML, CSS, and JavaScript.",
      image: "/images/fervour.challenge.avif",
    },

    result: {
      title: "The Result",
      text: "The project resulted in a visually polished and user-friendly interface that improves product discovery and overall usability.",
      image: "/images/fervour.result.avif",
    },
  },
];

function Servicesall() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <span className="current">Featured Work</span>
      </div>

      <section className="projects">
        <div className="container">
          <div className="section-heading">
            <span className="badge">● Our Services</span>

            <h2>
              Design That <span>Performs</span>
            </h2>

            <p>Supporting your wellbeing with trusted pharmacy services.</p>
          </div>

          <div className="projects-grid">
            {Servicesall.map((project) => (
              <div className="project-column" key={project.id}>
                <Link
                  to={`/projects/${project.slug}`}
                  state={{ from: "Servicesall" }}
                  className="project-card"
                >
                  <div className="project-image">
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    </div>

                    <button type="button" className="hover-btn">
                      Case Study
                    </button>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.desc}</p>

                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-footer"
                >
                  <span>View Live Site</span>
                  <div className="arrow">→</div>
                </a>
              </div>
            ))}
          </div>e
        </div>
      </section>

      <Select />
    </>
  );
}

export default Servicesall;