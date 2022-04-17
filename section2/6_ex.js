//spread 연산자
const cookie = {
    base:"cookie",
    madeIn: "korea",
    
  };
  
  const chocoCookie ={
    ...cookie,//spread operator
    topping: 'choco'
  };
  
  const blueberryCookie = {
      ...cookie,
      topping: 'blueberry'
  };
  
  console.log(chocoCookie);
  console.log(blueberryCookie);
  
  const noTopingCookie = ['촉촉', '안촉촉'];
  const topingCookie = ['딸기', '초코', '바나나'];
  
  const allCookies = [...noTopingCookie, ...topingCookie];
  console.log(allCookies);