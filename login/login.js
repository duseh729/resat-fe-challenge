const loginForm = document.getElementById("login-form");
const idValue = document.getElementsByName("login-id");
const pwValue = document.getElementsByName("login-pw");
const submitButton = document.querySelector("#login-form button");

const id = "admin";
const pw = "admin";

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  if (idValue[0].value == "" || pwValue[0].value == "") {
    alert("ID 혹은 PW가 잘못되었습니다.");
  } else if (idValue[0].value == "admin" && pwValue[0].value == "admin") {
    alert("로그인에 성공했습니다.");
  } else {
    alert("존재하지 않는 아이디입니다.");
  }
});

// deploy 에러
