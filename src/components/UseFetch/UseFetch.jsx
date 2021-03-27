import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {fetchData(url)},[]);

  return data;
};  

export default useFetch;