function isKoreaFood(food) {
    if(food ==="불고기" || food ==="비빔밥" || food==="떡볶이") {
        return true;
    }
    return false;
}

const food1 = isKoreanFood("불고기");
const food2= isKoreaFood("파스타");
console.log(food1);
console.log(food2);


function isKoreaFood(food) {
    if(["불고기","떡볶이","비빔밥"].includes(food)) {
        return true;
    }
    return false;
}

const food1 = isKoreanFood("불고기");
const food2= isKoreaFood("파스타");
console.log(food1);
console.log(food2);



const getMeal = (mealType) => {
    if(mealType ==="한식") return "불고기";
    if(mealType ==="중식" ) return "파스타";
    if(mealType ==="중식") return "멘보샤";
    return "굶기";
}
console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal("한식"));

//////////////////////

const meal = {
    한식: "불고기",
    중식: "멘보샤",
    일식: "초밥",
    양식: "스테이크",
    인도식: "카레"
}
const getMeal =(mealType) => {
    return meal[mealType] || "굶기";
}
console.log(getMeal("한식"));
console.log(getMeal("양식"));
console.log(getMeal());
