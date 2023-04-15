import React from "react";
import "../../src/App.css";
import Navigation from "./Navbar";
import mainpage from "../onegene.png";

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="heading">Welcome to OneGene!</h2>
          <p className="para">
            Now accessing premium courses, <br />
            video lectures and assignments from the best sources <br />
            on the internet is possible on one single platform!<br />
            Access study material for 100+ subjects. <br />
            Sign up now for free!
          </p>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={mainpage} />
        </div>
      </div>
    </div>
  );
}