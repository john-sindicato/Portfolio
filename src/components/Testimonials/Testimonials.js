import "./Testimonials.css"
import { FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "John Lloyd delivered our project on time and with exceptional quality. His attention to detail and problem-solving skills were impressive.",
      name: "Sarah Johnson",
      position: "Project Manager, Tech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      quote:
        "Working with John Lloyd was a pleasure. He's not only technically skilled but also communicates effectively throughout the development process.",
      name: "Michael Chen",
      position: "CTO, Coffee Express",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      quote:
        "John Lloyd's expertise in Laravel and PHP helped us launch our platform ahead of schedule. I highly recommend his services.",
      name: "Emily Rodriguez",
      position: "Founder, StartupX",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} className="avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
