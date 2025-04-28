"use client"
import "./ThemeToggle.css"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`theme-toggle ${darkMode ? "dark" : "light"}`}
      onClick={toggleDarkMode}
      aria-label="Toggle theme"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
