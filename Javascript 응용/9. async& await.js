function hello() {
    return 'hello'
}

async function helloAsync() {
    return 'hello Async';
}

console.log(hello()); //hello
console.log(helloAsync()) //Promise { 'hello Async' } async는 Promise를 반환하도록 한다.

helloAsync().then((res)=>
(console.log(res))); //hello Async

////////////////////////////////////////////////////////////////

function delay (ms) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(),ms})
    })
}
async function helloAsync() {
    return delay(3000).then(()=>{
        'hello Async';
    })
    }

    helloAsync().then((res)=>
(console.log(res))); 



function delay (ms) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(),ms})
    })
}
async function helloAsync() {
    await delay(3000);
    return "hello async";
    }

    helloAsync().then((res)=>
(console.log(res))); 



