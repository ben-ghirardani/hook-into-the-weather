import React, { useState, useEffect } from 'react';
import './Results.css';
// import GetIcon from '../GetIcon/GetIcon.jsx';

function Results(props) {

  const [data, setData] = useState("");

  useEffect(()=> {
    setData(props)
    if(!props.forecast.error) {
      props.changeLoading(false);
    }
  }, [props]);

  // function propsCheck() {
  //   if(props.forecast.forecast.error.message) {
  //     return props.forecast.forecast.error.message
  //   } else if (props.forecast.forecast.location.name) {
  //     return props.forecast.forecast.location.name 
  //   } else return "something went wrong"
  // };

  // function propsCheck() {
  //   if(props.forecast === null) {
  //     console.log("it's null")
  //   } else if (props.forecast.location.name) {
  //     console.log(props.forecast.location.name)
  //   } else {
  //     console.log("a different error")
  //   }
  // }


  return(
    <div className="results">
      Results
      <div>
        {props.loading === true ? "Loading" : props.forecast.location.name}
      </div>
    </div>
  )
};

export default Results;