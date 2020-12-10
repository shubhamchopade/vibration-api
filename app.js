const btnStop = document.getElementById("stop");
const btnFast = document.getElementById("fast");
const btnSlow = document.getElementById("slow");

btnStop.addEventListener("click", vibrateStop);
btnFast.addEventListener("click", vibrateFast);
btnSlow.addEventListener("click", vibrateSlow);

function vibrateStop() {
  navigator.vibrate(0);
}

fastArr = [
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
];
slowArr = [
  500,
  100,
  500,
  500,
  100,
  500,
  100,
  500,
  100,
  500,
  100,
  500,
  100,
  500,
  500,
  100,
  500,
  100,
  500,
  100,
  500,
  100,
  500,
  100,
  500,
  500,
  100,
  500,
  100,
  500,
];

function vibrateSlow() {
  navigator.vibrate(slowArr);
}
function vibrateFast() {
  navigator.vibrate(fastArr);
}
