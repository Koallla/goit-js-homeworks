'use strict';
import users from './users.js';

const getUsersWithGender = (users, gender) =>
  users.reduce((nameByGender, user) => {
    if (user.gender === gender) {
      nameByGender.push(user.name);
    }
    return nameByGender;
  }, []);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
