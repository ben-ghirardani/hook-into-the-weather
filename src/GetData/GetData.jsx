async function getData(url) {

  const response = await fetch(url);
  const json = response.json();

  return json;
}

export default getData;