const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

const timerDisplay = document.getElementById("timer-display");

let second = 0;
let minute = 0;
let hour = 0;

let trigger = 0;

const timerHandler = (arg = null) => {
  // second = 0;
  if (trigger) {
    if (second == 59) {
      second = -1;
      minute += 1;
    } else if (minute == 59) {
      minute = -1;
      hour += 1;
    }
    second += 1;
    timerDisplay.innerHTML = `<p>${String(hour).padStart(2, "0")}:${String(minute).padStart(2, [0])}:${String(second).padStart(2, "0")}</p>`;
    console.log(second);
  }
};

setInterval(timerHandler, 1000);

startButton.addEventListener("click", () => {
  trigger = 1;
});
stopButton.addEventListener("click", () => {
  trigger = 0;
});
resetButton.addEventListener("click", () => {
  second = 0;
  minute = 0;
  hour = 0;
  timerDisplay.innerHTML = `<p>${String(hour).padStart(2, "0")}:${String(minute).padStart(2, [0])}:${String(second).padStart(2, "0")}</p>`;
  trigger = 0;
});
