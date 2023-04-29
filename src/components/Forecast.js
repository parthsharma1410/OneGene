import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navigation from "./Navbar";

const Forecast = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvFilePath = require("./forecast.csv");

    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  return (
    <>
      <Navigation />
      <h2 className="heading pad4">Forecast</h2>
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Code</th>
                <th scope="col">Product Name</th>
                <th scope="col">January</th>
                <th scope="col">February</th>
                <th scope="col">March</th>
                <th scope="col">April</th>
                <th scope="col">May</th>
                <th scope="col">June</th>
                <th scope="col">July</th>
                <th scope="col">August</th>
                <th scope="col">September</th>
                <th scope="col">October</th>
                <th scope="col">November</th>
                <th scope="col">December</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item["PRODUCT CODE"]}</td>
                  <td>{item["PRODUCT NAME"]}</td>
                  <td>{item["JAN"]}</td>
                  <td>{item["FEB"]}</td>
                  <td>{item["MAR"]}</td>
                  <td>{item["APR"]}</td>
                  <td>{item["MAY"]}</td>
                  <td>{item["JUN"]}</td>
                  <td>{item["JUL"]}</td>
                  <td>{item["AUG"]}</td>
                  <td>{item["SEP"]}</td>
                  <td>{item["OCT"]}</td>
                  <td>{item["NOV"]}</td>
                  <td>{item["DEC"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Forecast;
