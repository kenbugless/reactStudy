// 동기적으로만 작동하게 되면, 하나의 작업이 너무 오래 걸리게 될 시, 모든 작업이 오래 걸리는 단점이 있음. 전반적인 흐름이 느려진다. 
// => 동기처리 방식의 문제점

// 이것을 해결하기 위해서, MultiThread 방식으로 작동시키면 이런 식으로 분할이 가능해진다. 
// 자바스크립트는 싱글 스레드 방식으로 사용하고 있다. => 이걸 해결하기 위해서, 비동기방식을 활용하면 된다. 동시에 다 실행시킴 => '비동기 작업'

function taskA() {
    console.log("A 작업 끝")
}
taskA();
console.log("코드 끝");
//A 작업 끝, 코드 끝 순서대로 작동된다. 동기적으로 작동이 된다. 



function taskA() {
   setTimeout(()=>{console.log("A Task End")},2000)
}
taskA();
console.log("코드 끝");

// 코드 끝, A Task End 순으로 실행이 된다.


function task(a,b, cb) {
    setTimeout(()=>{
        const res = a+b;
        cb(res);
    },3000)
}
task(3,4, (res)=>{
    console.log("A Task Result :" , res);
});
console.log("코드 끝")
// 코드 끝 , A Task Result : 7


function taskB(a, cb) {
    setTimeout(()=>{
        const res =a*2;
        cb(res);
    },1000)
} 

task(7,(res)=>{
    console.log("B Task Result :",res);
})

console.log("코드 끝");