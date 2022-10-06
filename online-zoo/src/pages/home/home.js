import "../../stylesheets/main.scss";
import "../home/burger";
//popup testemodials
const blackout = document.querySelector(".blackout");
const testimonialCard = document.querySelector(".testimonials-card");

document.body.addEventListener("click", (el) => {
  const mediaQuery1000 = window.matchMedia("(max-width: 999px)");
  if (mediaQuery1000.matches) {
    if (
      el.target.classList.contains("testimonials-card") &&
      el.target.classList.contains("popup-active")
    ) {
      el.target.classList.remove("popup-active");
      blackout.style.visibility = "hidden";
      blackout.style.zIndex = "0";
    } else if (el.target.classList.contains("testimonials-card")) {
      blackout.style.visibility = "visible";
      blackout.style.zIndex = "5";
      el.target.classList.toggle("popup-active");
    } else {
      blackout.style.visibility = "hidden";
      blackout.style.zIndex = "0";
    }
  } else {
  }
});

/////pets carousel ////
const btnLeft = document.querySelector(".button-arrow-left");
const btnRight = document.querySelector(".button-arrow-right");
const carousel = document.querySelector(".carousel");
const petsCardLeft = document.querySelector(".pets__cards-row-left");
const petsCardActive = document.querySelector(".pets__cards-row-active");
const petsCardRight = document.querySelector(".pets__cards-row-right");
const mediaQuery = window.matchMedia("(max-width: 998px)");

function moveLeft() {
  carousel.classList.add("transition-left");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
  btnLeft.disabled = true;
  btnRight.disabled = true;
}

function moveRight() {
  carousel.classList.add("transition-right");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
  btnLeft.disabled = true;
  btnRight.disabled = true;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

if (mediaQuery.matches) {
  petsCardActive.lastElementChild.remove();
  petsCardActive.lastElementChild.remove();
  petsCardLeft.lastElementChild.remove();
  petsCardLeft.lastElementChild.remove();
  petsCardRight.lastElementChild.remove();
  petsCardRight.lastElementChild.remove();
}

function randomPets() {
  let arrPetsCard = document.querySelectorAll(
    ".pets__cards-row-active > .pet-card"
  );
  const arrRandomPetsCard = [];
  let countPets = mediaQuery.matches ? 4 : 6;
  while (arrRandomPetsCard.length < countPets) {
    let item = arrPetsCard[getRandomIntInclusive(0, arrPetsCard.length - 1)];
    if (!arrRandomPetsCard.includes(item)) {
      arrRandomPetsCard.push(item);
    }
  }
  return arrRandomPetsCard;
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

carousel.addEventListener("animationend", (event) => {
  let randomArr = randomPets();
  if (
    event.animationName === "move-left" ||
    event.animationName === "move-left-1250" ||
    event.animationName === "move-left-640"
  ) {
    petsCardActive.innerHTML = petsCardLeft.innerHTML;
    petsCardLeft.innerHTML = "";
    randomArr.forEach((el) => {
      petsCardLeft.appendChild(el);
    });
    carousel.classList.remove("transition-left");
  } else {
    petsCardActive.innerHTML = petsCardRight.innerHTML;
    petsCardRight.innerHTML = "";
    randomArr.forEach((el) => {
      petsCardRight.appendChild(el);
    });
    carousel.classList.remove("transition-right");
  }
  btnRight.disabled = false;
  btnLeft.disabled = false;
  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
});

///// slider testimonials//////
const testimonialSlider = document.querySelector(".testimonials__slider");
const sliderRange = document.querySelector(".slider__range");

sliderRange.addEventListener("input", () => {
  testimonialSlider.classList.add("transition-testimonials");
  sliderRange.disabled = true;

  const mediaQuery1250 = window.matchMedia("(min-width: 1250px)");
  const mediaQuery1199 = window.matchMedia("(min-width: 1199px)");
  const mediaQuery1000 = window.matchMedia("(min-width: 1000px)");
  let positionRight;
  if (mediaQuery1250.matches) {
    positionRight = sliderRange.value * 24.8;
  } else if (mediaQuery1199.matches) {
    positionRight = sliderRange.value * 24.8;
  } else if (mediaQuery1000.matches) {
    positionRight = sliderRange.value * 33.9;
  }

  testimonialSlider.style.right = `${positionRight}%`;
});
testimonialSlider.addEventListener("animationend", (event) => {
  testimonialSlider.classList.remove("transition-testimonials");
  sliderRange.disabled = false;
});
