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
    let id = this.transactions.length;
    const transaction = {
      id: id,
      type: 'deposit',
      amount,
    };
    this.addTransaction(transaction);

    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let id = this.transactions.length;
    const transaction = {
      id: id,
      type: 'withdraw',
      amount,
    };

    if (amount > this.balance) {
      alert('Cнятие такой суммы не возможно, недостаточно средств');
      return;
    } else {
      this.addTransaction(transaction);

      this.balance -= amount;
    }
  },

  /*
   * Метод добавляющий транзакцию в свойство transactions
   * Принимает объект транзакции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
    console.log(this.transactions);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(this.balance);
    return;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transactionsObject = this.transactions[i];

      if (transactionsObject.id === id) {
        console.log(transactionsObject);
        return;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transactionsObject = this.transactions[i];
      if (transactionsObject.type === type) {
        total += transactionsObject.amount;
      }
    }
    console.log(total);
    return;
  },
};

account.deposit(100);
account.deposit(200);
account.withdraw(150);
account.getBalance();
account.getTransactionDetails(2);
account.getTransactionTotal('deposit');
account.getBalance();
account.withdraw(300);
