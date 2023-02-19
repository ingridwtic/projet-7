import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner__img" src="./banner.png" alt="nature" />
      <h1 className="banner__text">
        <span>Chez vous,</span>&nbsp;<span>partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Banner;
