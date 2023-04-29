import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navigation from "./Navbar";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvFilePath = require("./masbom.csv");

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
      <h2 className="heading pad4">Master BOM Data</h2>
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Main Item Group</th>
                <th scope="col">Item Code</th>
                <th scope="col">Item</th>
                <th scope="col">Item Type</th>
                <th scope="col">Subgroup</th>
                <th scope="col">RM Item Code</th>
                <th scope="col">RM Item Name</th>
                <th scope="col">Req Qty</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item["S.No"]}</td>
                  <td>{item["Main Item Group"]}</td>
                  <td>{item["Item Code"]}</td>
                  <td>{item["Item"]}</td>
                  <td>{item["Item Type"]}</td>
                  <td>{item["Subgroup"]}</td>
                  <td>{item["RM Item Code"]}</td>
                  <td>{item["RM Item Name"]}</td>
                  <td>{item["Req Qty"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Data;
