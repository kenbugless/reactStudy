let a = '';

if(a) {
  console.log("TRUE");
}else {
  console.log("FALSE");
} //false가 출력이 된다. 

let b = 'string';

if(b) {
  console.log("TRUE");
}else {
  console.log("FALSE");
} //true가 출력이 된다. 

//[],{},"0","false",Infinity는 true 
//undefined,null,0,-0,NaN,""는 false로 인식을 한다. 

const getName = (person) => { //person이라는 parameter를 받아서, 
  return person.name;
}; //parameter 이름을 person을 받아서
let person ={name:'이정환'};
const name = getName(person); 
console.log(name); //이정환



const getName = (person) => { 
   if(person === undefined) {
    return "객체가 아닙니다."
   }
  return person.name;
};
let person ;
const name = getName(person); 
console.log(name);  //객체가 아닙니다.로 출력된다.



const getName = (person) => { 
  if(person === undefined) {
   return "객체가 아닙니다."
  }
 return person.name;
};
let person= null;
const name = getName(person); 
console.log(name);  //오류가 출력된다.



const getName = (person) => { 
  if(!person) { //false에 not을 붙이면, true가 된다.
   return "객체가 아닙니다."
  }
 return person.name;
};
let person;
const name = getName(person); 
console.log(name);  

