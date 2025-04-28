import "./About.css"
import { FaGraduationCap, FaBriefcase, FaUser } from "react-icons/fa"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with experience in building full-stack applications. My journey in web
              development started with PHP and has evolved to include modern frameworks and technologies.
            </p>
            <p>
              I specialize in creating robust, scalable web applications with clean code and intuitive user interfaces.
              My goal is to continue growing as a developer and contribute to meaningful projects that solve real-world
              problems.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <FaUser />
              </div>
              <h3>Personal Info</h3>
              <ul>
                <li>
                  <strong>Full Name:</strong> <br /> John Lloyd Fajardo Abellanosa
                </li>
                <li>
                  <strong>Email:</strong> johnlloydabellanosa0@gmail.com
                </li>
                <li>
                  <strong>Location:</strong> <br /> 733 M.L. Quezon Street Cabancalan Mandaue City
                </li>
                <li>
                  <strong>Availability:</strong> <br /> Full-time / Freelance
                </li>
              </ul>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2018 - 2022</span>
                  <h4>Bachelor of Science in Information Technology</h4>
                  <p>ACLC College</p>
                </div>
                <div className="timeline-item">
                  <span className="date">2022</span>
                  <h4>Web Development Bootcamp</h4>
                  <p>Tech Academy</p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaBriefcase />
              </div>
              <h3>Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2022 - Present</span>
                  <h4>Web Developer</h4>
                  <p>Tech Solutions Inc.</p>
                  <ul>
                    <li>Developed and maintained web applications using Laravel</li>
                    <li>Implemented database solutions with MySQL</li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <span className="date">2021</span>
                  <h4>Intern</h4>
                  <p>Web Innovations</p>
                  <ul>
                    <li>Assisted in front-end development using HTML, CSS, and JavaScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
