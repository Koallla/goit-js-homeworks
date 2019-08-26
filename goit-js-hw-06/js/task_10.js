'use strict';
import users from './users.js';

const getSortedUniqueSkills = users =>
  users.reduce(
    (AllScillsUsers, user) => {
      AllScillsUsers.push(...user.skills);
      AllScillsUsers.filter(skill => !skill.skills);
      const AllScillsUsersSort = AllScillsUsers.sort();
      return AllScillsUsersSort;
    },

    [],
  );

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
