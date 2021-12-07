import React, { useState, useEffect} from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState("no data");
  const [tempCentHigh, setTempCentHigh] = useState("")

  useEffect( () => {
    const fetchForecast = async () => {
      setIsLoading(true);
      
      if(location === null) {
        return
      } else {
        // only three day forecast available. More than 3 days is a paid option.
        const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=e35ad968908942abac7171042210706&q=${location}&days=10`;
        const response = await fetch(forecastURL);
        const forecastJSON = await response.json();
        setForecast(forecastJSON);
      }
      setIsLoading(false)
    };
    fetchForecast();
  }, [location]);


  function applyLocation(inputLocation) {
    setLocation(inputLocation);
  };

  return (
    <>
      <LandingPage
        forecast={forecast}
        applyLocation={applyLocation}
      />
    </>
  );
}

export default App;

  // useEffect( () => {
  //   const fetchForecast = async () => {
  //     // only three day forecast available. More than 3 days is a paid option.
  //     const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=e35ad968908942abac7171042210706&q=${location}&days=10`;
  //     const response = await fetch(forecastURL);
  //     const forecastJSON = await response.json();
  //     setForecast(forecastJSON);
  //     // setTempCentHigh(forecastJSON) 
  //   };
  //   fetchForecast();
  // }, [location]);