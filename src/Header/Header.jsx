import React from 'react';
import Search from '../Search/Search.jsx';
import './Header.css';

function Header(props) {
  return <header>
    <div className="title">WEATHER</div>
    <Search
      className="search" 
      applyLocation={props.applyLocation} 
    />
  </header> 
}

export default Header;