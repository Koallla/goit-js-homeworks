'use strict';
import users from './users.js';

//Task 1
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

//Task 2
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

//Task 3
const getUsersWithGender = (users, gender) =>
  users.reduce((nameByGender, user) => {
    if (user.gender === gender) {
      nameByGender.push(user.name);
    }
    return nameByGender;
  }, []);
console.log(getUsersWithGender(users, 'male'));

//Task 4
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

//Task 5
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
//Task 6
const getUsersWithAge = (users, min, max) =>
  users.filter(user => min < user.age && user.age < max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
//Task 7
const calculateTotalBalance = users =>
  users.reduce(
    (totalBalance, objectUsers) => totalBalance + objectUsers.balance,
    0,
  );
console.log(calculateTotalBalance(users));
//Task 8
const getUsersWithFriend = (users, friendName) => {
  return users.reduce((allNamesFriens, user) => {
    if (user.friends.includes(friendName)) allNamesFriens.push(user.name);
    return allNamesFriens;
  }, []);
};
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
//Task 9
const getNamesSortedByFriendsCount = users => {
  const usersSort = [...users]; //Иммутация
  usersSort
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  return usersSort;
};
console.log(getNamesSortedByFriendsCount(users));
//Task 10

const getAllskills = users =>
  users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);

const Allskills = getAllskills(users);

const getUniqueSkills = (acc, skill) => {
  if (!acc.includes(skill)) {
    acc.push(skill);
  }
  return acc;
};

const getSortedUniqueSkills = Allskills =>
  Allskills.reduce(getUniqueSkills, []).sort();

console.log(getSortedUniqueSkills(Allskills));
