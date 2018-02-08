import React, { Component } from "react";
import Slider from "react-slick";
import "./Simple.css";

export default class FocusOnSelect extends Component {
  render() {
    const settings = {};
    return (
      <div className="simple_container">
        <h2>Focus On Select Slider</h2>
        <div className="simple_slider">
          <Slider focusOnSelect={true} slidesToShow={3} dots={true}>
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
