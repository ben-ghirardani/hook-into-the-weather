import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [ data, setData ] =  useState("Test data")

  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  // useEffect called on initial render? Need to call when search data is ready.
  useEffect(() => {fetchData()},[]);

  return (
    <div>
      
    </div>
  );
}

export default App;