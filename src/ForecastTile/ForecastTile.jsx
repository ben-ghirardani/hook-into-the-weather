import React from 'react';
import './ForecastTile.css';

function ForecastTile(props) {

  return(
    <div className="forecast-tile">

      <div className="upper-forecast-tile">
        <i className="icon">{props.icon}</i>
      </div>
      
        <div className="lower-forecast-tile">
          <div className="high">{props.high}</div>
          <div className="low">{props.low}</div>
          <div className="day">{props.day}</div>
        </div>
    </div>
  )

};

export default ForecastTile;