import React from "react";
import "../../src/App.css";
import Navigation from "./Navbar";
import mainpage from "../onegene.png";
// import loginpage from "../img/loginpage.svg";
// import signuppage from "../img/signuppage.svg";

export default function About() {
  return (
    <div className="container">
      <Navigation />
      <div className="">
        <div className="animate__animated animate__fadeIn marg2">
          <h2 className="heading pad2">Get to know OneGene</h2>
          <p className="para">
          WONJIN AUTOPARTS INDIA PRIVATE LIMITED is a TAMIL NADU based PRIVATE ltd. Company Registered at dated 19-SEP-2003 on Ministry of Corporate Affairs(MCA), The Corporate Identification Number (CIN) of WONJIN AUTOPARTS INDIA PRIVATE LIMITED is U34300TN2003PTC051635 and registration number is U34300TN2003PTC051635 It has been classified as COMPANY LIMITED BY SHARES and is registered under Registrar of Companies CHENNAI India. Authorized share capital of WONJIN AUTOPARTS INDIA PRIVATE LIMITED is Rs. 65000000 and its paid up capital is Rs. 64796190. It aspire to serve in MACHINERY and EQUIPMENTS N.E.C.MANUFACTURING activities across the India.

Its Annual General Meeting (AGM) was lastly conducted on 2015-03-31 and as per the records of Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 2015-03-31.

The registered Email address of WONJIN AUTOPARTS INDIA PRIVATE LIMITED is finance@onegeneindia.in and its registered address is PLOT NO.A1K, CMDA INDUSTRIALCOMPLEX, MARAIMALAI NAGAR-603 209. TAMIL NADU INDIA 603209 TAMIL NADU TAMIL NADU india 603209.

The current status of WONJIN AUTOPARTS INDIA PRIVATE LIMITED shows as an ACTIVE.
          </p>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          {/* <img src={mainpage} className="aboutimg"/> */}
          
          {/* <img src={signuppage} className="aboutimg"/> */}
        </div>
      </div>
    </div>
  );
}