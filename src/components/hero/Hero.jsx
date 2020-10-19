import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <div id='hero'>
      <div className="text-container">
        <h2>
          Electromechanics Vertical Transport Limited
        </h2>
      </div>

      <div className="img-container">
        <img src="/assets/img/escalatorthree.png" alt=""/>
      </div>
    </div>
  )
}

export default Hero
