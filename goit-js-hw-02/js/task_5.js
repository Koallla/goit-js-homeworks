'use strict';

let outputStringLength = 40;

const formatString = function(string) {
  return string.length < outputStringLength
    ? string
    : `${string
        .split('')
        .slice(0, outputStringLength)
        .join('')}...`;
};
// Этот вариант длиннее
// if (string.length < outputStringLength) {
//   return string;
// } else {
//   const outputString = string
//     .split('')
//     .slice(0, outputStringLength)
//     .join('');
//   return `${outputString}...`;
// }

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
