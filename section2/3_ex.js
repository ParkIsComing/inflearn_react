//3. 단락회로 평가
console.log(false && true);//앞에꺼가 false이면 바로 연산 끝냄 -> 단락회로평가
console.log( true || false);//앞에꺼가 true이면 연산 끝냄 

const getName = (person) => {
  return person && person.name; //person이 falsy이면 그 값 그대로 리턴
  return name || "객체 아님";
}

let person = null;
const name= getName(person);
console.log(name);