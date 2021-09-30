import React, { useEffect } from 'react';
import defaultImg from '../images/defaultBcg.jpeg';
//import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Service( { service } ) {
    const { name, images, codeUrl, serviceUrl } = service;
    /* useEffect(()=>{
            Aos.init({duration:2000});
        },[]); 
    */
     
    return (
        
        <article className='project'>
            <div /* data-aos='fade-up'*/ className='img-container'>
                <img src={images[0] || defaultImg} alt='single project'/>
                <a href={`${codeUrl}`} className='btn-primary  project-link'>
                    View
                </a>
                <a href={`${serviceUrl}`} className='btn-primary  project-link2'>
                    More
                </a>
            </div>
            <p className='project-info'>
                {name}
            </p> 
        </article>

    )
}
