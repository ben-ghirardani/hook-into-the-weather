import React, { useState, useEffect } from 'react';
import './Results.css';
import GetIcon from '../GetIcon/GetIcon.jsx';
import ForecastTile from '../ForecastTile/ForecastTile.jsx';
import IconList from '../IconList/IconList.jsx';
import LoadingIcons from 'react-loading-icons';

function Results(props) {

  // wrap the stuff I get from props into one object? Does it matter?
  const [loading, setLoading] = useState(true)
  const [placeName, setPlaceName] = useState("...")
  // possible to add template literal? "${put temp here} C"
  const [temp_cHigh, setTemp_cHigh] = useState(["..."])
  const [temp_cLow, setTemp_cLow] = useState("...")
  const [description, setDescription] = useState("...")
  const [chanceOfRain, setChanceOfRain] = useState(["..."])
  const [chanceOfSnow, setChanceOfSnow] = useState(["..."])

  // *** remove this once everything is working ***
  useEffect(()=> {
    console.log("cosole log of props - ", props)
  })

  useEffect(()=> {
    if(props.forecast.error) {
      console.log(props.forecast.error.message)
    } else {
      setLoading(false);
      setPlaceName(props.forecast.location.name)
      // pull the data for all days available at once
      // setState takes two arguments, the old state and the new state, in the examples below, the old
      // state is a placeholder so is completely replaced by new state.
      setTemp_cHigh(prevState =>
        [
          props.forecast.forecast.forecastday[0].day.maxtemp_c,
          props.forecast.forecast.forecastday[1].day.maxtemp_c,
          props.forecast.forecast.forecastday[2].day.maxtemp_c
        ]
      )
      setTemp_cLow(prevState =>
        [
          props.forecast.forecast.forecastday[0].day.mintemp_c,
          props.forecast.forecast.forecastday[1].day.mintemp_c,
          props.forecast.forecast.forecastday[2].day.mintemp_c
        ]
      )
      setDescription(props.forecast.forecast.forecastday[0].day.condition.text)
      setChanceOfRain(prevState => 
        [
          props.forecast.forecast.forecastday[0].day.daily_chance_of_rain,
          props.forecast.forecast.forecastday[1].day.daily_chance_of_rain,
          props.forecast.forecast.forecastday[2].day.daily_chance_of_rain
        ]
      )
      setChanceOfSnow(prevState => 
        [
          props.forecast.forecast.forecastday[0].day.daily_chance_of_snow
        ]
      )
    }
  }, [props]);

  const loadingIcon = <LoadingIcons.TailSpin
            className="current-weather"
            stroke="#000000"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          />;


  // checks if data is available, returns either a loading icon or parses the icon ref
  // and uses it to refer to the relevent entry in the icon object
  function currentWeatherIcon() {
    if(loading === true) {
      return loadingIcon
    } else if (loading === false) {
      const iconRef = GetIcon(props.forecast.forecast.forecastday[0].day.condition.icon)
      return <img src={IconList[iconRef]} alt="Weather Icon"></img>
    }
  };

  return(
    <div className="results">

      <div className="upper">
        <div className="information">
          <h1>{placeName}</h1>
            <section className="temp-and-description">
              <p className="temp">
                High: {temp_cHigh[0]}
                <br></br>
                Low: {temp_cLow[0]}
              </p> 
              <p className="description">
                {description}
              </p>
            </section>
          <p className="wind-and-rain">
            <img src={IconList.Day308} alt="rain icon"></img>: {chanceOfRain[0]}%
            <img src={IconList.Day338} alt="snow icon"></img>: {chanceOfSnow[0]}%
          </p>
        </div>
        <div className="icon-tile">
          {currentWeatherIcon()}
        </div>
      </div>

      <div className="lower">

        {/* need to pass icon, high and low as props */}

        <ForecastTile/>
        <ForecastTile/>
        <ForecastTile/>
        <ForecastTile/>
        <ForecastTile/>
        <ForecastTile/>
      </div>
    </div>
  )
};

export default Results;