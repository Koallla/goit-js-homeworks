'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
  const arrayMessage = message.split(' ');
  const totalPrice = arrayMessage.length * pricePerWord;
  return totalPrice;

  // Другой способ
  // const arrayMessage = message.split(' ');
  // let total = 0;

  // for (const word of arrayMessage) {
  //   total += pricePerWord;
  // }

  // return total;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
