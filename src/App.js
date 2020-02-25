import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input/input";
import Output from "./Components/Output/output";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exchange </h1>
        </header>
        <section className="App-intro">
          <Input />
          <Output />
        </section>
      </div>
    );
  }
}

export default App;
