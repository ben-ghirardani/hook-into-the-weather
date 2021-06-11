import React, { useState, useEffect} from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage.jsx';


function App() {

  const [weatherData, setWeatherData ] = useState(null);
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();

      if(url === !null) {
        setWeatherData(newData);
      } else {
        return
      }
    };
    fetchData();
  }, [url] );

  

  return (
    <>
      <LandingPage
        weatherData={weatherData}
      />
    </>
  );
}

export default App;