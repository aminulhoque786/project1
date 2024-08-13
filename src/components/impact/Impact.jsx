import React from 'react'
import "./impact.css"
import {Row,Col, Container} from "react-bootstrap"
import light from "../../assets/light.png"
import gol from "../../assets/gol.png"
import col from "../../assets/col.png"
const Impact = () => {
  return (
   <section id="impos">
    <Container>

   <div className="tru">
   <h2>We create real impact</h2>
   <p>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
   </p>
   </div>
   <Row>
    
    <Col lg={8}>
    <div className="rai">
        <Row mt-5>

      <Col lg={2}>
      <img src={light} alt="" />
      
      
      </Col>
      <Col lg={6}>
      <h2>Strategy And research</h2>
      <p>Save money and start building your website using the best tools available on the market today.</p>
      </Col>
        </Row>
        <Row>
            <Col lg={2}>
            <img src={gol} alt="" />
            </Col>
            <Col lg={5}>
      <h2>Competitive analysis</h2>
      <p>With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
      </Col>
        </Row>
    </div>
    </Col>
    <Col lg={4}>
<div className="roy">
<img src={col}  alt="" />
</div>
    </Col>
  </Row>

    </Container>
   </section>
  )
}

export default Impact