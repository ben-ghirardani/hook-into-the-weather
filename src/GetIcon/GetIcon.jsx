// pass icon string eg. weatherapi.com/weather/64x64/day/116.png
async function GetIcon(props) {
  let answer = {
    time: "",
    iconID: ""
  }

  if(props.search("day") > 0) {
    answer.iconID = "day"
  } else {
    answer.iconID = "night"
  };


  let position = props.lastIndexOf("/");  
  let newString = props.slice(position+1);
  answer.iconID = newString;  
  
  console.log(answer);
  return answer;
}

export default GetIcon;


// needs to be async?
// error handling