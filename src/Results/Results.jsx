import React, { useState, useEffect } from 'react';
import './Results.css';
import GetIcon from '../GetIcon/GetIcon.jsx';
import ForecastTile from '../ForecastTile/ForecastTile.jsx';
import IconList from '../IconList/IconList.jsx';
import LoadingIcons from 'react-loading-icons';

function Results(props) {

  const [data, setData] = useState("");

  useEffect(()=> {
    setData(props)
    if(!props.forecast.error) {
      props.changeLoading(false);
    }
  }, [props]);

  // use state, if state exists, getIcon, else use spinner?
  // data is undefined on first render ***
  // const weatherNow = data.forecast.current.condition.icon;


  // returns undefined

  // function checkForData() {
  //   if(!props.forecast.error) {
  //     return "weatherapi.com/weather/64x64/day/116.png"
  //   } else {
  //     return data.forecast.current.condition.icon;
  //   }
  // }

  const loadingIcon = <LoadingIcons.TailSpin
            className="current-weather"
            stroke="#000000"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          />;

  return(
    <div className="results">

      <div className="upper">
        <div className="information">
          Today's Info
        </div>
        <div className="icon-tile">
          {/* can access an object's properties via obj.property as well as obj[property] */}
          {/* have GetIcon return a string in the same format as the property as pass it to IconList */}
        {/* <img src={IconList[GetIcon()]}></img> */}
        
          {loadingIcon}
        
        </div>
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