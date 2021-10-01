import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/oxylogo.png';
import youtubelogo from '../images/youtubelogo.png';
import instagramlogo from '../images/instagramlogo.png';
import linkedin from '../images/linkedin.png';
import {FaAlignRight} from 'react-icons/fa';
import CloseIcon from '@material-ui/icons/Close';
import SmallHomeNavbar from '../components/SmallHomeNavbar';


export default function Navbar() {

    const[isOpen, setIsOpen] = React.useState(false);  

    const toggleNavLinks = () =>{
      setIsOpen (isOpen =>!isOpen);
    }

    
        return (
          <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                  <Link to='/'>
                    <img src={logo} alt='My Portfolio'/>
                  </Link>
                  <button 
                    type='button' 
                    className='nav-btn'
                    onClick={toggleNavLinks}
                  >
                      {isOpen ? <CloseIcon className='nav-icon' data-aos='flip-right'/> : <FaAlignRight className='nav-icon' data-aos='flip-up'/> }
                  </button>
                </div>

                {isOpen? <SmallHomeNavbar /> : '' }

                <ul className='nav-links'>
                    <li>
                      <Link to='./' title='Home page'>Home</Link>
                    </li>
                    <li>
                      <Link to='./services' title='Our Services' >Services</Link>
                    </li>
                    <li>
                      <Link to='./about' title='About us' >About</Link>
                    </li>
                    <li>
                      <Link to='./collaborate' title='Collaborate'>Collaborate</Link>
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
        );
}

