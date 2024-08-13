import React from 'react'
import "./people.css"
import john from "../../assets/john.png"
import { Container } from 'react-bootstrap'
import star from "../../assets/star.png"
const People = () => {
  return (
<section id="people">
<Container>
  <div className="sky">

<div className="the">
  <h2>What The People Thinks About Us </h2>
  <img src={john} alt="" />
  <br />
  <img src={star} alt="" />
</div>
<div className="star">

<p>Lesser Replenish bearing they’re him cattle kind dominion. You 
which fill place. Land she’d subdue divided gathering blessed
seasons it. Without, wherein days.</p>

</div>
<div className="ser">
  <h5>Lukan Depina</h5>
  <p>Ceo And Head Of Idea</p>
</div>
  </div>

</Container>
</section>
  )
}

export default People