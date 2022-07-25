import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <section id="hero">
            <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
              <h1>Welcome</h1>
              <h2> Thanks for providing me this oppurtunity</h2>
              <div className="d-flex">
                <a href="/dashboard" className="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
          </section>
        );
    }
}

export default LandingPage;