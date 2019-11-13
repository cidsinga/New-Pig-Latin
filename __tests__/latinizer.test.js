import { latinizer } from './../src/latinizer.js';
import { toPigLatin } from './../src/latinizer.js';

describe ('latinizer', () => {
  test('should return non letters', () => {
    const characters = latinizer('4');
    expect(characters).toEqual('4');
  });

  test('should return single letter input as the letter plus "way"', () => {
    const singleLetter = latinizer('a');
    expect(singleLetter).toEqual('away');
  });

  test('should return word that begins with a vowel with "way"', () => {
    const vowelWord = latinizer('equal');
    expect(vowelWord).toEqual('equalway');
  });

  test('should return word that begins with a consonant with "ay"', () => {
    const consonantWord = latinizer('bill');
    expect(consonantWord).toEqual('illbay');
  });

  test('should return word that contains "qu" ending in "quay"', () => {
    const quay = latinizer('squeal');
    expect(quay).toEqual('ealsquay');
  });
});

describe ('toPigLatin', () => {
  test('should return all words in a sentance translated into piglatin', () => {
    const sentence = toPigLatin('hello world');
    expect(sentence).toEqual('ellohay orldway')
  });
});
