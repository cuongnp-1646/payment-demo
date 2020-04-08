import React, { Component } from "react";


import "./css/App.css";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

class App extends Component {
  
  render() {
    return (
      <div className="bill-container">
		    <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
