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

  //   isActive: false;
  start() {
    // if (this.isActive) {
    //   return;
    // }
    // this.isActive = true;
    // const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      console.log(currentTime);
      console.log(this.targetDate);
      this.time = this.targetDate - currentTime;
      console.log(this.time);
      updateClockface(this.time);
    }, 1000);
  }
  //   stop() {
  //     clearInterval(this.selector);
  //     this.isActive = false;
  //     this.time = 0;
  //     updateClockface(this.deltaTime);
  //   }
}

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

const timer = new CountdownTimer(
  {
    selector: '#timer-1',
  },
  { targetDate: new Date('November 1, 2019') },
);

timer.start();

const date = new Date('March 4, 2017');
console.log(date);
