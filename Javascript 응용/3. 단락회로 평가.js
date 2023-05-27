console.log(true && true) ; //true
console.log(true || false); //true
console.log(!true); //false


const getName = (person) => {
    if(!person) {
        return "객체가 아닙니다."
    }
    return person.name;
}
let person;
const name = getName(person);
console.log(name);



const getName = (person) => {
    return person && person.name;
}
let person ;
const name = getName(person);
console.log(name);
//undefined가 나오게 된다. 