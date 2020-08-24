import React from "react";
import { camelCaseToHumanReadable } from "../../assets/helpers/camelCaseToHumanReadable";


export default function InfoCard(input){

  let info = [];

  for (const [key, value] of Object.entries(input.info)) {
    info.push(
      <div className="info-card" key={Math.random()}>
        <span 
          key={Math.random()}
          className="info-card-element text-left"
        >
          {camelCaseToHumanReadable(key)}:
        </span>
        <span 
          key={Math.random()}
          className="info-card-element text-right"
        > 
          {value}
        </span>
      </div>
    )
  }

  return(
    <div className="info-card-container">
      {info}
    </div>
  );
};


