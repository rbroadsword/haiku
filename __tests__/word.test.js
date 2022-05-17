import Word from "../src/js/word.js";

describe("Word", () => {
  test("should correctly create a word object", () => {
    const myWord = new Word("practice", 0, 0);
    expect(myWord.word).toEqual("practice");
    expect(myWord.syllable).toEqual(0);
    expect(myWord.vowelCount).toEqual(0);
  });

  test("should correctly determine if there is a vowel in a word", () => {
    const myWord = new Word("egg", 0, 0);
    myWord.checkVowelSyllable();  
    expect(myWord.vowelCount()).toEqual(1);
  });

  test("should correctly determine if there is a vowel in a word", () => {
    const myWord = new Word("gg", 0, 0);
    expect(myWord.checkVowelSyllable()).toBeFalsy();
  });

  test("should check that silent e in the end of the word", () => {
    const myWord = new Word("blue", 0, 0);
    expect(myWord.endsWithE()).toBeTruthy();
  });

  test("should check that silent e in the end of the word", () => {
    const myWord = new Word("able", 0, 0);
    expect(myWord.endsWithE()).toBeTruthy();
  });

  test("should check that silent e in the end of the word", () => {
    const myWord = new Word("green", 0, 0);
    expect(myWord.endsWithE()).toBeFalsy();
  });

  test("should check if there are two vowels next to each other and return true", () => {
    const myWord = new Word("about", 0, 0); 
    expect(myWord.diphthong()).toBeTruthy(); 
  }); 

  test("should check if there are two vowels next to each other and return false", () => {
    const myWord = new Word("make", 0, 0); 
    expect(myWord.diphthong()).toBeFalsy(); 
  });

  test('should divide the syllable between two same consonants', () => {
    const myWord = new Word('rabbit', 0, 0);
    expect(myWord.doubleConsonants()).toBeTruthy();
  });
});
