import React, {useState} from 'react';
import './App.css';

function App() {

  const [ test, setTest ] =  useState("Test info")

  return (
    <div>
      {test}
    </div>
  );
}

export default App;