'use strict';

const countProps = function(obj) {
  // const keys = Object.keys(obj);
  // return keys.length;
  return Object.keys(obj).length;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
