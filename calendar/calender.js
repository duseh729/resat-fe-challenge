const yearMonth = document.querySelector("#calendar-header h1");
const dateContainer = document.getElementById("date-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const currentDate = new Date();

let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const startDayOfWeek = firstDay.getDay();

  yearMonth.textContent = `${currentYear}년 ${currentMonth + 1}월`;

  dateContainer.innerHTML = "";

  for (let i = 0; i < startDayOfWeek; i++) {
    const emptyDate = document.createElement("div");
    //  빈 날짜를 나타내는 div 요소를 생성한다.
    emptyDate.classList.add("day");
    // 생성한 div 요소에 "date"와 "empty" 클래스를 추가한다.
    dateContainer.appendChild(emptyDate);
    // 생성한 빈 날짜 요소를 캘린더 그리드에 추가한다.
  }

  // 현재 달의 날짜
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement("div");
    dateElement.classList.add("day", "date");
    dateElement.textContent = i;
    dateElement.id = i;

    const div = document.createElement("div");
    div.classList.add("memo");
    div.style = "display: none";

    const str = `<label for="memo${i}" >${currentYear}년 ${currentMonth + 1}월 ${i}일</label>
      <textarea placeholder="여기에 작성해주세요." rows="18" cols="40" id="memo${i}" name=""memo${i}"" ></textarea>`;
    div.innerHTML = str;

    dateElement.appendChild(div);

    dateElement.style = "cursor: pointer;";
    dateElement.addEventListener("click", e => {
      if (e.target.tagName !== "DIV") {
        return;
      }
      // console.log(e.target.children[0]);
      const dateElements = document.querySelectorAll(".date");
      dateElements.forEach(i => {
        if (i.children[0].children[1].value != "") {
          i.style = "background: tomato";
        }
        i.children[0].style = "display: none";
        // i.children[0].style = "display: none";
      });
      // console.log(e.target.children[0]);
      // console.log(e.target.children[0].children[0]);
      e.target.children[0].style = "display: block";
      e.target.children[0].children[0].style = "display: block";
    });

    dateContainer.appendChild(dateElement);
  }
}

renderCalendar();

prevButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});
