"use client"

import { useState, useEffect } from "react"
import "./ScrollToTop.css"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button className={`scroll-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTop
