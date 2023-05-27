let arr =["one","two","three"];

let one = arr[0];
let two = arr[1];
let three = arr[2];
console.log(one,two,three); //one two three
//각각 할당 하는 것이 쉽지 않음 => 비구조화 할당

let arr =["one","two","three"];
let [one,two,three] =arr;
console.log(one,two,three) //one two three

///////////////////////////////////////
let [one,two,three] =["one","two","three"];
console.log(one,two,three) //one two three 축소를 이렇게 해도 가능하다. 

let [one,two,three,four="four"] =["one","two","three"];
console.log(one,two,three,four) //one two three four라고 출력이 된다. 왜냐면, 그냥 four만 적었을 떄, four는 값이 없으므로, undefined으로 나오기 때문에 

//swap이란?

let a =10;
let b =20;
let tmp =0;

tmp =a;
a =b;
b=tmp;
console.log(a,b) //20,10으로 스왑이 된다.

let a=10;
let b =20;
[a,b] =[b,a];
console.log(a,b); //20,10


let object = {one: "one", two:"two", three:"three"};

let one =object.one
let two =object.two
let three = object.three

//console.log(one,two, three) //one two three


let object = {one: "one", two:"two", three:"three",name:"이정환"};
let {name, one,two,three} =object //순서와는 상관 없이, key값을 통해서 접근을 한다.
console.log(one,two, three, name) //one two three 


let object = {one: "one", two:"two", three:"three",name:"이정환"};
let {name:myName, one,two,three} =object //name이라는 key값을 기준으로, value를 myName이라는 변수에 할당하겠다.
console.log(one,two, three, myName) //one two three 이정환 


let object = {one: "one", two:"two", three:"three",name:"이정환"};
let {name:myName, one,two,three,abc="four"} =object //
console.log(one,two, three, abc) //one two three four