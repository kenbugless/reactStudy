// callback 지옥을 해결할 수 있는, Promise

//Pending(대기상태) => Fulfilled(성공)-Resolve(해결), Rejected(실패)-Reject(거부)

function isPositive(number,resolve,reject) {
    setTimeout(()=>{
        if(typeof number ==='number'){
            //성공 => resolve
            resolve(number>=0 ?"양수" :"음수")
        }else {
            //실패 => reject
            reject("주어진 값이 숫자형 값이 아닙니다.")
        }
    },2000);
}

isPositive(10),(res)=>{
    console.log('성공적으로 수행됨': )
},()=>{}) ;