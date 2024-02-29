import { useState } from 'react'



function App() {
  function mainProcess(){
    //VARIABLES
let cardName: string = 'Man o War'// prompt('Name')
let cardType: string = 'z'//prompt('Enter the Card Type').toUpperCase(); //convert to dropdown /// boolean selector and letter insensitive converting string.toUppercase
let cardLevel: Number = 13
let cardAttack: Number = 9999  //less than 10000 ayarlanmalı
let cardDefense: Number = 9999 //less than 10000 ayarlanmalı
let dice: Number = Math.ceil(Math.random()*52) //52 yüzlü zar atımı later converted to a file selector


//WRITE LOG
//IMPORT EVERYWORD
//IMPORT CSV
//LIMIT THINGS
//CREATE IMG
//calculator - calcualte ratio defense attack vector
//FUNCTIONS

function cardTypeCheck(cardType:string){ 
  //  console.count('its called')
    let validCardTypes:string[] =  ["EFFECT", "FUSION", "LINK", "NORMAL", "RITUAL", "SPELL", "SYNCHRO", "TRAP", "XYZ"];
    validCardTypes.forEach((e)=>{
        
        if(cardType === e) {
            return true
        }
    })
    console.log('Amogus Syntax Error')
    return false
}
cardTypeCheck(cardType)

//TARİH VE SERİ HESAPLAMA
function serialNumberCalc(){
    if (cardTypeCheck(cardType)===false){
        return
    } 
let today:Date = new Date();
 let year:Number = today.getFullYear();
 let month:string = ('0' + (today.getMonth() + 1)).slice(-2); // Ay sıfır ile başladığı için +1 eklenir
 let day:string = ('0' + today.getDate()).slice(-2);
 let hour:Number = today.getHours();
 let minute:Number = today.getMinutes();
 let seconds:Number = today.getSeconds();
 let serialNumberCalc = year.toString() + month + day +'-'+ hour.toString() + minute.toString() + seconds.toString();

return serialNumberCalc;

}
//UNIX TIME
function unixTimeCalc(){
    let today:Date = new Date();
    let unixTimeCalc:Number = today.getTime();

   return unixTimeCalc;
}

function cardTimeCalc(){
  let today:Date = new Date();
  let year:Number = today.getFullYear();
  let month:string = ('0' + (today.getMonth() + 1)).slice(-2); // Ay sıfır ile başladığı için +1 eklenir
  let day:string = ('0' + today.getDate()).slice(-2);
  let cardTimeCalc = year.toString() + month + day;
   
return cardTimeCalc;
}

 //FUNCTION DEPENDENT VARIABLE CALLS
let unixTime = unixTimeCalc().toString();
let cardTime = cardTimeCalc();
let serialNumber = serialNumberCalc();

const CardInfo = [cardName, cardType, cardLevel, cardAttack, cardDefense, serialNumber, cardTime]

//LOGGING SECTION

console.log('You Created This: '+CardInfo);
console.log('You rolled: '+dice+'/52')
console.log('Unix Time '+unixTime)
console.log(CardInfo.length+' variables stored')


}


  const [count, setCount] = useState(0)

  return (  )
}

export default App
