export default class Word {
  constructor(word, syllable, vowelCount) {
    this.word = word;
    this.syllable = 0;
    this.vowelCount = 0;
  }

  checkVowelSyllable(word) {
    const wordArray = this.word.split("");
    if (
      wordArray.includes("a") ||
      wordArray.includes("e") ||
      wordArray.includes("o") ||
      wordArray.includes("i") ||
      wordArray.includes("u") ||
      wordArray.includes("y")
    ) {
      return true;
    } else {
      return false;
    }
  }

  endsWithE(word) {
    const wordArray = this.word.split("");
    if (wordArray[wordArray.length - 1] === "e") {
      return true;
    } else {
      return false;
    }
  }
  diphthong() {
    const wordArray = this.word.split(""); 
    const myWord = this.word; 
    console.log(typeof myWord); 
    const vowels = ["a", "i", "e", "o", "u", "y"];
    const diphthongs = ["oi", "oy", "ou", "oo", "au", "ay", "ai", "ea", "ie", "ee" ]; 

    diphthongs.forEach(function(){
      if (myWord.includes(diphthongs)){
        return true; 
      }else {
        return false; 
      }
    })
  
  // for (let i = 0; i < diphthongs.length -1; i++){
  //   if (myWord.includes(diphthongs[i])) {
  //     return true; 
  //   } else {
  //     return false; 
  //   }
  // }
  }
}
