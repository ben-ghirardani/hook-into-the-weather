import React, {useState} from 'react';
import './SearchBox.css';

export default function SearchBox() {

  const [ text, setText ] = useState("");

  return (
    <input
      type="text"
      value={text}
      onChange={setText}
    >
      {/* text box, onChange calls setText to update text variable which is matched against array of locations to 
      produce an autofill list */}
    </input>
  )

};