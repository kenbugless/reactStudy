//콜백함수 = 어떤 다른 함수에 매개변수로 함수를 넘겨준 것

function checkMood(mood,goodCallback,badCallback) {
    if(mood ==='good') {
        goodCallback();
        //기분 좋을 때 동작
    }else {
        //기분이 안 좋을 때 동작
        badCallback(); //ACtion : : CRY가 실행된다.
    }
}

function cry () {
    console.log("ACtion : : CRY");
}

function sing() {
    console.log("ACTION :: SING");
};

function dance() {
    console.log("ACTION ::DANCE");
}

checkMood('sad',sing,cry); //badCallback 함수가 값으로 담게 했다. 함수 표현식, 