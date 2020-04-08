import React, { Component } from "react";
import logo from "../img/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="bill-header">
        <img src={logo} alt="logo" className="logo" />
        <h2>Checkout form</h2>
        <p>
          {
            "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
          }
        </p>
      </div>
    );
  }
}
export default Header;
