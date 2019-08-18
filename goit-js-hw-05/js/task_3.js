'use strict';

const Storage = function(items) {
  this.items = items;
};

Storage.prototype.getItems = function() {
  return this.items;
};

Storage.prototype.addItem = function(item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function(item) {
  const findElement = this.items.indexOf(item);
  this.items.splice(findElement, 1);
};

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
