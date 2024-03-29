'use strict';

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
  body: document.querySelector('body'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColorBody = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, 5);
      refs.body.style.background = `${colors[randomColor]}`;
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  'click',
  changeColorBody.start.bind(changeColorBody),
);
refs.stopBtn.addEventListener(
  'click',
  changeColorBody.stop.bind(changeColorBody),
);
