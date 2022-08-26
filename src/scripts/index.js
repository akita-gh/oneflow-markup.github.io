const slider = document.querySelector('.reviews-cards');
const slide = document.querySelector('.reviews-card');

var marginLeft = parseInt(getComputedStyle(slide, true).marginLeft);
var marginRight = parseInt(getComputedStyle(slide, true).marginRight);

let slideWidth = slide.offsetWidth + marginLeft + marginRight;
let sliderWidth = slider.children.length * slideWidth;

console.log(slideWidth);

let width = 0;
let count = 0;
setInterval(() => {
  console.table(slider.children.length, count);
  count++;
  if (count < slider.children.length -3) {
    width += slideWidth;
    console.table(width, slideWidth, sliderWidth);
    slider.style.cssText = `transform:translateX(-${width}px)`;
  } else {
    width = 0;
    count = 0;
    slider.style.cssText = `transform:translateX(-${width}px)`;
  }
}, 5000);
