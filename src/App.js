import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {

  // const [ data, setData ] =  useState("Test data")

  // async function fetchData(url) {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setData(json);
  // }

  // useEffect called on initial render? Need to call when search data is ready.
  // useEffect(() => {fetchData()},[]);

  return (
    <>
      <LandingPage/>
    </>
  );
}

export default App;