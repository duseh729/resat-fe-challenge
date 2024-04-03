const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const secondInput = document.getElementById("second-input");

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
    if (second >= 1) {
      second -= 1;
    } else if (minute >= 1) {
      minute -= 1;
      second = 59;
    } else if (hour >= 1) {
      hour -= 1;
      minute = 59;
      second = 59;
    }
    timerDisplay.innerHTML = `<p>${String(hour).padStart(2, "0")}:${String(minute).padStart(2, [0])}:${String(second).padStart(2, "0")}</p>`;
    if (hour == 0 && minute == 0 && second == 0) {
      alert("타이머 종료");
      trigger = 0;
    }
    console.log(second);
  }
};

setInterval(timerHandler, 1000);

hourInput.addEventListener("change", e => {
  console.log(e.target.value);
  hour = e.target.value;
});
minuteInput.addEventListener("change", e => {
  minute = e.target.value;
});
secondInput.addEventListener("change", e => {
  second = e.target.value;
});

startButton.addEventListener("click", () => {
  trigger = 1;
});
stopButton.addEventListener("click", () => {
  trigger = 0;
});
resetButton.addEventListener("click", () => {
  trigger = 0;
  second = 0;
  minute = 0;
  hour = 0;
  hourInput.value = null;
  minuteInput.value = null;
  secondInput.value = null;
  timerDisplay.innerHTML = `<p>${String(hour).padStart(2, "0")}:${String(minute).padStart(2, [0])}:${String(second).padStart(2, "0")}</p>`;
});
