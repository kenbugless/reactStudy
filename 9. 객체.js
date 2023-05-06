//원시타입 vs 비원시타입

let person = new Object(); //new를 만들어서 생성하는 방법, 생성자 방식
let person = {}; //객체 리터럴 방식 

let person = {
    key :"value", //key와 value를 프로퍼티라고 부른다.
    key1:"value2"
}//객체 리터럴 방식
console.log(person); //{ key: 'value', key1: 'value2' }
//key는 반드시 그냥 ""없이, 문자열로만 작성해야 한다. key끼리 중복되어도 문제는 되지 않지만, 중복을 되도록이면 회피하자.
//value에 숫자, bool, undefined, [],함수 모두 가능하다.

//person.key을 사용하거나, person['key']라고 사용할 수 있다. 괄호 표기법을 사용할 때는, 문자열 Key를 ''로 입력해야한다. 


let person = {
    name : "이정환",
    age:25
}; 

function getPropertyvalue(key) { // 'name'이 들어가서, 
    return person[key]; //person['name']이 들어가서, retun "이정환"이 된다.
}

console.log(getPropertyvalue('name')); /* console.log('이정환')으로 바뀌어서 => 이정환이 출력된다.  */

//여기서, 함수 선언식이므로, console.log(getPropertyvalue('name'))을 function 위에 적어도 값이 나오게 된다. 

let person = {
    name : '이정환',
    age: 25
}
person.location ="한국";
person['gender']='남성';
console.log(person) //{ name: '이정환', age: 25, location: '한국', gender: '남성' } 추가된 것이 확인이 된다.

//혹시나 변경을 하고 싶다고 하면, 
let person = {
    name : '이정환',
    age: 25
}
person.name ="이정환 A";
person['age']=40;
console.log(person)  //{ name: '이정환 A', age: 40 }


//Const로 선언을 했다고 하더라도, 에러가 발생하지 않는다. 객체인 경우는 추가, 수정이 가능하다. 재선언을 하는 것은 x
const person = {
    name : '이정환',
    age: 25
}
person.name ="이정환 A";
person['age']=40;
console.log(person)  //{ name: '이정환 A', age: 40 }

//객체 안에 property 삭제 하는 방법은 
//delete person.age; 라고 적으면 삭제가 된다.  delete로 시작하기 
//추가로, delete로 삭제한 것에 대해서는, 메모리에서는 지워지지 않는다. 메모리는 계속 사용하므로, 차라리 
//person.name =null; Null값을 바꿔서 작성해 주는 것이 더 좋다. 

//객체안에 함수가 있는 것을 메서드라고 부른다. 

const person = {
    name : '이정환',
    age: 25,
    say :function() { //객체 안에 함수를 메서드라고 부른다. 함수가 아닌 프로퍼티들은 멤버라고 부른다. 
        console.log(`안녕 나는 ${this['name']}`); //객체 안에 메서드를 만들게 되면, this라고 불러도 된다. person['name']도 물론 가능
    }
}
person.say() //person['say]();

//추가로, 객체 안에 Property가 있는 지 확인하는 방법
const person = {
    name : '이정환',
    age: 25,
    say :function() { 
    }
}
console.log(`name :${'name' in person}`); //name :true
console.log('age' in person) //true
console.log('gender' in person) //false를 반환한다.
//in 연산자를 확인하면 확인이 가능하다. 
