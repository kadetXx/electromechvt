import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: true,
    };
    return (
      <div id = "carousel">
        <Slider {...settings}>
          <div>
            <div className= "image-container">
              <img src="/assets/img/cranetwo.jpg" alt="" />
            </div>
          </div>
          <div>
            <div  className= "image-container">
              <img src="/assets/img/cranethree.jpg" alt="" />
            </div>
          </div>
          <div>
            <div  className= "image-container">
              <img src="/assets/img/craneone.jpg" alt="" />
            </div>
          </div>
          <div>
            <div  className= "image-container">
              <img src="/assets/img/showcasethree.jpg" alt="" />
            </div>
          </div>
        </Slider>
        {this.props.children}
      </div>
    );
  }
}
