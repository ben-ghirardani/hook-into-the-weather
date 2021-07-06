import React, { useState, useEffect} from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {

  const [location, setLocation] = useState("initial");
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState(null);
  const [display, setDisplay] = useState("search");

  useEffect( () => {

      const fetchCurrentWeather = async () => {
      const currentURL = `http://api.weatherapi.com/v1/current.json?key=e35ad968908942abac7171042210706&q=${location}`;
      const response = await fetch(currentURL);
      const currentJSON = await response.json();
      setCurrentWeather(currentJSON);
    };

    const fetchForecast = async () => {
      const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=e35ad968908942abac7171042210706&q=${location}&days=10`;
      const response = await fetch(forecastURL);
      const forecastJSON = await response.json();
      setForecast(forecastJSON);
    };

    fetchCurrentWeather();
    fetchForecast();
     
  }, [location]);

  function applyLocation(inputLocation) {
    setLocation(inputLocation);
  }

  return (
    <>
      <LandingPage
        currentWeather={currentWeather}
        forecast={forecast}
        display={display}
        applyLocation={applyLocation}
      />
    </>
  );
}

export default App;