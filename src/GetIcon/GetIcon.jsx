// pass icon string eg. weatherapi.com/weather/64x64/day/116.png
function GetIcon() {
  let props = "weatherapi.com/weather/64x64/day/116.png";
  let answer = props.lastIndexOf("/");  
  console.log(answer);
  // return answer; 
}

export default GetIcon;