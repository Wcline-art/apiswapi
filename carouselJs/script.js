"use strict";

// GLOBALS VARIABLES//

const li = document.querySelectorAll("li");
const buttonBefore = document.querySelector(".button-before");
const buttonAfter = document.querySelector(".button-after");
let position = 0;

function nextImage() {
  position++;

  if (position === li.length) {
    position = 0;
  }

  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
  li[position].classList.add("active");
}

function previousImage() {
  position++;

  if (position === li.length) {
    position = 0;
  }

  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
  li[position].classList.add("active");
}

buttonBefore.addEventListener("click", nextImage);
buttonAfter.addEventListener("click", previousImage);
