const CAROUSEL_LENGTH = document.querySelectorAll(".carousel-item").length - 1;
let current = 0;

const carouselContainer = document.querySelector("#carousel-container");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

const nextEvent = () => {
  console.log("다음");
  if (current !== CAROUSEL_LENGTH) {
    carouselContainer.style.transform = `translateX(${(current + 1) * -370}px)`;
    current++;
  } else {
    current = 0;
    carouselContainer.style.transform = `translateX(0px)`;
  }
};

const prevEvent = () => {
  console.log("이전");
  if (current !== 0) {
    current--;
    carouselContainer.style.transform = `translateX(${current * -370}px)`;
  } else {
    current = CAROUSEL_LENGTH;
    carouselContainer.style.transform = `translateX(${CAROUSEL_LENGTH * -370}px)`;
  }
};

nextButton.addEventListener("click", nextEvent);
prevButton.addEventListener("click", prevEvent);

const autoSlide = setInterval(nextEvent, 2000);
