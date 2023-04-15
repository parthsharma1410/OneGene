import React from "react";
import "../App.css";
import Navigation from "./Navbar";
import mainpage from "../onegene.png";

export default function SafetyStock() {
  return (
    <div className="container">
      <Navigation />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="heading pad1">Safety Stock</h2>
          <h4 className="headig2">Part Code: <b>HC830HSUAB05</b></h4>
          <p className="para">Average Lead Time: <b>28 Days</b></p>
          <p className="para">Max Lead Time: <b>30 Days</b></p>
          <div>
  <table>
    <tr>
      <th>Month</th>
      <th>Forecasted Requirement</th>
      <th>Actual Requirement</th>
    </tr>
    <tr>
      <td>January</td>
      <td>2687</td>
      <td>2730</td>
    </tr>
    <tr>
      <td>February</td>
      <td>2201</td>
      <td>2190</td>
    </tr>
    <tr>
      <td>March</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>April</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>May</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>June</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>July</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>August</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>September</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>October</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>Nivember</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
    <tr>
      <td>December</td>
      <td>1364</td>
      <td>1260</td>
    </tr>
  </table></div>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img className="image1 marg3" src={mainpage} />
        </div>
      </div>
    </div>
  );
}