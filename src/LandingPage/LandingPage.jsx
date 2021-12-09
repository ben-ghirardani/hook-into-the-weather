// import React from 'react';
// import './LandingPage.css';
// import Search from '../Search/Search.jsx';
// import Results from '../Results/Results.jsx';
// import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong.jsx';

// function LandingPage(props) {

//   function chooseView() {
//     if (props.display === "search") {
//       return <Search 
//                 applyLocation={props.applyLocation} 
//                 changeDisplay={props.changeDisplay} 
//               />
//     } else if (props.display === "results") {
//       return <Results 
//                 forecast={props.forecast}
//               />
//     } else {
//       return <SomethingWentWrong/>
//     }
//   }

//   return <div className="landing-page">
//     {chooseView()}
//   </div>
// }

// export default LandingPage;

import React from 'react';
import './LandingPage.css';
import Search from '../Search/Search.jsx';
import Results from '../Results/Results.jsx';
// import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong.jsx';

function LandingPage(props) {

  return <div className="landing-page">
    <Search 
      applyLocation={props.applyLocation} 
    />
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