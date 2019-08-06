'use strict';

const findLongestWord = function(string) {
  let arrayWords = string.split(' ');
  let longestWord = arrayWords[0];

  for (let i = 1; i < arrayWords.length; i += 1) {
    if (arrayWords[i].length > longestWord.length) {
      longestWord = arrayWords[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
