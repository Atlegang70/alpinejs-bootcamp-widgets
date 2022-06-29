document.addEventListener('alpine:init', () => {
Alpine.data('phonebillWidget', function(){
 return { call:'', total2:0 , 
   tot(){ 
    this.total2 = totalPhoneBill(this.call);
    
    } 
  }

});
});



document.addEventListener('alpine:init', () => {
  Alpine.data('airtimeUsage', function(){
return{ airtimeActivity: '' , usedAirtime: 0, airtimeLeft: 0, 
calculate(){
this.airtimeLeft = enoughAirtime(this.airtimeActivity, this.usedAirtime);
}
}

});
});



document.addEventListener('alpine:init', () => {
  Alpine.data('words', function(){
    return{ lineSentence: '', shortWord: '', longWord:'', lengthWord: 0, 
    LongShortLength(){
    
      this.shortWord = shortestWord(this.lineSentence);
      this.longWord = longestWord(this.lineSentence);
      this.lengthWord = wordLengths(this.lineSentence);
    }
    
    }

   });
});



