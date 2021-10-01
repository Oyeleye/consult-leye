import React from 'react'
import {Link} from 'react-router-dom';
//import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import youtubelogo from '../images/youtubelogo.png';
import instagramlogo from '../images/instagramlogo.png';
import { MenuItem } from '@material-ui/core';

export default function SmallNavbar() {

    return (
        
        <nav className='smallnavbar'>
            <div className='smallnav-center'>
                <ul className='smallnav-links smallshow-nav'>
                    <li>
                      <MenuItem component={ Link } to='./'>Home</MenuItem>
                    </li>
                    <li>
                      <MenuItem component={ Link } to='./services'>Services</MenuItem>
                    </li>
                    <li>
                      <MenuItem component={ Link } to='./about'>About</MenuItem>
                    </li>
                    <li>
                      <MenuItem component={ Link } to='./collaborate'>Collaborate</MenuItem>
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
