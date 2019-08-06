'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    let transactions = {
      amount,
    };

    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект транзакции
   */
  addTransaction(transaction) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

console.log(account.deposit(100));
