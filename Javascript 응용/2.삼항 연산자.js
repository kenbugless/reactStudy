let a = 3;
if(a>=0) {
    console.log("양수")
}else {
    console.log("음수")
}

//삼항 연산자
let a =3;
a>0 ?console.log("양수"):console.log("음수") //양수로 잘 출력이 된다.        "조건식 ? 참 : 거짓"

let a = [];
if(a.length ===0) {
    console.log("빈 배열")
}else {
    console.log("안 빈 배열")
} // 빈 배열이라고 출력된다.


let a = [];
a.length === 0? console.log("빈 배열") :console.log("안 빈 배열")  //빈 배열이라고 출력이 된다.


let a =[1,23];
const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus) //안 빈 배열이라고 정상적으로 출력이 된다. 값을 명시하게 되면, 결과를 값으로 받아볼 수 있다.


let a ; //undefined로 할당했고
const result = a ?true : false;
console.log(result) //false가 출력이 된다. 


let a = [];
const result = a ? true : false;
console.log(result) //true가 출력이 된다.


//To Do : 학점 계산 프로그램
//90점 이상 : A+
//50점 이상 : B+
//둘다 아니면, F
let score = 100;
score >=90 ? console.log("A+") :score >=50 ? console.log("B+") : F       //A+로 출력이 된다. 
// 삼항연산자를 중첩으로 사용하고자 하는 경우에는, if 중첩문으로 사용하는 것이 더 좋다.


let score = 40;
if(score >=90) {
    console.log("A+")
}else if(score >=50) {
    console.log("B+")
}else {
    console.log("F")
} //F로 잘 출력이 된다.