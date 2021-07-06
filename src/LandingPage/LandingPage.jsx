import React from 'react';
import './LandingPage.css';
import Search from '../Search/Search.jsx';
import Results from '../Results/Results.jsx';
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong.jsx'

function LandingPage(props) {

  function chooseView() {
    if (props.display === "search") {
      return <Search/>
    } else if (props.display === "results") {
      return <Results/>
    } else {
      return <SomethingWentWrong/>
    }
  }

  return <div className="landing-page">
    
  </div>
}

export default LandingPage;

// {props.display === "search" ? <Search applyLocation={props.applyLocation}/> : <Results/>} 