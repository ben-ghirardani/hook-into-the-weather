import React, {useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox.jsx'

function App() {

  const [ test, setTest ] =  useState("Test info")

  return (
    <div>
      {test}
      <SearchBox/>
    </div>
  );
}

export default App;