export default class Word {
  constructor(word, syllable, vowelCount) {
    this.word = word;
    this.syllable = 0;
    this.vowelCount = 0;
  }

  checkVowelSyllable(word) {
    const wordArray = this.word.split("");
    let counter = 0; 
    if (
      wordArray.includes("a") ||
      wordArray.includes("e") ||
      wordArray.includes("o") ||
      wordArray.includes("i") ||
      wordArray.includes("u") ||
      wordArray.includes("y")
    ) {
      this.vowelCount ++; 
      // counter ++; 
      // return counter;  
    }  
  }

  endsWithE(word) {
    const wordArray = this.word.split("");
    if (wordArray[wordArray.length - 2] === "l" && wordArray[wordArray.length - 1] === "e" ) {
      return true;
    } else if (wordArray[wordArray.length - 1] === 'e') {
      return true; 
    } else {
      return false;
    }
  }

  diphthong() {
    const myWord = this.word; 
    const diphthongs = ["oi", "oy", "ou", "oo", "oa", "au", "ay", "ai", "ea", "ie", "ee"]; 
    let containsDip = false; 

    diphthongs.forEach(function(dip){
      if (myWord.includes(dip)){
        containsDip = true; 
      }
    })
    return containsDip; 
  }

  doubleConsonants() {
    const myWord = this.word; 
    const consonants = ['bb', 'cc', 'dd', 'ff', 'gg', 'hh', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt', 'xx', 'zz']; 
    let cons = false; 

    consonants.forEach(function(dc) {
      if (myWord.includes(dc)) {
        cons = true;   
      }
    })
   return cons;
  }
}
