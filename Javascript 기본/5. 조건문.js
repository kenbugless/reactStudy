let a = 3;

if(a>=5) {
  console.log("5이상입니다.")
}else {
  console.log("5 이하입니다.")
}
//괄호는 조건식이라고 생각해라. 조건식이 맞으면 {}안에 값이 나온다.

// let country = "ko";

// if(country ==="ko") {
//   console.log("한국")
// }else if(country ==="cn") {
//   console.log("중국")
// }else if(country ==="jp") {
//   console.log("일본")
// }else {
//   console.error.log("미 분류")
// }

let country ="ko";

switch(country) {
  case 'ko':
    console.log("한국");
    break;
  case 'cn' :
    console.log("중국");
    break;
  case 'jp' :
    console.log("일본");
    break;
  case 'uk' :
    console.log("영국");
    break;
  default :
    console.log("미 분류");
    break;        
}

//ko가 위에서 한번만 나오고 끝나야 되는데, break 가 없으면 break가 있는 곳까지 가서 끄탄게 된다. 
//마지막으로 default는 if에서 else라고 생각하면 될 것 같다. 