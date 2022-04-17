//API 호출
//보충
//fetch는 API호출을 돕는 내장함수

async function getData(){
    let rawResponse =  await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
  }
  
  getData();
  