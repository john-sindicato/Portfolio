"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = localStorage.getItem("darkMode") === "true"

    // Set dark mode based on saved preference or system preference
    const initialDarkMode = savedTheme !== null ? savedTheme : prefersDark
    setDarkMode(initialDarkMode)

    // Apply the theme to the document immediately
    document.body.classList.toggle("dark-mode", initialDarkMode)
    document.documentElement.classList.toggle("dark-theme", initialDarkMode)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", newMode)

    // Apply the theme change to both document body and html element
    document.body.classList.toggle("dark-mode", newMode)
    document.documentElement.classList.toggle("dark-theme", newMode)
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header scrolled={scrolled} />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
