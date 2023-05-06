// let arr =new Array();
let arr= []; 
console.log(arr) //[]이 출력이 된다.

let arr=[1,2,3,4];
console.log(arr); //[ 1, 2, 3, 4 ]

let arr2 =[1,"2",true,null,undefined,{},[],function(){}];
console.log(arr2) //[ 1, '2', true, null, undefined, {}, [], [Function (anonymous)] ]

let arr =[1,2,3,4,5]
console.log(arr[0]); //1이 출력된다. 인덱스는 배열의 순서

arr.push({key:"value"});
console.log(arr); //[ 1, 2, 3, 4, 5, { key: 'value' } ]

//배열의 길이를 확인하는 방법 arr.length라고 적어주면 된다. 