import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'; 
import SmallNavbar from '../components/SmallNavbar';

export default function Error() {
    return (
        <>
            <SmallNavbar/>
            <Hero>
                <Banner className='banner' title='ERROR!'>
                    <Link to='/' className='btn-primary'>Return Home</Link>
                </Banner>
            </Hero>
        </>
    );
}
