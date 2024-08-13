import React from 'react'
import "./what.css"
import book from "../../assets/book.png"
import grow from "../../assets/grow.png"
import media from "../../assets/media.png"
import market from "../../assets/market.png"
import present from "../../assets/present.png"
const What = () => {
  return (
    <section id="what">
    <div className="container">

   
<div className="we">

    <div className="fus">
    <h2>What We Do</h2>
    <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
    <button>Contact Us</button>
    </div>
    <div className="luis">
       <img src={book} alt="" />
       <h2>web Design & Dev </h2>
       <p>Social Media has changed the way we interact & do business while creating</p>
       <a href="">Read more</a>
    </div>
    <div className="tuis">
       <img src={grow} alt="" />
       <h2>Software Dev  </h2>
       <p>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
       <a href="">Read more</a>
    </div>
   
</div>
<div className="grow">
<div className="luis">
       <img src={market} alt="" />
       <h2>Digital Marketing </h2>
       <p>Social Media has changed the way we interact & do business while creating</p>
       <a href="">Read more</a>
    </div>
    <div className="tuis">
       <img src={present} alt="" />
       <h2>Content Writing </h2>
       <p>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
       <a href="">Read more</a>
    </div>
    <div className="tuis">
       <img src={media} alt="" />
       <h2>Support & Training </h2>
       <p>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
       <a href="">Read more</a>
    </div>
</div>
</div>
   </section>
  )
}

export default What