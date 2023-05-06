//원시형 데이터 타입 - 숫자, string, bool, undefined, null 

let hello = function () { //함수를 값에 담을때는 이름을 굳이 정할필요 X;
    return "안녕하세요 여러분";
}
console.log(hello); //[Function: hello]로 출력이 된다. 
console.log(hello()) //안녕하세요 여러분로 출력이 된다. 

const helloText = hello();
console.log(helloText); //안녕하세요 여러분, //함수 표현식이라고 부른다. function helloFunc()은 함수 선언식!


//함수 표현식 vs 함수 선언식
console.log(helloB()); //안녕하세요 여러분
console.log(helloA()); //에러 발생

let helloA =function () {
    return "안녕하세요 여러분";
} //함수 표현식

function helloB() {
    return "안녕하세요 여러분";
} //함수 선언식

//특징은 함수 선언식은 호이스팅이 일어나기 때문에, 밑바닥에 선언을 해도 호출이 가능하다. 
//함수 표현식은 위에 선언하면 나오지 않는다. 


//화살표 함수 return 밖에 없는 경우는 이렇게만 적어도 가능하다. 화살표 함수 또한, 호이스팅 대상이 아니므로, 순서를 잘 지켜줘야 한다. 
let helloA = () => {
    return "안녕하세요 여러분"
}
let helloA =() => "안녕하세요 여러분" 
console.log(hello(A));