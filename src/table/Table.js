import React, { useEffect, useState } from "react";
import "./table.css";
import axios from "axios";

const Table = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
      )
      .then((response) => {
        setInfo(response.data["Time Series (5min)"]);
      });
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>DateTime</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>

          {Object.entries(info).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value["1. open"]}</td>
                <td>{value["2. high"]}</td>
                <td>{value["3. low"]}</td>
                <td>{value["4. close"]}</td>
                <td>{value["5. volume"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
