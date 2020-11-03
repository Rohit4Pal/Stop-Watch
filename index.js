let sec = 0;
let min = 0;
let hour = 0;

let stopWatch;
let isPause = false;
let isReset = false;
let isStarted = false;
document.getElementById("start").addEventListener("click", handleClick);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("resume").addEventListener("click", Resume);
document.getElementById("reset").addEventListener("click", Reset);

let hourText = document.getElementById("hour");
let minText = document.getElementById("min");
let secText = document.getElementById("sec");

secText.innerText = "00";
minText.innerText = "00";
hourText.innerText = "00";

function watch() {
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hour++;
  }

  if (isPause || isReset) clearInterval(stopWatch);
  else sec++;
  hourText.innerText = hour;
  minText.innerText = min;
  secText.innerText = sec;

  //console.log(`${sec} ${min} ${hour}`);
}
function handleClick() {
  if (isStarted) return;
  isReset = false;
  isPause = false;
  isStarted = true;
  stopWatch = setInterval(watch, 100);
  stopWatch();
}
function pause() {
  isPause = true;
}
function Resume() {
  isPause = false;
  isStarted = false;
  handleClick();
}
function Reset() {
  sec = 0;
  min = 0;
  hour = 0;
  isReset = true;
  isStarted = false;

  secText.innerText = "00";
  minText.innerText = "00";
  hourText.innerText = "00";
}
