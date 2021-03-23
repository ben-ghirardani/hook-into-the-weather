import React, {useState} from 'react';
import './SearchBox.css';
import CountryData from '../MasterData/CountryData.jsx';

export default function SearchBox() {

  const [ text, setText ] = useState("");
  const [ woeid, setWoeid ] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };


  // ***********************
  const submitText = (e) => {
    e.preventDefault();
    setWoeid("");
    const countryData = CountryData;

    countryData.forEach(item => {
      if (item.Location === text) {
        setWoeid(item.WOEID)
      } 
    });
  };


  // is there too much happening in SearchBox? Not reusable. Pull some of the functionality out and into app?

  return (
    <div className="search-box">
      <form onSubmit={submitText}>
        <input
          type="text"
          value={text}
          onChange={onChange}
        />
        <input 
          type="submit"
          value="Go!"
        />
      </form>
    </div>
  )

};