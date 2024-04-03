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
