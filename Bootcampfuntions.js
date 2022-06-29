
  var totalPhoneBill = function(calls){
  var callist = calls.split(",");
  var smsCounter = 0;
  var callCounter = 0;
  
  for(var c = 0; c < callist.length; c++){
    
   if( callist[c].includes("sms") ){
     smsCounter = smsCounter + 0.65;
   }
       else if(callist[c].includes("call") ){
       callCounter = callCounter + 2.75;
       }
     var total = smsCounter + callCounter;
  }
  return "R" + total.toFixed(2);
 
}

var transportFee = function(shift){

switch(shift){
  case "morning":
    return "R20";
    break;
  case "afternoon":
    return "R10";
    break;
  default:
    return "free";
}
}

  var enoughAirtime = function(usage, Camount){
    var smsCount = 0;
    var callCount = 0;
    var dataCount = 0;
   
  
    let usagelist = usage.split(",");
    
    for(var u = 0; u < usagelist.length; u++){
      
      if(usagelist[u].includes("sms")){
         //smsCount++;
        smsCount = smsCount + 0.75;
         }
     else if(usagelist[u].includes("call")){
         callCount = callCount + 1.88;
      }
         else if(usagelist[u].includes("data")){
         dataCount = dataCount + 12;
        }
     var totalUsage = smsCount + callCount + dataCount;
     
    } 
  
  if(totalUsage < Camount){
     return "R" + (Camount-totalUsage).toFixed(2);
     }
    else if(totalUsage >= Camount) {
      //console.log("R" + (totalUsage-totalUsage).toFixed(2));
      return "R" + (totalUsage-totalUsage).toFixed(2);
     }
  }

  
  var longestWord = function(sentence){
var Words = sentence.split(" ");
//console.log(Words);
var longest = "";
for (var i=0; i< Words.length; i++) {
var eachword = Words[i];
if (eachword.length >= longest.length){
longest = eachword;
}}
console.log(longest)
return longest ;
}

function shortestWord (sentence) {
var Words = sentence.split(" ");
var max = 5;
var shortest = " ";
for ( var i=0; i<Words.length; i++){
var eachword = Words[i];
if (eachword.length <= max){
  max = eachword.length;
  shortest = eachword;
}}
console.log (shortest);
return shortest;
}
function wordLengths(sentence){
let Words = sentence.split(" ");
var lengthh = 0;

for (var i=0; i<Words.length; i++){

 lengthh = lengthh + Words[i].length;
}
console.log(lengthh)
return lengthh;
}