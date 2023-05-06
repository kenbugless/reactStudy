const arr=['a','b','c'];

for(let i =0;i<arr.length;i++) { //for(초기식;조건식;증감식)
   //반복 수행할 명령어 
   console.log(arr[i]); //a,b,c가 출력이 된다.
}

//객체를 순회하는 방법
let person = {
    name: '이정환',
    age:25,
    tall: 175
};

const personKeys =Object.keys(person);
console.log(personKeys) //[ 'name', 'age', 'tall' ]

for(let i=0;i<personKeys.length;i++) {
    // console.log(personKeys[i]);

    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey}:${curValue}`); //name: 이정환, age:25, tall:175로 출력이 된다.
}

//객체 value만 뽑고 싶다면, 
let person = {
    name: '이정환',
    age:25,
    tall: 175
};
const personValues = Object.values(person);
//console.log(personValues) //[ '이정환', 25, 175 ]

for(let i =0;i<personValues.length;i++) {
    console.log(personValues[i]);
}
이정환, 25, 175 출력이 확인된다. 

