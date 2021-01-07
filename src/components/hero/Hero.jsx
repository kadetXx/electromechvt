import React from 'react'
import './Hero.scss'


import { Link } from "react-scroll";

function Hero() {
  return (
    <div id='hero'>
      <div className="text-container">
        <h2>
        We are solving vertical transport <br/> problems. Daily.
        </h2>

        <Link to="testScroll" smooth={true} duration={800}>
          <button>Explore</button>
        </Link>
        
      </div>

      {/* <div className="img-container">
        <img src="/assets/img/escalatorthree.png" alt=""/>
      </div> */}
    </div>
  )
}

export default Hero
