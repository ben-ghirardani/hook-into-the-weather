import React from 'react';
import './LandingPage.css';
import backgroundSelector from '../BackgroundSelector/BackgroundSelector.jsx';


function LandingPage(props) {
  return <div>
    {console.log(backgroundSelector())}
  </div>
}

export default LandingPage;