import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

function Content({children}) {
  return (
    <Container className='ptb-20'>
        <Row>
          <Col>
          {children}
          </Col>
        </Row>
      </Container>
  )
}

export default Content