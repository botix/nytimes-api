import React, {useState} from "react";
import InfoCard from "../InfoCard/InfoCard";
import { prepareCard } from "../../assets/helpers/cardDataNormalization";

export default function BasicCard(input){
  const [showInfo, setShowInfo] = useState(false);
  
  const data = prepareCard(input);
  const cardData = data.cardData;
  const infoData = data.infoData
  
  return(

    <div className="basic-card">
      <img 
        src={cardData.img}
        className={"basic-card-image"}
      />
      <p className={"basic-card-text"}>{cardData.description}</p>
      {showInfo ? <InfoCard info={infoData}/> : ""}
      <div className={"basic-card-button-container"}>
        <button 
          className={"basic-card-button"}
          onClick={() => setShowInfo(!showInfo)}
        >
          {cardData.textButtonLeft}
        </button>
        <button 
          className={"basic-card-button"}
          onClick={() => window.open(cardData.url, '_blank')}
        >
          {cardData.textButtonRight}
        </button>
      </div>
    </div>

  );
};