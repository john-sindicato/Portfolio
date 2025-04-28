import "./Hero.css"
import profileImage from "../../assets/images/profile.jpg"
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from "react-icons/fa"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="fade-in">
            John Lloyd <span className="highlight">Fajardo</span> Abellanosa
          </h1>
          <p className="subtitle fade-in">Full Stack Web Developer</p>
          <p className="description slide-up">
            I build robust web applications with modern technologies. Specializing in PHP, Laravel, and expanding into
            React and JavaScript ecosystems.
          </p>

          <div className="hero-buttons slide-up">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="social-links slide-up">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:johnlloyd@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image fade-in">
          <div className="image-container">
            <img src={profileImage || "/placeholder.svg"} alt="John Lloyd Abellanosa" />
          </div>
        </div>
      </div>

      <div className="hero-shape"></div>
    </section>
  )
}

export default Hero
