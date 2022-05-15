import Haiku from '../src/js/function.js'; 

describe('Haiku', () => {

  test('should create a haiku object with three lines', () => {
    const haiku = new Haiku("this is line1","this is line2","this is line2");
    expect(haiku.line1).toEqual("this is line1");
    expect(haiku.line2).toEqual("this is line2");
    expect(haiku.line3).toEqual("this is line3");
  });
});