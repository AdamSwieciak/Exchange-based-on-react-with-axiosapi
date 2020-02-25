import React from "react";

const input = props => {
  return (
    <div>
      <h1>Basic cantor with api NBP</h1>
      <p>Enter value</p>
      <input type="number" placeholder="PLN" />
      <p>Choose currency</p>
      <select name="currency" id="currency">
        <option value="EUR">Euro</option>
        <option value="USD">Dolar</option>
        <option value="CHF">Frank szwajcarski</option>
        <option value="HUF">Forint</option>
        <option value="UAH">Hrywna</option>
        <option value="JPY">Jen</option>
        <option value="CZK">Korona czeska</option>
      </select>
      <button>Convert</button>
    </div>
  );
};
export default input;
