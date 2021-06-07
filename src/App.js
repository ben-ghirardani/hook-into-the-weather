import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';


function App() {

  const [ data, setData ] = useState("");

  return (
    <>
      <LandingPage/>
    </>
  );
}

export default App;