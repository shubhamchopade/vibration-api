const btn = document.querySelector(".vibration__button");

btn.addEventListener("click", vibrateOnce);

function vibrateOnce() {
  navigator.vibrate([
    500,
    100,
    500,
    200,
    500,
    300,
    500,
    400,
    500,
    800,
    500,
    900,
    500,
    100,
    500,
  ]);
}
