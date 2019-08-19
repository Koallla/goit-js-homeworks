'use strict';

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  append(str) {
    return str;
  }

  get value() {
    return this._value;
  }

  //   prepend(str)

  //   pad(str)
}

const builder = new StringBuilder('.');

console.log(builder.value);

builder.append('^6dfsdf');
// console.log(builder.append());
