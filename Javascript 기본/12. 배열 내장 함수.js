const arr =[1,2,3,4];
const newArr =[];

// for(let i =0;i<arr.length;i++) {
//     console.log(arr[i])
// }

//자바스크립트 자료형은 모두 객체로 이루어져 있기 때문에, 객체 메서드를 쓰는 것처럼 사용하면 된다.
arr.forEach((elm,index) =>console.log(elm,index)); //1,2,3,4

arr.forEach(function (elm) {
    console.log(elm);
}); //1,2,3,4가 나오게 된다. 

//새로운 배열을 만들어보기
arr.forEach(function (elm) {
    newArr.push(elm*2);
}); //1,2,3,4가 나오게 된다. 
console.log(newArr); [2,4,6,8] 

//2. 더 쉬운 방법 - map을 사용하면 더 편하다!
const newArr2 =arr.map((elm)=>{
    return elm*2; //map은 return을 할 수 있다. 
})

console.log(newArr2) //[2,4,6,8]

// 있는지, 없는지 확인하는 법
let number =3;
let number2 ='3';
arr.forEach((elm)=>{
    if(elm ===number) {
        console.log(true);
    }
}); //true가 출력이 된다. 

console.log(arr.includes(number)); //true
console.log(arr.indexOf(number2)); //-1이 출력. 왜냐하면, 값이 존재하지 않으므로, "3"없다! 없을 경우, -1이 출력이 된다.

const arr =[
    {color: "red"},
    {color: "black"},
    {color: "blue"},
    {color: "green"}
];

console.log(arr.findIndex((elm)=>elm.color ==="green")) //3이 출력된다. 

console.log(
    arr.findIndex((elm)=>{
    return elm.color ==="blue";
})
);//2가 출력, 단 blue가 두개라고 하면은, 먼저 있는 것이 출력이 된다. blue가 두개라면 위에 있는 것이 먼저 나오게 된다.

//find로 하게 되면은, index가 필요하면 findIndex, 그게 아니면 find를 쓰면 된다.

const element = arr.find((elm)=>{
    return elm.color ==="blue";
})
console.log(element); //{color:'blue'}가 나오는 게 확인이 된다.

//배열을 필터링하는 방법
const arr =[
    {num:1 , color: "red"},
    {num:2, color: "black"},
    {num:3, color: "blue"},
    {num:4, color: "green"},
    {num:5, color: "blue"},
];

console.log(arr.filter((elm)=>elm.color ==="blue"));
//[ { num: 3, color: 'blue' }, { num: 5, color: 'blue' } ] 두 개가 출력이 됐다. 
//배열에서 특정한 조건을 만족하는 요소들을 []로 받고 싶으면, filter를 사용하면 된다.

console.log(arr.slice(0,2)); //[ { num: 1, color: 'red' }, { num: 2, color: 'black' } ]
//slice는 end에서 1개를 뺀 것까지만 반환을 한다. index 0,1만 반환이 된다. 

const arr =[
    {num:1 , color: "red"},
    {num:2, color: "black"},
    {num:3, color: "blue"},
];

const arr2 =[
    {num:4, color: "green"},
    {num:5, color: "blue"}
]
console.log(arr.concat(arr2)); //다시 하나의 배열로 return을 해준다. 

//배열을 정렬하는 방법
let chars = ['나','다','가'];
chars.sort(); //sort는 원본 배열의 순서를 정렬한다. 
console.log(chars)

//숫자형 배열도 정렬
let numbers =[0,1,3,2,10,30,20];
// console.log(numbers); // [0, 1, 10, 2, 20, 3, 30 ]
const compare = (a,b) => {
    //1. 같다
    //2. 크다
    //3. 작다
    if(a>b) {
        return 1; //크다
    }
    if(a<b) {
        return -1; //작다
    }
    return 0; //같다
};
numbers.sort(compare);
console.log(numbers) // [0,  1,  2, 3, 10, 20, 30] sort(numbers)로 구분한 후에는, 우리가 아는 숫자 순서대로 나옴
 
//내림차순으로 정렬을 하고 싶으면, return -1, return 1 순을 바꾸면 된다. 

//문자열을 합치고 싶을 때,
const arr = ['이정환','님','안녕하세요','또 오셨군요'];
console.log(arr[0],arr[1],arr[2],arr[3]);
console.log(arr.join()); //이정환,님,안녕하세요,또 오셨군요 쉼표로 연결을 해준다.
//만약에 쉼표가 싫다고 하면 
console.log(arr.join("")) //""을 넣으면, 쉼표가 삭제가 된다. ""안에, 다른 글자 바보, 나다 같은 단어를 붙이면 추가로 나오게 된다. 
console.log(arr.join('야옹')); //이정환야옹님야옹안녕하세요야옹또 오셨군요


 