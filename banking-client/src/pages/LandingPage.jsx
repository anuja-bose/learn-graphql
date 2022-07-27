import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <>
          <h1>Welcome</h1>
          <h2> Thanks for providing me this oppurtunity</h2>
          <div className="d-flex">
            
            <Link to="/dashboard" className="btn-get-started scrollto"> Get Started </Link>
          </div>
       </>
    );
  }
}

export default LandingPage;