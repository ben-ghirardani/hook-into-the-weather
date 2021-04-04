import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
// import useFetch from './components/UseFetch/UseFetch.jsx';
import CountryData from './components/MasterData/CountryData.jsx';


function App() {
  // do I need all 3?
  const [ woeid, setWoeid ] = useState("");
  // const [ apiFragment, setApiFragment ] = useState("https://www.metaweather.com/api/location/");
  const [ apiURL, setApiURL ] =  useState("");

  // call useFetch here? Should only update when 'dependency' (ie. apiURL) changes. Error handling for first render? 
  // const locationData = useFetch(apiURL);

  // takes a woeid, formats a url
  function getWoeid(text) {
    const countryData = CountryData;
    countryData.forEach(item => {
      if (item.Location === text) {
        let strungWOEID = item.WOEID.toString()
        setWoeid(strungWOEID);
      } 
    });
  };

  function createURL() {
    let url = "https://www.metaweather.com/api/location/";
    let urlSuffix = woeid;
    setApiURL(url+urlSuffix);
  };


  return (
    <>
      <LandingPage
        getWoeid={getWoeid}
        createURL={createURL}
      />
    </>
  );
}

export default App;