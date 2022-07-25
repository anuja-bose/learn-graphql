import React from 'react'
function Content({ children }) {
  return (
    <section id="content">
      <div className="main-container" data-aos="fade-up" data-aos-delay="150">
        {children}
      </div>
    </section>
  )
}

export default Content