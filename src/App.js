import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import useFetch from './components/UseFetch/UseFetch.jsx';


function App() {
  const [ apiURL, setApiURL ] =  useState("");
  // call useFetch here?
  // const data = useFetch(url)?



  // takes a woeid, formats a url
  function getURL(woeid) {
    let url = `https://www.metaweather.com/api/location/${woeid}/`
    setApiURL(url);
  }

  return (
    <>
      <LandingPage
        getURL={getURL}
      />
    </>
  );
}

export default App;