const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

const totalWidth = sliderSection.length * 100;
slider.style.width = `${totalWidth}%`;

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

btnLeft.addEventListener("click", moveToLeft);
btnRight.addEventListener("click", moveToRight);

setInterval(moveToRight, 7000);

function moveToRight() {
    counter++;
    if (counter >= sliderSection.length) {
        counter = 0;
        operacion = 0;
    } else {
        operacion += widthImg;
    }
    slider.style.transform = `translateX(-${operacion}%)`;
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * counter;
    } else {
        operacion -= widthImg;
    }
    slider.style.transform = `translateX(-${operacion}%)`;
}
