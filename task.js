
//       <-----  QUESTION  ----->
/* 

["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul 
eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir. 
Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. Cavab
 bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"].

*/

function monthsFunc(array) {
    return array.map((months, index) => {
      return months + "-" + (index + 1);
    });
  }

let months = ["Yanvar", "Fevral", "Mart", "Aprel"];
let newMonths = monthsFunc(months);
  
console.log(newMonths);
  