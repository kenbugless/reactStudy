let width1 = 10;
let height1 =20;

let area1 =width1* height1;
console.log(area1) //200이라고 나온다. 

let width2 = 30;
let height2 = 15;

let area2 =width2 * height2;
console.log(area2) //450이라고 나온다. 

//중복되는 부분이 나오는 것이 확인이 된다. 

function getArea() { //2번
    let width =10; //3번
    let height =20; //4번
    let area =width*height; //5번
    console.log(area) //6번
} //종료 됨을 확인 7번

getArea(); //함수 호출이 1번 => function으로 넘어간다. 
//함수 선언식, 함수 선언 방식의 함수 생성 //8번

//함수 값을 전달할 떄는 매개변수가 필요하다. 

function getArea(width, height) { //2번 //매개변수라고 한다. 
    let area =width*height; //5번
    console.log(area) //6번
} //종료 됨을 확인 7번

getArea(100,200); //20000이 출력이 된다. 

//함수에 결과값을 받아보고 싶을 때는, Return을 사용하면 된다. 
function getArea(width, height) { 
    let area =width*height; 
    return area;
}
let area1 = getArea(100,200); 
console.log("area1은", area1);
console.log(area); //area는 함수 내부에서 선언됨. 바깥에서는 접근이 불가능하다. "지역변수"
//함수 외부에 선언한 변수는 "전역변수"