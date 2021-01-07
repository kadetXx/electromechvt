import React from "react";
import "./Hero.scss";
import { Link } from "react-scroll";
import SimpleSlider from "../carousel/Carousel";

function Hero() {
  return (
<<<<<<< HEAD
    <div id='hero'>
      <div className="text-container">
        <h2>
        We are solving vertical transport <br/> problems. Daily.
        </h2>
=======
    <>
      <div id="hero">
        <SimpleSlider>
          <div className="text-container">
            <h2>
              Solving Vertical Transport <br /> Problems. Daily.
            </h2>
>>>>>>> d4cb89d9191e24247793bdff3f497acc892a8f8d

            <Link to="testScroll" smooth={true} duration={800}>
              <button>Explore</button>
            </Link>
          </div>

          {/* <div className="img-container">
                <img src="/assets/img/escalatorthree.png" alt=""/>
              </div> */}
        </SimpleSlider>
      </div>
    </>
  );
}

export default Hero;
