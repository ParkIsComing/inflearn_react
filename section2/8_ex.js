//PROMISE

//비동기 작업이 가질 수 있는 3가지 상태
//1. PENDING
//2. FULFILLED(성공) -> resolve 
//3. REJECTED(실패) ->rejected


// function isPositive(number, resolve, reject) {
//   setTimeout(() => {
//     if(typeof number === 'number'){
//       //성공한 부분 (resolve)
//       resolve(numer >= 0? '양': '음')
//     }
//     else{
//       //reject
//       reject("주어진 값이 숫자형 값 아님");
//     }
//   },2000)
// }

// isPositive(10, (res) =>{
//   console.log('성공적으로 수행', res);,
// },
//  (err) -> {
//     console.log('실패', err);
//   });

function isPositiveP(number){
    const executor = (resolve, reject) => {
      setTiemeout(() => {
        if(typeof number === 'number'){
        //성공한 부분 (resolve)
          
        resolve(numer >= 0? '양': '음')
      }
      else{
        //reject
        reject("주어진 값이 숫자형 값 아님");
      }
    
      },2000)
    }
    const asyncTask = new Promise(executor);
  return asyncTask;
  }
  
  const res = isPositiveP(101);  
  res.then((res) => {
    console.log("작업 성공:", res);
  })
  .catch((err) => {
    console.log("작업 실패:", err);
  })