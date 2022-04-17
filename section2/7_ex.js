//동기 비동기

//동기방식 처리: 이전 작업이 진행 중일때는 다음 작업 수행x기다림o
// -> 단점: 하나의 작업 오래걸리면 전반적으로 느려짐

//멀티쓰레드

//비동기: 싱글쓰레드 방식을 이용하면서 여러개 작업을 동시 실행
// 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행
//setTimeout()은 web API에서 처리


function taskA(a, b, cb){
    return new Promise(setTimeout(()=> {//이렇게 비동기구현
      const res = a+b;
      cb(res);
    }, 3000))
    
  
  }
  
  function taskB(a, cb) {
    return new Promise(  setTimeout (() => {
      const res = a*2;
      cb(res);
    }, 1000))
  
  }
  
  function taskC(a, cb){
    return new Promise( setTimeout(() => {
      const res = a*-1;
      cb(res);
    },2000));
   
  }
  
  // taskA(3,4, (res) => {console.log("a take result:", res)
  //                     });
  
  // taskB(7, (res) => {
  //   console.log('b task result:', rest);
  // })
  
  // taskA(4,5,(a_res) => {
  //   console.log('a result :', a_res);//a result : 9
  //   taskB(a_res, (b_res) => {
  //     console.log('b result :', b_res);//b result : 18
  //     taskC(b_res, (c_res) => {
  //       console.log('c result:', c_res);//c result: -18
  //     })
  //   })
  // })
  
  taskA(5,1)
    .then((a_res) => {//프로미스를 전달받아
    console.log('a result', a_res);
    return taskB(a_res);//taskB를 리턴
  })
    .then((b_res) => {//taskB를 반환받은 프로미스에 THEN
    console.log('b result', b_res);
    return taskC(b_res);
  })
    .then((c_res) =>{
    console.log('c result', c_res);
  })
  
  console.log("코드끝");
  