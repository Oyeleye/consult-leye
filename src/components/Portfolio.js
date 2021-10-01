import React, { useEffect } from 'react'
import Title from './Title';
import { FaUserGraduate, FaServer, FaDatabase, FaMusic, FaLaptop, FaEuroSign} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio () {
    useEffect(()=>{
        Aos.init({duration:2000});
     },[]);
     
    return (
        <section className='portfolios'>
            <Title title='Coaching | mentoring | teaching' />
                <div className='portfolios-center' >
                        <article className='portfolio'>
                            <span><FaUserGraduate/></span>
                            <h6>UNIVERSITY ADMISSIONS</h6>
                            <p>As a graduate who secured 7 university admissions and scholarships worth 140,000 EUR, I will be glad to guide you through securing the following:</p>
                            <p>Admissions</p>
                            <p>Scholarships</p>
                            <p>Tuition-free universities</p>
                            <p>Visa applications</p>
                        </article>
                        <article className='portfolio' >
                            <span><FaEuroSign/></span>
                            <h6>Financial Education</h6>
                            <p>We recently acquired our first property (a new build 3 bedroom in Ireland) in our 20s. To help you work towards your journey of financial independence, we can organize a 121 session where you learn the following:</p>
                            <p>Saving towards buying a house</p>
                            <p>Explaining mortgage application process in details through our experience.</p>
                        </article>
                        <article className='portfolio'>
                            <span><FaMusic/></span>
                            <h6>MUSIC PRODUCTION + MUSICAL INSTR </h6>
                            <p>Studio vocal recording, mixing and mastering</p>
                            <p>Musical software like Fruity loops, Cubase, Nuendo</p>
                            <p>Also, you can learn how to play musical instruments like guitar, piano, trumpet, recorder, euphonium, etc.</p>
                        </article>
                        <article className='portfolio' >
                            <span><FaLaptop/></span>
                            <h6>WEB DEVELOPMENT</h6>
                            <p>We can help you build your responsive and maintainable web application with the latest technologies in the tech industry.</p>
                            <p>With bachelor’s and 3 master’s degrees in Education and Technical disciplines from 3 different countries, as well as working for one of the biggest tech companies ever, we have got the right educational background, experiences and skills to educate and serve you.</p>
                        </article> 
                </div>
            </section>
    )
}
