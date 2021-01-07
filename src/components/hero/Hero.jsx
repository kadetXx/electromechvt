import React from "react";
import "./Hero.scss";
import { Link } from "react-scroll";
import SimpleSlider from "../carousel/Carousel";

function Hero() {
  return (
    <>
      <div id="hero">
        <SimpleSlider>
          <div className="text-container">
            <h2>
              Solving Vertical Transport <br /> Problems. Daily.
            </h2>

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
