import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PageNotFound = () => {
    return (
        <div>
            <Header />
            <div className='notFound'>
            <h1 className='notFound_number'> 404</h1>
            <p className='notFound_text'>
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