//async, await

function hello(){
    return 'hello';
    
  }
  // async function helloAsync() {//function 앞에 async 붙이면 promise를 리턴
  //   return delay(3000).then(() => {
  //     return 'hello async';
  //   })
  // }
  
  
  
  helloAsync().then((res) => {
    console.log(res);//hello async
  })
  
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve(), ms)
    })
  }
  
  async function helloAsync() {//function 앞에 async 붙이면 promise를 리턴
    await delay(3000);//await 키워드를 async 붙은 함수 내에서 붙이면 그 라인은 동기적으로 수행
    return 'hello async';
    
  }
  
  async function main(){
    const res = await helloAsync();
    console.log(res);
  }
  
  main();