"use client"

import { useState } from "react"
import "./Skills.css"
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend")

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => handleTabChange("frontend")}
          >
            <FaCode /> Frontend
          </button>
          <button
            className={`tab-btn ${activeTab === "backend" ? "active" : ""}`}
            onClick={() => handleTabChange("backend")}
          >
            <FaServer /> Backend
          </button>
          <button
            className={`tab-btn ${activeTab === "database" ? "active" : ""}`}
            onClick={() => handleTabChange("database")}
          >
            <FaDatabase /> Database
          </button>
          <button
            className={`tab-btn ${activeTab === "tools" ? "active" : ""}`}
            onClick={() => handleTabChange("tools")}
          >
            <FaTools /> Tools
          </button>
        </div>

        <div className="skills-content">
          {activeTab === "frontend" && (
            <div className="skills-grid">
              <SkillCard name="HTML" level="Intermediate" />
              <SkillCard name="CSS" level="Intermediate" />
              <SkillCard name="JavaScript" level="Beginner" />
              <SkillCard name="React" level="Beginner" />
              <SkillCard name="Tailwind CSS" level="Beginner" recommended />
              <SkillCard name="Bootstrap" level="Beginner" recommended />
              <SkillCard name="Next.js" level="Beginner" recommended />
              <SkillCard name="TypeScript" level="Beginner" recommended />
            </div>
          )}

          {activeTab === "backend" && (
            <div className="skills-grid">
              <SkillCard name="PHP" level="Intermediate" />
              <SkillCard name="Laravel" level="Intermediate" />
              <SkillCard name="API Development" level="Intermediate" />
              <SkillCard name="Node.js" level="Beginner" recommended />
              <SkillCard name="Express.js" level="Beginner" recommended />
              <SkillCard name="Python" level="Beginner" recommended />
              <SkillCard name="Django" level="Beginner" recommended />
            </div>
          )}

          {activeTab === "database" && (
            <div className="skills-grid">
              <SkillCard name="MySQL" level="Intermediate" />
              <SkillCard name="Database Design" level="Intermediate" />
              <SkillCard name="SQL" level="Intermediate" />
              <SkillCard name="MongoDB" level="Beginner" recommended />
              <SkillCard name="PostgreSQL" level="Beginner" recommended />
              <SkillCard name="Redis" level="Beginner" recommended />
            </div>
          )}

          {activeTab === "tools" && (
            <div className="skills-grid">
              <SkillCard name="Git" level="Intermediate" />
              <SkillCard name="GitHub" level="Intermediate" />
              <SkillCard name="VS Code" level="Intermediate" />
              <SkillCard name="Responsive Design" level="Intermediate" />
              <SkillCard name="Docker" level="Beginner" recommended />
              <SkillCard name="AWS" level="Beginner" recommended />
              <SkillCard name="Firebase" level="Beginner" recommended />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ name, level, recommended }) => {
  return (
    <div className="skill-card">
      <h3>{name}</h3>
      <div className="skill-level">
        <span className={`level ${level.toLowerCase()}`}>{level}</span>
        {recommended && <span className="recommended">Recommended</span>}
      </div>
      <div className="progress-bar">
        <div
          className={`progress ${level.toLowerCase()}`}
          style={{
            width: level === "Beginner" ? "30%" : level === "Intermediate" ? "60%" : "90%",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Skills
