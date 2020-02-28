import React, { Component } from "react";
import "./App.css";
import Output from "./Components/Output/output";
import axios from "axios";

class App extends Component {
  state = {
    currencyarr: [],
    valueCurrency: "",
    valueEnter: 0,
    math: 0
  };

  // COLLECTION AXIOS DATE
  componentDidMount() {
    axios.get(`http://api.nbp.pl/api/exchangerates/tables/a/`).then(res => {
      const currencyarr = res.data;
      this.setState({ currencyarr });
    });
  }

  //FUNCTION RETURNED VALUE
  exchanger = codeinp => {
    let currencyValue = "";
    let math = 0;
    let enterValue = this.state.valueEnter;

    // Loop who find value of currency currencyValue=(np.3,14)
    this.state.currencyarr.forEach(person => {
      person.rates.forEach(elem => {
        if (elem.code === codeinp) {
          currencyValue = elem.mid;
        }
      });
    });

    //ROUNDING FUNCTION
    function Round(n, k) {
      var factor = Math.pow(10, k);
      return Math.round(n * factor) / factor;
    }

    //CHECK EMPTY OR NULL INPUT POOL
    if (enterValue === 0 || currencyValue === "") {
      math = 0;
    } else {
      math = Round(enterValue / currencyValue, 2) + " " + codeinp;
    }

    //RETURN END VALUE
    this.setState({ math });
  };
  //SELECT HANDLER
  handleChange = event => {
    this.setState({ valueCurrency: event.target.value });
  };
  //INPUT VALUE HANDLER
  handleChangeval = event => {
    this.setState({ valueEnter: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exchange </h1>
        </header>
        <section className="App-intro">
          <h1>Basic cantor based on react with api NBP</h1>
          <p>Enter value in PLN</p>
          <input
            type="number"
            placeholder="PLN"
            value={this.state.valueEnter}
            onChange={this.handleChangeval}
          />
          <p>Choose currency</p>
          <select
            name="currency"
            value={this.state.valueCurrency}
            onChange={this.handleChange}
          >
            <option value="">Choose</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dolar</option>
            <option value="CHF">Frank szwajcarski</option>
            <option value="HUF">Forint</option>
            <option value="UAH">Hrywna</option>
            <option value="JPY">Jen</option>
            <option value="CZK">Korona czeska</option>
          </select>
        </section>
        <Output vale={this.state.math} />
        <button onClick={() => this.exchanger(this.state.valueCurrency)}>
          Convert
        </button>
      </div>
    );
  }
}

export default App;
