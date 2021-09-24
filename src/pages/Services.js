import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import AllServices from '../components/AllServices';
import NavbarOtherPages from '../components/NavbarOtherPages';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Services = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

        return (
      <>   
          <NavbarOtherPages/>  
          <Hero hero='otherpagesHero'>
              <Banner title='Our services'>
                <Link to='/' data-aos='fade-up' className='btn-primary'>Return Home</Link>
              </Banner>
          </Hero>
          <AllServices />
      </>
        );
}
