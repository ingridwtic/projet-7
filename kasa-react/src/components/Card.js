import React from 'react';
import { Link, } from 'react-router-dom';



const Card = ({logement}) => {
    console.log(logement);
    return (
        <div className="Card">
            <div className="card-logement-layer">
                <p className="card-logement-title">{logement.title}</p>
                <Link className="navbar-item" activeclassname="is-active" to={`/DetailsHost/${logement.id}`}>
                    <img src={logement.cover} alt="location" />
                </Link>
            </div>	
        </div>
    );
};

export default Card ;