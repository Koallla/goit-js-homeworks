'use strict';

const banSpam = 'spam';
const banSale = 'sale';

const checkForSpam = function(str) {
  return (
    str.toLowerCase().includes(banSpam) || str.toLowerCase().includes(banSale)
  );
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
