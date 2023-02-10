import React from 'react';

const Rating = ({rating}) => {
    const stars= [1,2,3,4,5];
    
    return (
        <div className='rating'>
            {stars.map((star) => rating >= star ?(
                <img key={star.toString()} className="rating__icon"src='./star-full.png'alt='star'/>) :(
                <img key={star.toString()} className="rating__icon"src='./star-empty.png'alt='star'/>        
            )
            )}
            
        </div>
    );
};

export default Rating;