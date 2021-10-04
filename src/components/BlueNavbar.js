
import React from 'react'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import LanguageMenuDropdown from './LanguageMenuDropdown';
import Clock from './Clock.js';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import Dialog from './Dialog.js';

export default function BlueNavbar() {
    const useStyles = makeStyles(theme => ({
        language: {
            color: '#fff',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
        },
        /* navLinks: {
            cursor: 'pointer',
        },    */       
        contact: {
            cursor: 'pointer',
        },
        navIcon: {
            color:'#fff',
            cursor: 'pointer',
            marginBottom: '-0.2rem',
        },
        clockIcon: {
            marginLeft: '28rem',
            top: 72,
            color:'#f7f7f7',
            cursor: 'pointer',
            position: 'fixed',
        },
    })); 
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);
    const [clockOpen, setClockOpen] = React.useState(false);


    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:'smooth'
      });

    const showLanguage = () => {
        setIsOpen (true)
    }
    const hideLanguage = () => {
        setIsOpen (false)
    }
    const toggleClock = () =>{
        setClockOpen (clockOpen => !clockOpen);
    } 

    return (
        <nav className='blue-navbar'>
            <div className='blue-nav-center'>
                <div className='blue-nav-header' >             
                    <AddIcCallIcon className='blue-nav-icon'/>
                </div>
                    <span className='blue-nav-links'>
                        <Link> {<Dialog />} </Link>
                        <Link onClick={scrollToBottom} className={classes.contact} title='Click to go to contact'>Contact</Link>
                        <a className={classes.navLinks} href='mailto:info@consultleye.com'>info@consultleye.com</a>
                    </span>
            </div>

            {isOpen? <LanguageMenuDropdown onMouseOver={showLanguage} onMouseOut={hideLanguage}/> : '' }               
        </nav>
    )
}