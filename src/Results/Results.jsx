import React, { useState, useEffect } from 'react';
import './Results.css';
import GetIcon from '../GetIcon/GetIcon.jsx';
import ForecastTile from '../ForecastTile/ForecastTile.jsx';

function Results(props) {

  const [data, setData] = useState("");

  useEffect(()=> {
    setData(props)
    if(!props.forecast.error) {
      props.changeLoading(false);
    }
  }, [props]);

  return(
    // results will be split in half horizontally, each a flex container to hold the weather data components
    // change divs to semantic html
    <div className="results">

      <div className="upper">
        <div className="information">Today's Info</div>
        <div className="icon-tile">Today's Icon</div>
      </div>

      <div className="lower">
        <ForecastTile/>
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