import React from "react";
import Slider from "./Slider";

const FicheDetails = ({ slides }) => {
  return (
    <div className="ficheContainer">{slides && <Slider slides={slides} />}</div>
  );
};

export default FicheDetails;
