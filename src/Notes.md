MVP - 

search box
search for a location
fetch location data
display location data

Extras - 

autofill search bar with list of possible locations



*** Search Box ***

a free text box that searches the array of locations and a wheel with all options listed.

<!-- from Manifest.json - icons -->
,
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }


import { useState, useEffect } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {fetchData(url)},[url]);

  return data;
};  

export default UseFetch;