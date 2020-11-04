import React from 'react'
import './ProductsServices.scss'

function ProductsServices() {
  return (
    <div id='ProductsServices'>
      <div className='page-title'>
        <h1>Products & Services</h1>
      </div>

      <div className="section-one">
        <h2>Our Services</h2>

        <ul>
          {
            [
              "Elevator sales",
              "General Repairs",
              "Servicing and maintenance",
              'Overhauling'
            ].map(item => (
            <li>{item}</li>
            ))
          }
        </ul>
      </div>

      <div className="section-three">
        <h2>Our Products</h2>

        <ul>
          {
            [
              "Elevators",
              "Escalators",
              "Supply gears",
              'Bearings'
            ].map(item => (
            <li>{item}</li>
            ))
          }
        </ul>
      </div>


    </div>
  )
}

export default ProductsServices
