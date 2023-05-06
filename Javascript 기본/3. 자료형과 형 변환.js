//Primitive, Non-Primitive Data Type
//Primitive(원시타입)- 내장형 또는 기본형 타입
//숫자형, 하나의 고정된 저장 공간 이용
// Infinity, -Infinity, NaN; 이렇게 3가지도 있다. 

//let a;
//console.log(a); undefined;

//null에 경우는 
//let a =null;
//console.log(a) 의도적으로 아무값도 안 담고 있다고 표현하고자 할때

//console.log(12*"2") 문자열 2를 자동으로 숫자로 인식했다. 
//적절하게 숫자로 바꿔줬다. 형 변환, testing이라고 한다. 
//console.log(12+"2") //122가 나온다. +에 경우는 좀 예외다. 
console.log(12+parseInt("2")) //parseInt는 의도적으로 문자열 값을 받아서 숫자로 돌려준다. 명시적 형변환

//Non Primitive Tyep(비 원시 타입)
//한번에 여러 개의 값을 가질 수 있다.
//let arrray =[1,2,3,4];
//백틱을 이용해도 된다. 
