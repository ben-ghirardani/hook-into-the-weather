import React, {useState} from 'react';
import './SearchBox.css';

export default function SearchBox(props) {
  const [ text, setText ] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  const submitText = (e) => {
    e.preventDefault();
    // needs async?
    async function doURL () {
      await props.getWoeid(text);
      await props.createURL();
    }
    doURL();
    // props.getWoeid(text);
    // props.createURL();
  };

  return (
    <div className="search-box">
      <form onSubmit={submitText}>
        <input
          type="text"
          value={text}
          onChange={onChange}
        />
        <input 
          type="submit"
          value="Go!"
        />
      </form>
    </div>
  )

};