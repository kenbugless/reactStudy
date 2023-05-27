const cookie = {
    base: "cookie",
    madeIn: "Korea",

}
const chocochipCookie = {
    ...cookie, 
    toping: "chocochip"
}

//{ base: 'cookie', madeIn: 'Korea', toping: 'chocochip' }

const blueberryCookie {
    ...cookie,
    toping: "blueberry",
}

const strawberryCookie = {
    ...cookie,
    toping: "strawberry"
}

console.log(chocochipCookie)
console.log(strawberryCookie)
console.log(blueberryCookie)

//중복된 property를 계속 작성해야 하는 경우, ...을 spread연산자라고 한다. 객체에 값을, 새로운 객체에 뿌려주는 연산자라고 생가갛자. 

//배열에서도 사용이 가능하다.

const noTopingCookies =['촉촉한 쿠키','안촉촉한 쿠키'];
const topingCookies = ['바나나 쿠키','블루베리 쿠키', '딸기쿠기','초코칩쿠키'];

const allCookies = [...noTopingCookies,'함정쿠키',...topingCookies]
console.log(allCookies) //[ '촉촉한 쿠키', '안촉촉한 쿠키', '함정쿠키', '바나나 쿠키', '블루베리 쿠키', '딸기쿠기', '초코칩쿠키' ] 중간에 삽입도 간으하다.


