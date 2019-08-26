'use strict';
import users from './users.js';

const getSortedUniqueSkills = users =>
  users.reduce((AllScillsUsers, user) => {
    AllScillsUsers.push(...user.skills);
    return AllScillsUsers.filter(skill => !skill.skills).sort();
  }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
