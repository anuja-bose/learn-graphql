import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

function Content({children}) {
  return (
          <section id="hero">
          <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          {children}
          </div>
        </section>
      
  )
}

export default Content