import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Banner( {children, title, subtitle} ) {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <div className='banner'>
           <h1 data-aos='slide-left'> {title} </h1>
           <div />
           <p data-aos='slide-right'>{subtitle}</p>
           {children}
        </div>
    );

}

export default Banner;