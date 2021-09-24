import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../Context';


export default class SingleServices extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType=ServiceContext;
       //componentDidMount(){}

    render() {
        const {getService} = this.context;
        const service = getService(this.state.slug);
        if(!service) {
            return (<div className='error'>
                      <h3>no such service could be found...</h3>
                      <Link to='/serivces' className='btn-primary'>
                       back to services  
                      </Link>
                   </div>   
            );
        }
        const {name} = service
        return (
            <Hero hero='projectsHero'>  
            <Banner title={`${name} service`}>
                <Link to='/services' className='btn-primary'>
                    back to services
                </Link> 
            </Banner>
            </Hero>
        );
    }
}
