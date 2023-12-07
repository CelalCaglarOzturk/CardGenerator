//VARIABLES
let cardName = 'Man o War'// prompt('Name')
let cardType = prompt('Enter the Card Type').toUpperCase(); //convert to dropdown /// boolean selector and letter insensitive converting string.toUppercase
let cardLevel = 13
let cardAttack = 9999  //less than 10000 ayarlanmalı
let cardDefense = 9999 //less than 10000 ayarlanmalı
let dice = Math.ceil(Math.random()*52) //52 yüzlü zar atımı later converted to a file selector


//WRITE LOG
//IMPORT EVERYWORD
//IMPORT CSV
//LIMIT THINGS
//CREATE IMG
//calculator - calcualte ratio defense attack vector
//FUNCTIONS

function cardTypeCheck(cardType){ 
  //  console.count('its called')
    let validCardTypes =  ["EFFECT", "FUSION", "LINK", "NORMAL", "RITUAL", "SPELL", "SYNCHRO", "TRAP", "XYZ"];
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
let today = new Date();
 let year = today.getFullYear();
 let month = ('0' + (today.getMonth() + 1)).slice(-2); // Ay sıfır ile başladığı için +1 eklenir
 let day = ('0' + today.getDate()).slice(-2);
 let hour = today.getHours();
 let minute = today.getMinutes();
 let seconds = today.getSeconds();
 let serialNumberCalc = year + month + day +'-'+ hour + minute + seconds;

return serialNumberCalc;

}
//UNIX TIME
function unixTimeCalc(){
    let today = new Date();
    let unixTimeCalc = today.getTime();

   return unixTimeCalc;
}

function cardTimeCalc(){
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2); // Ay sıfır ile başladığı için +1 eklenir
    let day = ('0' + today.getDate()).slice(-2);
    let cardTimeCalc = year + month + day;
   
return cardTimeCalc;
}

 //FUNCTION DEPENDENT VARIABLE CALLS
let unixTime = unixTimeCalc();
let cardTime = cardTimeCalc();
let serialNumber = serialNumberCalc();

const CardInfo = [cardName, cardType, cardLevel, cardAttack, cardDefense, serialNumber, cardTime]

//LOGGING SECTION

console.log('You Created This: '+CardInfo);
console.log('You rolled: '+dice+'/52')
console.log('Unix Time '+unixTime)
console.log(CardInfo.length+' variables stored')
