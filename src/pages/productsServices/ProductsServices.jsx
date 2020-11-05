import React, {useState} from "react";
import "./ProductsServices.scss";

function ProductsServices() {

  const [services, toggleServices] = useState(0)
  const [products, toggleProducts] = useState(0)

  return (
    <div id='ProductsServices'>
      <div className='page-title'>
        <h1>Products & Services</h1>
      </div>

      <div className='section-one'>
        <h2>Our Services</h2>

        <ul>
          {[
            {
              title: "Elevator sales",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
            {
              title: "General Repairs",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
            {
              title: "Servicing and maintenance",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
            {
              title: "Overhauling",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
          ].map((item, index) => (
            <li>
              <span onClick={() => services === index ? toggleServices(null) : toggleServices(index)}> 
                {item.title} 
                <i className='material-icons'>
                  {
                    services === index ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  }
                </i>
              </span>
              {
                services === index && (<span> {item.desc} </span>)
              }
            </li>
          ))}
        </ul>
      </div>

      <div className='section-three'>
        <h2>Our Products</h2>

        <ul>
          {[
            {
              title: "Elevators",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
            {
              title: "Escalators",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
            {
              title: "Supply gears",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
            {
              title: "Bearings",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            },
          ].map((item, index) => (
            <li>
              <span onClick={() => products === index ? toggleProducts(null) :  toggleProducts(index)}> 
                {item.title} 
                <i className='material-icons'>
                  {
                    services === index ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  }
                </i>
              </span>
              {
                products === index && (<span> {item.desc} </span>)
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsServices;
