import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function LanguageMenuDropdown() {


  const useStyles = makeStyles(theme => ({
    navLanguage: {
        color: '#fff',
        cursor: 'pointer',
    }
  })); 
  const classes = useStyles();
  
      return (
          <>
          <nav className='languagenavbar' >
              <div className='languagenav-center'>
                  <ul className='languagenav-links languageshow-nav'>
                      <li>
                        <Link to='./projects' className={classes.navLanguage}>En</Link>
                      </li>
                      <li>
                        <Link to='./motivation' className={classes.navLanguage}>De</Link>
                      </li>
                      <li>
                        <Link to='./resume' className={classes.navLanguage}>Fi</Link>
                      </li>
                  </ul>
               </div>   
          </nav>
          </>
          
      )
  }


export default LanguageMenuDropdown