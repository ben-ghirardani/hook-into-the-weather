// pass icon string eg. weatherapi.com/weather/64x64/day/116.png
function GetIcon(props) {
  let answer = [];

  if(props.search("day") > 0) {
    answer.push("day")
  } else {
    answer.push("night")
  };


  let position = props.lastIndexOf("/");  
  let newString = props.slice(position+1);
  answer.push(newString);  
  
  return answer;
}

export default GetIcon;