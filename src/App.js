import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input/input";
import Output from "./Components/Output/output";
import axios from "axios";

class App extends Component {
  state = {
    currencyarr: [],
    newar: []
  };

  componentDidMount() {
    axios.get(`http://api.nbp.pl/api/exchangerates/tables/a/`).then(res => {
      const currencyarr = res.data;
      this.setState({ currencyarr });
    });
  }

  exchanger(codeinp) {
    let val = 0;
    this.state.currencyarr.forEach(person => {
      person.rates.forEach(elem => {
        if (elem.code === codeinp) {
          val = elem.mid;
        }
      });
    });
    return val;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exchange </h1>
        </header>
        <section className="App-intro">
          <Input />
          <Output outp={this.exchanger("EUR")} />
        </section>
      </div>
    );
  }
}

export default App;
