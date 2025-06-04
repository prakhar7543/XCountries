import React from "react";

export default function Cards({ item }) {
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          border: "1px solid grey",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={item.flag}
          alt="pic"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            objectPosition: "center",
            paddingTop: "5px",
          }}
        />
        <p>{item.name}</p>
      </div>
    </div>
  );
}
