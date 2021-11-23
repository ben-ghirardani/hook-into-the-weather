import React, { useState, useEffect} from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {

  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState(null);
  const [display, setDisplay] = useState("search");
  const [temp, setTemp] = useState("temp_c");

  useEffect( () => {

    const fetchForecast = async () => {
      // only three day forecast available? Check if longer is a paid option.
      const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=e35ad968908942abac7171042210706&q=${location}&days=10`;
      const response = await fetch(forecastURL);
      const forecastJSON = await response.json();
      setForecast(forecastJSON);
    };

    fetchForecast();
     
  }, [location]);

  function applyLocation(inputLocation) {
    setLocation(inputLocation);
  };

  function changeDisplay(text) {
    setDisplay(text);
  };

  // currently not implemented

  // function changeTemp() {
  //   if(temp === "temp_c") {
  //     setTemp("temp_f")
  //   } else if (temp === "temp_f") {
  //     setTemp("temp_c")
  //   }
  // };

  return (
    <>
      <LandingPage
        forecast={forecast}
        display={display}
        location={location}
      
        applyLocation={applyLocation}
        changeDisplay={changeDisplay}
      />
    </>
  );
}

export default App;