import React from 'react'
import './Hero.scss'

import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div id='hero'>
      <div className="text-container">
        <h2>
          Solving Vertical Transport <br/> Problems. Daily.
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
