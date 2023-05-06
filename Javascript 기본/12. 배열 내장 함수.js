const arr =[1,2,3,4];

for(let i =0;i<arr.length;i++) {
    console.log(arr[i])
}

//자바스크립트 자료형은 모두 객체로 이루어져 있기 때문에, 객체 메서드를 쓰는 것처럼 사용하면 된다.
arr.forEach((elm) =>console.log(elm));

arr.forEach(function (elm) {
    console.log(elm);
}); //1,2,3,4가 나오게 된다. 



