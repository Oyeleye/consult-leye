import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import NavbarOtherPages from '../components/NavbarOtherPages';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <>
        <NavbarOtherPages/>
        <div className='animation-area'>
            <ul className='box-area'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='about-banner-center'>
               <Banner title='About us' subtitle='Read Below'>
                   <Link to='/' data-aos='fade-up' className='btn-primary'>Return Home</Link>
               </Banner>
            </div>
            <div className='about-body'>
            <div className='about-text' >
                Oyeleye presently works in Facebook, Inc., Dublin, Ireland, as a Business Analyst - Learning Technologist. He has previously worked with CPL, for one of the world’s leading tech companies, as a Community Operations Analyst. During that time, he worked on various software, alongside wonderful team, to passionately ensure that client’s 2 largest social media platforms, with over 2,000,000,000 monthly users, remained safe for these users. As a policy expert, he contributed to achieving this by analyzing data to assess accuracy against client’s policies and standards (e.g. cyber security policy, etc.). 
                <br/>
                <br/>
                More than a year experience working within a global team has not only immensely improved his technical skills, but also soft skills like time-management, research, communication, teamwork, problem-solving and people skills. Currently, he holds 4 university degrees, with the most recent ones (double degree) from Finland and Germany. Recently completed additional studies in IT (Principles of Progamming Graphical User Interfaces), from the University of Tampere, Finland. 
                <br/>
                <br/>
                As a tenacious programmer, he focuses on HTML5, CSS 3, Javascript, react.js, TypeScript and  SQL, as well as an excellent working knowledge of C#, PHP and C++. Open to learning new technologies. The brain behind Oxygeneleye TV, a YouTube channel where he teaches how to secure admissions and scholarships, especially in tuition-free universities in Europe.
                <br/>
                <br/>

Hobbies: 
1. Digital sound engineering with 8 year freelance experience (using software, such as sound forge, fruity loops, cubase, nuendo, sonar etc., and plug-ins like hypersonic, ravity, purity, izotope, etc.); 

2. Playing musical instruments (guitar, piano, euphonium, trumpet, cornet, drums and recorder); 

Passionate about creating a better world.
            </div>
            </div>
        </div>

        </>
        
    );
}

export default About;