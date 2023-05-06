//콜백함수 = 함수에 파라미터로 들어가는 함수
//용도 -순차적으로 실행하고 싶을 때 씀

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