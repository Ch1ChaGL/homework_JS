"use strict";
const themeClick = document.querySelectorAll(".theme__check");

for (const elem of themeClick) {
  elem.addEventListener("click", (event) => {
    const target = event.target;
    const container = target.parentElement;
    container.classList.toggle("theme__check_open");
    const parent = target.closest(".theme__label");
    const content = parent.nextElementSibling;
    content.classList.toggle("theme__content_open");
  });
}
// themeClick.addEventListener("click", (event) => {
//   const target = event.target;
//   const parent = target.closest(".theme__label");
//   const content = parent.nextElementSibling;
//   content.classList.toggle("theme__content_open");
// });
