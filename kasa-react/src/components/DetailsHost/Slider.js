import React, { useState } from 'react';

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const lenght = slides.length;
    const nextSlide = () => {
    const isLastSlide = current === lenght - 1;
    const newImage = isLastSlide ? 0 : current + 1;
    setCurrent(newImage)
        //setCurrent(current === lenght - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        const isFirstSlide = current === 0;
        const newImage = isFirstSlide ? lenght : current - 1;
        setCurrent(current === 0 ? lenght - 1 : current - 1);
        setCurrent(newImage)
    };
    const styleSlide = {backgroundImage : `url(${slides[current]})`};
    return (
        //<div className='slider'>
           // {slides.map((pictures, index) => {
           //return (
             //   <div key={index} className={index === current ?
               // "slide slider__active-picture"
               // : "slide slider__inactive-picture"}>
               //     {index ===current && (<img src={pictures} alt="" className='slider__picture' />
                //    )}
              //  </div>
          //  );
           // })}
           // {lenght > 1?(
             //  <>
              //  <div className='slider__previous' onClick={prevSlide}>
              //      <img src='./slider-left.png' alt='' className='slider__previous-icon' />
              //  </div>
              //  <div className='slider__next' onClick={nextSlide}>
                //    <img src='./slider-right.png' alt='' className='slider__next-icon' />
                //</div>
                //</>
           // ) : null} 
            
       // </div>
       <div className='background' style={styleSlide}></div>
       //<div>hello</div>
    );
};

export default Slider;