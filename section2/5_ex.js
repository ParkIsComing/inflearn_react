
// 배열의 비구조화 할당
// let arr = ['one', 'two', 'three'];

// let [one, two, three, four = 4] = arr;
// //arr 따로선언 없이 아래처럼 해도 됨.
// //let [one, two, three] =  ['one', 'two', 'three'];
// console.log(one, two, three, four);

// let a=10;
// let b=20;
// [a,b] = [b,a];//비구조화 할당으로 swap
// console.log(a,b);

////객체의 비구조화 할당
let obj = {
    one: 'one',
    two: 'two',
    three: 'three',
    name: "가영"
  };
  
  let {name: myName,height, one, two, three} = obj;//키값을 기준으로 비구조화 할당
  console.log(myName, height, one, two, three);//가영 undefined 'one' 'two' 'three'