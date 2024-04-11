const ul = document.querySelector("ul");
const lis = document.querySelectorAll(".nav-item");

const hamburger = document.querySelector("#hamburger");

window.addEventListener(`resize`, function () {
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log(width);

  if (width <= 768) {
    hamburger.classList.remove("hide");
    lis.forEach(item => {
      item.classList.add("hide");
    });
  } else {
    hamburger.classList.add("hide");
    lis.forEach(item => {
      item.classList.remove("hide");
    });
  }
});

hamburger.addEventListener("click", () => {
  lis.forEach(item => {
    item.classList.toggle("hide");
  });
});
