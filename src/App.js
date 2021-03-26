import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import UseFetch from './components/UseFetch/UseFetch.jsx';

function App() {

  const [ locationData, setLocationData ] =  useState("");

  // takes a woeid, formats a url, passes it to useFetch, and fetches the data
  function getLocation(woeid) {
    let url = `https://www.metaweather.com/api/location/${woeid}/`
    let data = UseFetch(url);
    useState(data)
  }

  return (
    <>
      <LandingPage
        getLocation={getLocation}
      />
    </>
  );
}

export default App;