'use strict';
import users from './users.js';

const calculateTotalBalance = users =>
  users.reduce(
    (totalBalance, objectUsers) => totalBalance + objectUsers.balance,
    0,
  );

console.log(calculateTotalBalance(users)); // 20916
