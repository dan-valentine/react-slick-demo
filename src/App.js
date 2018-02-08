import React, { Component } from "react";
import Simple from "./components/Simple";
import AutoPlay from "./components/AutoPlay";
import MultiBox from "./components/MultiBox";
import Responsive from "./components/Responsive";
import FocusOnSelect from "./components/FocusOnSelect";
import PauseOnHover from "./components/PauseOnHover";
import Vertical from "./components/Vertical";

class App extends Component {
  render() {
    return [
      <Simple />,
      <AutoPlay />,
      <MultiBox />,
      <Responsive />,
      <FocusOnSelect />,
      <PauseOnHover />,
      <Vertical />
    ];
  }
}

export default App;
