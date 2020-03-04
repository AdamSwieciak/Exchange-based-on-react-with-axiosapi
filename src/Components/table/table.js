import React from "react";
import "./table.css";

const table = props => {
  return (
    <table summary="Table" id="Table">
      <caption>Current exchange rate:</caption>
      <tbody>
        <tr>
          <td>Currency</td>
          <td>Rate</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>{props.mainarr[0]}</td>
        </tr>
        <tr>
          <td>USD</td>
          <td>{props.mainarr[1]}</td>
        </tr>
        <tr>
          <td>CHF</td>
          <td>{props.mainarr[2]}</td>
        </tr>
        <tr>
          <td>HUF</td>
          <td>{props.mainarr[3]}</td>
        </tr>
        <tr>
          <td>UAH</td>
          <td>{props.mainarr[4]}</td>
        </tr>
        <tr>
          <td>JPY</td>
          <td>{props.mainarr[5]}</td>
        </tr>
        <tr>
          <td>CZK</td>
          <td>{props.mainarr[0]}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default table;
