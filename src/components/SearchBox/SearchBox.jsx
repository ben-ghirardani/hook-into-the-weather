import React, {useState} from 'react';
import './SearchBox.css';
import CountryData from '../MasterData/CountryData.jsx';

export default function SearchBox() {

  const [ text, setText ] = useState("");
  const [ woeid, setWoeid ] = useState("");

  const onChange = (e) => {
    setText(e.currentTarget.value);
  };

  // function to check current text against array of locations
  // call it in onChange above

  // is there too much happening in SearchBox? Not reusable. Pull some of the functionality out and into app?

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={onChange}
      />
      <input 
        type="submit"
        value="Go!"
      />
    </>
  )

};