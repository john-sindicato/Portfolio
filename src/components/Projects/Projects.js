import "./Projects.css"
import shipmentSystemImg from "../../assets/images/ship.webp"
import coffeeShopImg from "../../assets/images/cafe.jpg"
/*import blogImg from "../../assets/images/blog.jpg"
import ecommerceImg from "../../assets/images/ecommerce.jpg" */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shipment System",
      description: "A comprehensive shipment tracking and management system built with PHP Native and Laravel.",
      image: shipmentSystemImg,
      tags: ["PHP", "Laravel", "JavaScript", "MySQL", "CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "Coffee Shop Management System",
      description: "A full-featured POS and inventory management system for coffee shops.",
      image: coffeeShopImg,
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    /*{
      id: 3,
      title: "Personal Blog",
      description: "A responsive blog built with modern web technologies.",
      image: blogImg,
      tags: ["React", "Next.js", "Tailwind CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "An online store with product catalog, cart functionality, and payment processing.",
      image: ecommerceImg,
      tags: ["Laravel", "MySQL", "JavaScript", "API Integration"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },*/
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
