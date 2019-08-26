'use strict';
import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const usersSort = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  return usersSort;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez']
