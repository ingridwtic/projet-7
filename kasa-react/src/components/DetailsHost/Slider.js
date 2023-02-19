import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  return (
    <div className="slider">
      {/**
        .map parcour les photos et créer les éléments HTML relatif pour chacune d'elle
       */}
      {slides &&
        slides.map((pictures, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "slide slider__active-picture"
                  : "slide slider__inactive-picture"
              }
            >
              {/**
               * Affichage de la photo si l'index correspond au current / la photo affichée
               */}
              {index === current && (
                <img src={pictures} alt="" className="slider__picture" />
              )}
            </div>
          );
        })}
      {/**
       * Vérification de la longueur, permet de na pas afficher les flèches si il n'y a qu'une photo
       * Utilisation des fonctions prevSlide et nextSlide déclarées en amont sur le clique
       */}
      {slides.length > 1 && (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="slider__pagination">
            {current + 1}/{slides.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Slider;
