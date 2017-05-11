const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function action(oppornent){
  matches = matches + 1;
  const amari = matches % 2;
  const isEven = amari == 0;
  console.log(`${matches} % 2 = ${amari} : ${isEven}`);
  if(isEven){
    return GU
  }
  return PA;
}


//練習4
function abs(value){
   let result = value;
   if(result < 0){
     result = result * -1;
   }
   return result;
}

//練習5
function distance(x , y){
 let result = 0;
 result = y - x;
 result = abs(result);
 return result;
}
