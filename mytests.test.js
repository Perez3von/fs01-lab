

import { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } from './utils.js';

describe('getName', () => {
  it('it returns object name spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('spot');
  });
  
  it('it returns object name Aang', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name  = getName(character);
    expect(name).toEqual('Aang');
  });


  it('it returns a copy array with added number', () => {
    const numbers = [1, 2, 3];
    const name = copyAndPush(numbers, 4);
    expect(name).toEqual([1, 2, 3, 4]);
  });

  it('it takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
    const words = ['hello', 'Fantastic', 'free', 'world'];
    const name = capitalizeAndFilter(words);
    expect(name).toEqual(['HELLO', 'WORLD']);
  });

  it('it return a single quote with the format from api', async () => {

    const quote = await fetchQuotes();
    expect(quote).toEqual(
      {
        name:expect.any(String),
        text:expect.any(String),
        image:expect.any(String)
      });
  });
});



