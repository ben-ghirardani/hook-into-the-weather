

// pass icon string eg. weatherapi.com/weather/64x64/day/116.png
// passing above string would give a result of ["day", "116.png"]
function GetIcon(props) {
  let time;
  let iconRef;

  if(props.search("day") > 0) {
    time = "Day"
  } else {
    time = "Night"
  };


  let position = props.lastIndexOf("/");  
  let newString = props.slice(position+1);
  iconRef = newString;  
  
  
  return "something";
  
}

export default GetIcon;

// original function
// function GetIcon(props) {
//   let answer = [];

//   if(props.search("day") > 0) {
//     answer.push("day")
//   } else {
//     answer.push("night")
//   };


//   let position = props.lastIndexOf("/");  
//   let newString = props.slice(position+1);
//   answer.push(newString);  
  
//   return answer;
// }