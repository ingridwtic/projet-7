import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="notFound">
        <h1 className="notFound__number"> 404</h1>
        <p className="notFound__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="notFound__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
