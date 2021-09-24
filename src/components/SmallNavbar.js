import React from 'react'
import {Link} from 'react-router-dom';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';



export default function SmallNavbar() {

    return (
        
        <nav className='smallnavbar'>
            <div className='smallnav-center'>
                <ul className='smallnav-links smallshow-nav'>
                    <li>
                      <Link to='./'>Home</Link>
                    </li>
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
                      <a href='https://github.com/Oyeleye' >
                         <img src={githublogo} alt='My Portfolio'/>
                      </a>   
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/in/oyedayo-oyeleye-a985b9bb/' >
                         <img src={linkedin} alt='My Portfolio'/>
                      </a>   
                    </li>
                    <li className='smallnav-links2'>
                      <Link to='./'>En</Link> 
                      <Link to='./'>Fi</Link>
                      <Link to='./'>De</Link>
                    </li>
                </ul>
             </div>   
        </nav>
        
    )
}
