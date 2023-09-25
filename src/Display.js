import React from "react";
import "./App.css";
import DisplayCard from "./DisplayCard.jsx";

const Display = (props) => {
  return (
    <div className="display">
      {props.data.map((data, index) => {
        return (
          <DisplayCard
            key={index}
            name={data.name}
            email={data.email}
            phone={data.phone}
            address={data.address}
            degreeProgram={data.degreeProgram}
          />
        );
      })}
    </div>
  );
};

export default Display;
