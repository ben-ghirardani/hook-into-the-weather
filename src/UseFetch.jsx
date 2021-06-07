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