import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import MyFeaturedService from '../components/FeaturedServices';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToBottom from '../components/ScrollToBottom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../components/Navbar';
import BlueNavbar from '../components/BlueNavbar';


function Home () {
   useEffect(()=>{
      Aos.init({duration:2000});
   },[]);



   return (
      <> 
         <NavBar />
         <BlueNavbar />
         <Hero > 
            <Banner   title='CONSULT LEYE' subtitle='delighted to serve you'>
               <Link to='/services' data-aos='fade-up' className='btn-primary'>
                  See Services
               </Link>
            </Banner>
            <ScrollToBottom />
         </Hero>
         <ScrollToTop />
         <Portfolio/>
         <MyFeaturedService />
         <Contact />
      </>
   );;
   
}

export default Home;