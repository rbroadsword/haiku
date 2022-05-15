import Word from '../src/js/word.js';

describe('Word', () => {

  test('should correctly create a word object', () => {
    const myWord = new Word('practice', 0, 0 );
    expect(myWord.word).toEqual('practice');
    expect(myWord.syllable).toEqual(0);
    expect(myWord.vowelCount).toEqual(0);
  });

  test('should correctly determine if there is a vowel in a word', () => {
    const myWord = new Word("egg", 0, 0); 
    expect(myWord.checkVowelSyllable()).toBeTruthy(); 
  }); 

  test('should correctly determine if there is a vowel in a word', () => {
    const myWord = new Word("gg", 0, 0); 
    expect(myWord.checkVowelSyllable()).toBeFalsy(); 
  }); 
});