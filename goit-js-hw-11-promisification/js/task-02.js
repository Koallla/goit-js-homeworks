'use strict';

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const toggleUserState = (users, name) => {
  return new Promise(resolve => {
    const updatedUsers = users.map(user =>
      user.name === name ? { ...user, active: !user.active } : user,
    );

    resolve(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
