import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navigation from "./Navbar";

const SafetyStock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvFilePath = require("./safetystock.csv");

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
      <h2 className="heading pad4">Safety Stock</h2>
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Code</th>
                <th scope="col">Item</th>
                <th scope="col">Monthly</th>
                <th scope="col">Yearly</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item["Item Code"]}</td>
                  <td>{item["Item"]}</td>
                  <td>{item["Monthly"]}</td>
                  <td>{item["Yearly"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SafetyStock;
