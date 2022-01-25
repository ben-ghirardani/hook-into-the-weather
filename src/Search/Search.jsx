import React, { useState } from 'react';
import './Search.css';

function Search(props) {

  const [inputText, setInputText] = useState("");

  function onChange(event) {
    event.preventDefault();
    setInputText(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    props.applyLocation(inputText);
  }

  return <div className="search">
    <form onSubmit={onSubmit}>
      <input onChange={onChange} placeholder="Enter location" />
      <button type="submit">Search</button>
    </form>
    
  </div>
};

export default Search;