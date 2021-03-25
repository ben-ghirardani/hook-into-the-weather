import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import useFetch from './components/useFetch/useFetch.jsx';

function App() {

  const [ locationData, setLocationData ] =  useState("");

  function getLocation() {

  }

  return (
    <>
      <LandingPage/>
    </>
  );
}

export default App;