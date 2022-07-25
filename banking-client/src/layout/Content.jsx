import React from 'react'
function Content({ children }) {
  return (
    <section id="hero" >
      <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
        {children}
      </div>
    </section>
  )
}

export default Content