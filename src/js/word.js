export default class Word {
  constructor ( word, syllable, vowelCount) {
    this.word = word;
    this.syllable = 0;
    this.vowelCount = 0;
  }

  checkVowelSyllable(word) {
    const wordArray = this.word.split(""); 
    console.log(wordArray);
    if (wordArray[wordArray.length -1] === "e"){
      return true; 
    } else if (wordArray.includes('a') || wordArray.includes('e') || wordArray.includes('o') || wordArray.includes('i') || wordArray.includes('u') || wordArray.includes('y')) {
      return true; 
    } else {
    return false;
    }
  }
}
