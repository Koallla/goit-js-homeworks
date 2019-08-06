'use strict';

function findBestEmployee(employees) {
  let name;
  let maxQuantityTasks = 0;
  const entries = Object.entries(employees);
  for (const entrie of entries) {
    if (maxQuantityTasks < entrie[1]) {
      maxQuantityTasks = entrie[1];
      name = entrie[0];
    }
  }
  return name;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
