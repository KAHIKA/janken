const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

//チョキ大好きマンに対するアクション
function actionAgainstChoki() {
 return GU;
}

//表か裏かマンに対するアクション
function actionAgainstOmoteUra(){
   matches = matches + 1;
  const amari = matches % 2;
  const isEven = amari == 0;
  console.log(`${matches} % 2 = ${amari} : ${isEven}`);
  if(isEven){
    result = GU;
  }
  return result;
}

//表か裏かマン2に対するアクション
function actionAgainstOmoteUra2(){
 matches = matches + 1
 const amari = matches % 3;
 const isEven = amari ==0;
 console.log(`${matches} % 3 = ${amari} : ${isEven}`);
 if(isEven){
    return CHOKI
   }
   return GU;
}

/*　対戦相手の名前
チョキ大好き："fighter::choki-lover"
表か裏："fighter::odd-even"
表か裏2："fighter::on-third"
*/

 function action(oppornent){
 console.log(oppornent);
 maches = matches + 1
 let result = GU;
 if (oppornent == "fighter::choki-lover"){
   result = actionAgainstChoki();
 }  else { 
   if (oppornent == "fighter::odd-even" ){
   result = actionAgainstOmoteUra();
 } else {
   result = actionAgainstOmoteUra2();
 }
 }
return result;

}


