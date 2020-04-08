import React, { Component } from "react";
import RightContent from "./RightContent.js";
import LeftContent from "./LeftContent.js";

class Main extends Component {
  
  render() {
    return (
        <div className="bill-content">
            <LeftContent />
            <RightContent />
        </div>
    );
  }
}

export default Main;
