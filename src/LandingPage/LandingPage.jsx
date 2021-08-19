import React from 'react';
import './LandingPage.css';
import Search from '../Search/Search.jsx';
import Results from '../Results/Results.jsx';
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong.jsx';

function LandingPage(props) {

  function chooseView() {
    if (props.display === "search") {
      return <Search 
                applyLocation={props.applyLocation} 
                changeDisplay={props.changeDisplay} 
                loading={props.loading}
              />
    } else if (props.display === "results") {
      return <Results 
                forecast={props.forecast}
                loading={props.loading}
                changeLoading={props.changeLoading}
              />
    } else {
      return <SomethingWentWrong/>
    }
  }

  return <div className="landing-page">
    {chooseView()}
  </div>
}

export default LandingPage;