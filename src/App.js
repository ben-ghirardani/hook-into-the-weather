import React, { useState, useEffect} from 'react';
import './App.css';
import APIKey from './APIKey.js';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState("no data");
  const [tempCentHigh, setTempCentHigh] = useState([""]);
  const [tempCentLow, setTempCentLow] = useState([""]);
  const [description, setDescription] = useState("");
  const [chanceOfRain, setChanceOfRain] = useState([""]);
  const [chanceOfSnow, setChanceOfSnow] = useState("")

  // fetch returns an error if an unknown string is used, eg. shmlump
  // fetch only recognises network errors, need to specify other ranges for error handling.

  useEffect( () => {
    const fetchForecast = async () => {
      setIsLoading(true);
      // prevent sending a request on initial render
      if(location === null) {
        return
      } else {
        // only three day forecast available. More than 3 days is a paid option.
        const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location}&days=10`;
        const response = await fetch(forecastURL);
        if(response.status >= 200 && response.status <= 299) {
          const forecastJSON = await response.json();
          setForecast(forecastJSON);
          // setState takes two arguments, the old state and the new state, in the examples below, the old
          // state is a placeholder so is completely replaced by new state.
          setTempCentHigh(prevState => 
            [
              forecastJSON.forecast.forecastday[0].day.maxtemp_c,
              forecastJSON.forecast.forecastday[1].day.maxtemp_c,
              forecastJSON.forecast.forecastday[2].day.maxtemp_c
            ]
          )
          setTempCentLow(prevState =>
            [
              forecastJSON.forecast.forecastday[0].day.mintemp_c,
              forecastJSON.forecast.forecastday[1].day.mintemp_c,
              forecastJSON.forecast.forecastday[2].day.mintemp_c
            ]
          )
          setDescription(forecastJSON.forecast.forecastday[0].day.condition.text)
          setChanceOfRain(prevState => 
            [
              forecastJSON.forecast.forecastday[0].day.daily_chance_of_rain,
              forecastJSON.forecast.forecastday[1].day.daily_chance_of_rain,
              forecastJSON.forecast.forecastday[2].day.daily_chance_of_rain
            ]
          )
          setChanceOfSnow(forecastJSON.forecast.forecastday[0].day.daily_chance_of_snow)
        } else {
          console.log("Status:",response.status, "Text:",response.statusText)
        } 
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
        applyLocation={applyLocation}
        // do I need to pass forecast anymore, now that the seperate elements are being passed?
        forecast={forecast}
        location={location}
        tempCentHigh={tempCentHigh}
        tempCentLow={tempCentLow}
        description={description}
        chanceOfRain={chanceOfRain}
        chanceOfSnow={chanceOfSnow}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;