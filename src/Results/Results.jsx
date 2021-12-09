import React, { useEffect } from 'react';
import './Results.css';
import GetIcon from '../GetIcon/GetIcon.jsx';
import ForecastTile from '../ForecastTile/ForecastTile.jsx';
import IconList from '../IconList/IconList.jsx';
import LoadingIcons from 'react-loading-icons';

function Results(props) {
  // *** remove this once everything is working ***
  useEffect(()=> {
    console.log("cosole log of props - ", props)
  })

  const loadingIcon = <LoadingIcons.TailSpin
    className="current-weather"
    stroke="#000000"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
  />;


  // checks if data is available, returns either a loading icon or parses the icon ref
  // and uses it to refer to the relevent entry in the icon object
  function currentWeatherIcon() {
    if(props.loading === true) {
      return loadingIcon
    } else if (props.loading === false) {
      const iconRef = GetIcon(props.forecast.forecast.forecastday[0].day.condition.icon)
      return <img src={IconList[iconRef]} alt="Weather Icon"></img>
    }
  };

  return(
    <div className="results">

      <div className="upper">
        <div className="information">
          <h1>{props.location}</h1>
            <section className="temp-and-description">
              <p className="temp">
                High: {props.tempCentHigh[0]}
                <br></br>
                Low: {props.tempCentLow[0]}
              </p> 
              <p className="description">
                {props.description}
              </p>
            </section>
          <p className="wind-and-rain">
            <img src={IconList.Day308} alt="rain icon"></img>: {props.chanceOfRain[0]}%
            <img src={IconList.Day338} alt="snow icon"></img>: {props.chanceOfSnow}%
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