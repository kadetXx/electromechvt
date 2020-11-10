import React from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id='home'>
      <div className='section-one'>
        <Hero />
      </div>

      <div id='testScroll' className='section-two'>
        <div className='info-box'>
          <i className='fas fa-cubes'></i>
          <h3>Foward Design</h3>
          <p>
            We create unique designs specifically for you. You will always get a
            completed project you love. We guarantee it 100%.
          </p>
        </div>

        <div className='info-box'>
          <i className='fas fa-check-double'></i>
          <h3>Quality Products</h3>
          <p>
            We only hire the best in the business, so you can be sure you’re
            working the best designers, builders and inspectors.
          </p>
        </div>

        <div className='info-box'>
          <i className='fas fa-cogs'></i>
          <h3>Foward Design</h3>
          <p>
            We create unique designs specifically for you. You will always get a
            completed project you love. We guarantee it 100%.
          </p>
        </div>
      </div>

      <div className='section-three'>
        <h2>About Us</h2>
        <p>
          Objectively innovate empowered manufactured products whereas parallel
          platforms. Holisticly predominate extensible testing procedures for
          reliable supply chains. Dramatically engage top-line web services
          vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia
          based expertise and cross-media growth strategies. Seamlessly
          visualize quality intellectual capital without superior collaboration.
        </p>
      </div>

      <div className='section-four'>
        <div className='img-container'>
          {/* <img src="/assets/img/craneone.jpg" alt=""/> */}
        </div>

        <div className='img-container'>
          {/* <img src="/assets/img/craneone.jpg" alt=""/> */}
        </div>

        <div className='img-container'>
          {/* <img src="/assets/img/craneone.jpg" alt=""/> */}
        </div>

        <div className='img-container'>
          {/* <img src="/assets/img/craneone.jpg" alt=""/> */}
        </div>
      </div>

      <div className='section-five'>
        <h3>Are You Convinced Yet?</h3>
        <Link to='/contact'>
          <button>Contact Us</button>
        </Link>
      </div>

      <div className='section-six'>
        <p>
          Industry Experts Since 1987 <br /> Get In Touch Today!
        </p>
        <button>Our Products</button>
      </div>

      <div className='section-five'>
        <h3>Blog</h3>
        <button>Read latest news</button>
      </div>
    </div>
  );
}

export default Home;
