const btn = document.querySelector(".vibration__button");

btn.addEventListener("click", () => {
  navigator.vibrate([500]);
});
