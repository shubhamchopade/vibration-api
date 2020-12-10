const btn = document.querySelector(".vibration__button");

btn.addEventListener("click", vibrateOnce);

function vibrateOnce() {
  alert("Hello");
  navigator.vibrate(500);
}
