import React from 'react';
import './LandingPage.css';
import Results from '../Results/Results.jsx';
import Header from '../Header/Header.jsx';
// import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong.jsx';

function LandingPage(props) {
  return <div className="landing-page">
    <Header
      applyLocation={props.applyLocation}
    >
    </Header>
    
    <Results 
      forecast={props.forecast}
      location={props.location}
      tempCentHigh={props.tempCentHigh}
      tempCentLow={props.tempCentLow}
      description={props.description}
      chanceOfRain={props.chanceOfRain}
      chanceOfSnow={props.chanceOfSnow}
      isLoading={props.isLoading}
    />
  </div>
}

export default LandingPage;