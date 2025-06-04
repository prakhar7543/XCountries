import React, { useEffect, useState } from "react";
import Cards from "./cards";

export default function CountryFlags() {
  let [data, setData] = useState([]);

  let fetchData = async () => {
    let url = "https://xcountries-backend.azurewebsites.net/all";

    try {
      let response = await fetch(url);

      if(!response){
        console.log('error in fetching data');
        
      }

      let data = await response.json();
      console.log("fetch data", data);
      setData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="container"
      style={{
        border: "1px solid grey",
      }}
    >
      <div
        className="countries"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",

          margin: "15px 7px",
        }}
      >
        {data.map((item) => (
          <Cards item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}
