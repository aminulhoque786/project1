import React from 'react'
import "./right.css"
import { Container,Card,Button,Row,Col} from "react-bootstrap"
import angry from "../../assets/angry .png"
import joker from "../../assets/joker.png"
import luv from "../../assets/luv.png"
const Right = () => {
  return (
  <Container>
    <section id="right">
    <div className="plan">
    <h2>Choose The Right Plan</h2>
</div>
<Row>

    <Col lg={4}>
    
    <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <h5>Basic</h5>
        <Card.Img variant="top" src={angry} />
        <Card.Text>
          <h3>160</h3>
          <p> Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}>
    <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <h5>Professional</h5>
        <Card.Img variant="top" src={luv} />
        <Card.Text>
          <h3>240</h3>
          <p>  Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features</p>
        </Card.Text>
    
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}>
    <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <h5>Exclusive</h5>
        <Card.Img variant="top" src={joker} />
        <Card.Text>
          <h3>325</h3>
          <p> Responsive Design
 Dynamic Elements
 Service Pages
 Custom Design & Features</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    
</Row>
    </section>
  </Container>
  )
}

export default Right