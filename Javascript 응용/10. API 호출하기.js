//json placeHolder를 검색해보면, resources가 나오게 된다. 

async function getData() {
    let response = fetch('https://jsonplaceholder.typicode.com/posts'); //fetch라는 내장함수를 사용했다. 
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
    
}

getData();