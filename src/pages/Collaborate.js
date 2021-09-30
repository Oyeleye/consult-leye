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
                    download resume
                </Button>
            </div>
            <div className='collaborate'>
                <p className='collaborate-header'> Our Ads: </p>
                <p>Thanks for your interest in advertising on ConsultLeye / Oxygeneleye TV</p>
                <p>We produce actionable and engaging content aimed at helping people live better lives.</p>
                <p>Our audience is diverse and growing rapidly.</p>
                <p>If you’re interested in knowing more, simply write me an email and ask for a Media Pack.</p>
                <p>We will be happy to talk to you about the options.</p>
                <p>Our content covers Education (Studying Abroad), Money Saving, Investing, Lifestyle and more.</p>
                <br/>
                <p className='collaborate-header'>Our Values:</p>
                <p>This blog takes an Honest and Ethical approach to Money and explores how it can make our lives much better.</p>
                <p>We take the content we expose to our readers very seriously and prioritise content that helps to add real value to people.</p>
                <p>As such, we’ll politely decline any paid opportunities that simply do not complement what we do.</p>
                <p>We can discuss various types of advertising or sponsorship, so simply get in touch and enquire.</p>
                <p>Kindly email <a href='mailto:oxygeneleye@gmail.com'>oxygeneleye@gmail.com </a> if you have any questions or opportunities to work together.</p>
                <p>Much appreciated!</p>
                <p>Best,</p>
                <p>Oyeleye</p>
            </div>
        </>
   );
}
