import './js/templating';
import './css/styles.css';

const body = document.querySelector('body');

const checkBox = document.querySelector('#theme-switch-control');

checkBox.addEventListener('change', () => {
  if (!checkBox.checked) {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});

function setTheme() {
  const currentTheme = localStorage.getItem('theme');
  console.log(currentTheme);

  if (currentTheme === 'light') {
    checkBox.checked = false;
    body.classList.add('light-theme');

    console.log(checkBox.checked);
  } else {
    checkBox.checked = true;
    body.classList.add('dark-theme');

    console.log(checkBox.checked);
  }
}

setTheme();
