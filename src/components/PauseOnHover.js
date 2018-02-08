import React, { Component } from "react";
import Slider from "react-slick";
import "./Simple.css";

export default class FocusOnSelect extends Component {
  render() {
    return (
      <div className="simple_container">
        <h2>Pause On Hover Slider</h2>
        <div className="simple_slider">
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={500}
            pauseOnHover={true}
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
