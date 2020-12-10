const btn = document.querySelector(".vibration__button");
const btnStop = document.getElementById("#stop");

btn.addEventListener("click", vibrateOnce);
btnStop.addEventListener("click", vibrateStop);

function vibrateStop() {
  navigator.vibrate(0);
}

function vibrateOnce() {
  navigator.vibrate([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
}
