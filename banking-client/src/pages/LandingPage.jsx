import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <>
          <h1>Welcome</h1>
          <h2> Thanks for providing me this oppurtunity</h2>
          <div className="d-flex">
            <a href="/dashboard" className="btn-get-started scrollto">Get Started</a>
          </div>
       </>
    );
  }
}

export default LandingPage;