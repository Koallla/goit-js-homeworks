'use strict';

const Account = function(Login, Email) {
  this.Login = Login;
  this.Email = Email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.Login}, Email: ${this.Email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
