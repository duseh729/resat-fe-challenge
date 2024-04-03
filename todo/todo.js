const todoStateButtons = document.querySelectorAll("#todo-state-container button");

const todoInput = document.querySelector("#input-container input");
const difficultyButtons = document.querySelectorAll("#input-container button");
const difficultyList = ["낮음", "보통", "높음", "아주 높음"];
let difficulty;
const addButton = document.getElementById("add-button");

const todoContainer = document.getElementById("todo-container");

const sortInput = document.getElementById("sort-input");

// 완료, 미완료 상태
todoStateButtons.forEach(item => {
  item.addEventListener("click", e => {
    todoStateButtons.forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");

    const todoList = document.querySelectorAll("#todo-container div");
    if (e.target.innerText == "완료") {
      todoList.forEach(item => {
        if (!item.children[0].checked) {
          item.style = "display:none";
        } else {
          item.style = "display:block";
        }
      });
    } else if (e.target.innerText == "미완료") {
      todoList.forEach(item => {
        if (item.children[0].checked) {
          item.style = "display:none";
        } else {
          item.style = "display:block";
        }
      });
    } else {
      todoList.forEach(item => {
        item.style = "display:block";
      });
    }
  });
});

// 난이도 버튼
difficultyButtons.forEach(item => {
  if (item.id !== "add-button") {
    item.addEventListener("click", e => {
      difficultyButtons.forEach(item => item.classList.remove("active"));
      e.target.classList.add("active");
      difficulty = e.target.value;
      console.log(difficulty);
    });
  }
});

// todo list 추가 버튼
addButton.addEventListener("click", () => {
  console.log(difficulty);
  if (todoInput.value == "") {
    alert("할 일을 입력해주세요.");
    return;
  }
  if (difficulty == undefined) {
    alert("난이도를 선택해주세요.");
    return;
  }
  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  div.appendChild(checkbox);

  const span = document.createElement("span");
  span.innerText = todoInput.value;
  todoInput.value = "";

  div.appendChild(span);

  const button = document.createElement("button");
  button.innerText = difficultyList[Number(difficulty)];
  button.value = Number(difficulty);
  difficulty = null;
  difficultyButtons.forEach(item => item.classList.remove("active"));

  div.appendChild(button);

  // 리팩토링이 필요해 보인다
  const updateButton = document.createElement("button");
  updateButton.innerText = "수정";
  updateButton.addEventListener("click", e => {
    div.innerHTML = `
    <div id="update-container">
      <input type="text" placeholder="할 일을 작성주세요." /><button value="0">낮음</button><button value="1">보통</button><button value="2">높음</button
      ><button value="3">아주 높음</button><button id="update-button2" style="background-color: rgb(255, 146, 127); border-radius: 5px">수정</button>
    </div>`;
    const updateButtons = document.querySelectorAll("#update-container button");
    const updateButton2 = document.getElementById("update-button2");
    const updateInput = document.querySelector("#update-container input");

    updateButtons.forEach(item => {
      if (item.id !== "add-button") {
        item.addEventListener("click", e => {
          updateButtons.forEach(item => item.classList.remove("active"));
          e.target.classList.add("active");
          difficulty = e.target.value;
          console.log(difficulty);
        });
      }
    });

    updateButton2.addEventListener("click", () => {
      div.innerHTML = "";
      div.appendChild(checkbox);

      const tempSpan = document.createElement("span");
      tempSpan.innerText = updateInput.value;
      todoInput.value = "";

      div.appendChild(tempSpan);

      const tempButton = document.createElement("button");
      tempButton.innerText = difficultyList[Number(difficulty)];
      tempButton.value = Number(difficulty);
      difficulty = null;
      difficultyButtons.forEach(item => item.classList.remove("active"));
      div.appendChild(tempButton);

      div.appendChild(updateButton);
    });
  });
  updateButton.style = "background-color: rgb(255, 146, 127); border-radius: 5px";

  div.appendChild(updateButton);

  todoContainer.appendChild(div);
});

// 정렬부분
// sortInput.addEventListener("change", e => {
//   const todoList = document.querySelectorAll("#todo-container div");
//   // console.log(todoList[1].childNodes[2].value);
//   // console.log(e.target.value);
//   const temp = [];
//   for (let i = 1; i < todoList.length; i++) {
//     temp.push(todoList[i]);
//   }
//   if (e.target.value == "upDown") {
//     temp.sort((a, b) => {
//       Number(b.childNodes[2].value) - Number(a.childNodes[2].value);
//     });
//   } else if (e.target.value == "downUp") {
//     temp.sort((a, b) => {
//       Number(a.childNodes[2].value) - Number(b.childNodes[2].value);
//     });
//   }
//   console.log(temp);
// });
