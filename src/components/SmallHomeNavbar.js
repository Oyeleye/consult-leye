import React, { useEffect } from 'react'
import Aos from 'aos';
import {Link} from 'react-router-dom';
//import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import youtubelogo from '../images/youtubelogo.png';
import instagramlogo from '../images/instagramlogo.png';


export default function SmallNavbar() {
    useEffect(()=>{
      Aos.init({duration:2000});
    },[]);

    const scrollToBottom = () => window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior:'smooth'
    });

    return (
        
        <nav className='small-home-navbar' >
            <div className='smallnav-center'>
                <ul className='smallnav-links smallshow-home-nav'>
                    <li>
                      <Link to='./services'>Services</Link>
                    </li>
                    <li>
                      <Link to='./about'>About</Link>
                    </li>
                    <li>
                      <Link to='./collaborate'>Collaborate</Link>
                    </li>
                    <li>
                      <Link to='./' onClick={scrollToBottom}>Contact</Link>
                    </li>
                    <li>
                    <a href='https://www.youtube.com/channel/UCCuK-TWKyAD7PkzA1Ki_O-w' >
                         <img src={youtubelogo} alt='My Portfolio'/>
                      </a>  
                    </li>
                    <li>
                    <a href='https://www.instagram.com/oxygeneleye/' >
                         <img src={instagramlogo} alt='My Portfolio'/>
                      </a>   
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/in/oyedayo-oyeleye-a985b9bb/' >
                         <img src={linkedin} alt='My Portfolio'/>
                      </a>   
                    </li>
                </ul>
             </div>   
        </nav>
        
    )
}
