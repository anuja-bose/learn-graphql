import React from 'react'
import { Container, Nav } from 'react-bootstrap';
function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="copyright">
          &copy; Copyright <strong><span>@2022</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Powered by cteam
        </div>
      </Container>
    </footer>
  )
}

export default Footer