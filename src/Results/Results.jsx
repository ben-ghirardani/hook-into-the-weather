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
  const [temp_c, setTemp_c] = useState("...")
  const [description, setDescription] = useState("...")


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
      setTemp_c(props.forecast.current.temp_c)
      setDescription(props.forecast.current.condition.text)
    }
  }, [props]);

  const loadingIcon = <LoadingIcons.TailSpin
            className="current-weather"
            stroke="#000000"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          />;

  // ***
  // do I even need data to be stored in this component? Once it's available, break out the elements I need into state.
  // ***


  // make the function below more generic, use it for all elements on the results page that rely on props?
  // see below

  // checks if data is available, returns either a loading icon or parses the icon ref
  // and uses it to refer to the relevent entry in the icon object
  function currentWeatherIcon() {
    if(loading === true) {
      return loadingIcon
    } else if (loading === false) {
      const iconRef = GetIcon(props.forecast.current.condition.icon)
      return <img src={IconList[iconRef]} alt="Icon showing today's weather"></img>
    }
  };

  return(
    <div className="results">

      <div className="upper">
        <div className="information">
          <h1>{placeName}</h1>
            <section className="temp-and-description">
              <p className="temp">{temp_c}</p> <p className="description">{description}</p>
            </section>
          <p className="wind-and-rain">wind, rain, etc</p>
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
        <ForecastTile/>
      </div>
    </div>
  )
};

export default Results;