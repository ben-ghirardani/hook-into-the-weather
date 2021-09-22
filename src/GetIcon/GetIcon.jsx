// can access an object's properties via obj.property as well as obj[property]
// have GetIcon return a string in the same format as the property as pass it to IconList

// pass icon string eg. weatherapi.com/weather/64x64/day/116.png
function GetIcon(props) {
  let time;
  let iconRef;
  let result;

  if(props.search("day") > 0) {
    time = "Day"
  } else {
    time = "Night"
  };


  let position = props.lastIndexOf("/");  
  let newString = props.slice(position+1);
  let removedSuffix = newString.replace(".png", "");
  iconRef = removedSuffix;  
  
  result = time+iconRef;
  
  console.log(result)
  // return result;
  
}


export default GetIcon;