'use strict';
import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((allNamesFriens, user) => {
    if (user.friends.includes(friendName)) allNamesFriens.push(user.name);
    return allNamesFriens;
  }, []);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
