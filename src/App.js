import React, { useState, useEffect} from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {

  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState(null);
  const [display, setDisplay] = useState("search");

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

  function changeLoading(input) {
    setLoading(input);
  };

  return (
    <>
      <LandingPage
        forecast={forecast}
        display={display}
        location={location}
        loading={loading}
        changeLoading={changeLoading}
        applyLocation={applyLocation}
        changeDisplay={changeDisplay}
      />
    </>
  );
}

export default App;