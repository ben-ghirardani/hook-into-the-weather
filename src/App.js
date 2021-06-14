import React, { useState, useEffect} from 'react';
import './App.css';
import getData from './GetData/GetData.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {

  // does useState need to be set null as default?
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    
    // create urls from the below and the locations

    // http://api.weatherapi.com/v1/current.json?key=e35ad968908942abac7171042210706&q=Edinburgh
    // http://api.weatherapi.com/v1/forecast.json?key=e35ad968908942abac7171042210706&q=Edinburgh
    // forecast also needs &days= between 1 and 10
    const currentWeatherData = getData(url);
    const forecastData = getData(url);
  }, [location]);

  return (
    <>
      <LandingPage/>
    </>
  );
}

export default App;