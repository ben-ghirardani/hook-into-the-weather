import React, {useState} from 'react';
import './App.css';

function App() {

  const [ test, setTest ] =  useState("Test info")

  return (
    <div>
      {test}
      {/* search box */}
    </div>
  );
}

export default App;