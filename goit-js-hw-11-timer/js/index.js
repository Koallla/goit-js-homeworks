'use strict';

const refs = {
  days: document.querySelector('span[data-value="days"'),
  hours: document.querySelector('span[data-value="hours"'),
  mins: document.querySelector('span[data-value="mins"'),
  secs: document.querySelector('span[data-value="secs"'),
};

class CountdownTimer {
  constructor({ selector }, { targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
  }

  start() {
    this.selector = setInterval(() => {
      const currentTime = Date.now();
      this.time = this.targetDate - currentTime;
      updateClockface(this.time);

      if (this.time <= 0) {
        clearInterval(this.selector);
        updateClockface(0);
        return;
      }
    }, 1000);
  }
}

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = new CountdownTimer(
  {
    selector: '#timer-1',
  },
  { targetDate: new Date('Oct 24 2019 20:00:00') },
);

timer.start();
