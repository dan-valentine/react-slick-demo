import React, { Component } from "react";
import Slider from "react-slick";
import "./Simple.css";

export default class Responsive extends Component {
  render() {
    const responsive = [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ];

    return (
      <div className="simple_container">
        <h2>Responsive Slider</h2>
        <div className="simple_slider">
          <Slider
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            initialSlide={0}
            responsive={responsive}
          >
            <div>
              <h3 className="simple_slider_item">1</h3>
            </div>
            <div>
              <h3 className="simple_slider_item">2</h3>
            </div>
            <div>
              <h3 className="simple_slider_item">3</h3>
            </div>
            <div>
              <h3 className="simple_slider_item">4</h3>
            </div>
            <div>
              <h3 className="simple_slider_item">5</h3>
            </div>
            <div>
              <h3 className="simple_slider_item">6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
