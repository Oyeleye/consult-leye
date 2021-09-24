import React from 'react';
import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import { Services } from './pages/Services';
import {Collaborate} from './pages/Collaborate';
import SingleService from './pages/SingleService';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return ( 
    <> 
   <Navbar />
   <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/collaborate' component={Collaborate}/>
      <Route exact path='/About'  component={About}/>
      <Route exact path='/services/:slug'  component={SingleService} />
      <Route component={Error} />
    </Switch>

    </>
  );
   
}

export default App;
