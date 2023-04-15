import React from "react";
import "../App.css";
import Navigation from "./Navbar";
import mainpage from "../onegene.png";

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="heading pad2">Welcome to OneGene!</h2>
          <p className="para">
          ONEGENE India embodies the vision of the parent company- <br />to be “The Best One” in all our range of products.   <br />Our product portfolio includes a wide range of products used <br />in the Automotive A/C system like Condenser/Evaporator Manifold Assemblies,<br /> Heater/Evaporator Tubing, Sensor, A/C Lines with IHX (Internal Heat Exchanger),<br /> Evaporator Temp.   We have been constantly driving business <br />excellence based on our core values of Customer Orientation, <br />Respect for people, Technology Innovation and Quality Management. 
          </p>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s pad3">
          <img className="image1" src={mainpage} />
        </div>
      </div>
    </div>
  );
}