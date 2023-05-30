import { btnLeft, btnRight, carousel, petsCardActive, petsCardLeft, petsCardRight, mediaQuery } from "../js/const";
import getArrRandomPets from "../js/getArrRandomPets";

export function moveLeft() {
  carousel.classList.add("transition-left");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
  btnLeft.disabled = true;
  btnRight.disabled = true;
}

export function moveRight() {
  carousel.classList.add("transition-right");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
  btnLeft.disabled = true;
  btnRight.disabled = true;
}

export function animationEndCarousel(event) {
  let countPets = mediaQuery.matches ? 4 : 6;
  let randomArr = getArrRandomPets(countPets);
  if (event.animationName === "move-left" || event.animationName === "move-left-1250" || event.animationName === "move-left-640") {
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
}
