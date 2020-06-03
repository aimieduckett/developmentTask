// constants

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');


// time function

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();

  // am or pm text

  const amPm = hour >= 12 ? 'PM' : 'AM';

  // output time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}${(amPm)}`;

  setTimeout(showTime, 1000);
}

// double figure minutes

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//background and greeting depending on time of day

function setTod() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url(images/sunrise.jpg)";
    greeting.textContent = 'Good Morning,';
  } else if (hour < 17) {
    // afternoon
    document.body.style.backgroundImage = "url(images/afternoon.jpg)";
    greeting.textContent = 'Good Afternoon,';
  } else {
    // evening
    document.body.style.backgroundImage = "url(images/night.jpg)";
    greeting.textContent = 'Good Evening,';
    document.body.style.color = "white";
  }
}

// name input and save to local storage

// get name and set name to interna lstorage

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type = 'keypress') {
    // enter button pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// get focus and save focus to internal storage

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type = 'keypress') {
    // enter button pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// feeling prompts

var a = 0;

function pop() {
  if (a == 0) {
    document.getElementById("promptBox").style.display = "block";
    a = 1;
  } else {
    document.getElementById("promptBox").style.display = "none";
    a = 0;
  }
}

var a = 0;

function popOne() {
  if (a == 0) {
    document.getElementById("promptBoxOne").style.display = "block";
    a = 1;
  } else {
    document.getElementById("promptBoxOne").style.display = "none";
    a = 0;
  }
}

var a = 0;

function popTwo() {
  if (a == 0) {
    document.getElementById("promptBoxTwo").style.display = "block";
    a = 1;
  } else {
    document.getElementById("promptBoxTwo").style.display = "none";
    a = 0;
  }
}



// event listeners

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run commands
showTime();
setTod();
getName();
getFocus();
