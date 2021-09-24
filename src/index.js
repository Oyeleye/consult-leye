import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import './index.css';
import App from './App';
import { ServiceProvider } from './Context';

ReactDOM.render(
  <ServiceProvider>
     <Router>
       <App /> 
     </Router>
  </ServiceProvider>,
document.getElementById('root')
);

