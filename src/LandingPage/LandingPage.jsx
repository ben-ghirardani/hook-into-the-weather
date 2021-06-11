import React from 'react';
import './LandingPage.css';
import Search from '../Search/Search.jsx';
import Results from '../Results/Results.jsx';

function LandingPage(props) {

  return <div className="landing-page">
    {props.data === null ? <Search/> : <Results/>} 
  </div>
}

export default LandingPage;