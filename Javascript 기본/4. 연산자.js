// let a = 1; 대입연산자

//복합 연산자 
let a = 5;
a = a+10; // a +=10;
console.log(a)

//a++ => a=a+1이라는 의미이다. 
//증감연산자를 변수 이름에 뒤에 쓰게 된다면, 

let a = 10;
console.log(a++); //10
console.log(a) //11
console.log(++a); //11
console.log(a--); //10
console.log(a)
console.log(--a); //9

//증감연산자는 뒤에 쓰게 되면, 다음 줄에서 값이 바뀌게 된다.
//논리연산자 => 참, 거짓인지 구분한다. 

//비교 연산자
let compareA =1 =="1";
console.log(compareA); //true
//자바스크립트에서 == 두번만 쓰면, 값만 비교하게 된다. type이 다르더라도, true로 출력하게 된다. 

let compareB =1 ==="1";
console.log(compareB); //false

//!= 값만 비교, !== type까지 비교하는 방법

//null 병합 연산자
let a ; //아무것도 할당을 안해서 undefined
a = a ?? 10; // null이나 undefined이 아닌 값을 선택한다. a는 null이므로, 10을 선택함
console.log(a);  //10