import React, { useEffect } from 'react'
import Aos from 'aos';
import {Link} from 'react-router-dom';
//import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import youtubelogo from '../images/youtubelogo.png';
import instagramlogo from '../images/instagramlogo.png';
import { Dialog, MenuItem } from '@material-ui/core';


export default function SmallNavbar() {
    useEffect(()=>{
      Aos.init({duration:2000});
    },[]);

    const scrollToBottom = () => window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior:'smooth'
    });
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [dialogOpen, setDialogOpen] = React.useState(false);
//    const [dialogUpdate, setDialogUpdate] = React.useState(false);
//    const [textChange, setTextChange] = React.useState(false);
//      const [inputText, setInputText] = React.useState(false);
    
      const menuOpen = Boolean(anchorEl);

    /*
        const handleDialogUpdate = () => {
            setDialogUpdate(true);
      };
      
      const toggleTextUpdate = () => {
        setTextChange(textChange=>!textChange);
      };
    */  
   /*
      const handleMenu = event => {
        setAnchorEl(event.currentTarget);
      }; 
    */
      const handleMenuClose = () => {
        setAnchorEl(null);
      };
    /*  
      const openDialog = (event) => {
        handleMenuClose(event);
        setDialogOpen(true);
      }
    */
      const closeDialog = (event) => {
        setDialogOpen(false);
      }
    /*
      const handleInputText = (event) => {
        setInputText(event.target.value);
      }
    */
        
    return (
        
        <nav className='small-home-navbar'	open={menuOpen} onClose={handleMenuClose} >
            <div className='smallnav-center'>
                <ul className='smallnav-links smallshow-home-nav'>
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
                      <MenuItem component={ Link } to='./' onClick={scrollToBottom}>Contact</MenuItem>
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
             <Dialog onClose={closeDialog} open={dialogOpen}>
				     </Dialog>	   
        </nav>
        
    )
}
