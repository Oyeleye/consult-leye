import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavbarOtherPages from '../components/NavbarOtherPages';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {  } from "module";

const useStyles = makeStyles(theme=> ({
    root: {
        textAlign: 'center',
        marginTop:10,
        display: 'flex',
        margin: '0 auto',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 400,
        padding: 15
    }
}));

export const Collaborate = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    const classes = useStyles();
    return (
        <>
            <NavbarOtherPages/>
            <Hero hero='otherpagesHero'> 
                <Banner title='Collaborate'>
                    <Link to='/' data-aos='fade-up' className='btn-primary'>Return Home</Link>
                </Banner>
            </Hero>
            <div className='links'>
                <Button variant='contained' className={classes.root} href='https://docs.google.com/document/d/1B9yvUT7O55_EVRIZqvGxOm2iv_FVWQpe0wBPJakVAKQ/export?format=pdf'>
                    download terms and conditions
                </Button>
            </div>
        </>
   );
}
