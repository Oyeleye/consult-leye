import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Title({title}) {
    useEffect(()=>{
        Aos.init({duration:200});
    },[]);
    return (
        <div data-aos='fade-right' className='section-title'>
            <h4>{title}</h4>  
            <div /> 
        </div>
    )
}
