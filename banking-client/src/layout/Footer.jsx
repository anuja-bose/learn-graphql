import React from 'react'
import {Nav} from 'react-bootstrap';
import NavigationBar from '../components/shared/NavigationBar';
function Footer() {
  return (
      <footer> 
          <NavigationBar>
            <Nav className="me-auto"> Powerd by cteam @ 2022 </Nav>
          </NavigationBar>
      </footer>
   
  )
}

export default Footer