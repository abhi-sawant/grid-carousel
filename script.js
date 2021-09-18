const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.getElementsByClassName("img");
var i = 0;
var j;

nextBtn.addEventListener("click", function () {
    for (j = 0; j < carousel.length; j++) {
        carousel[j].classList.remove("active");
    }
    if (i == carousel.length - 1) {
        i = -1;
    }
    i++;
    carousel[i].classList.add("active");
})

prevBtn.addEventListener("click", function () {
    for (j = 0; j < carousel.length; j++) {
        carousel[j].classList.remove("active");
    }
    if (i == 0) {
        i = carousel.length;
    }
    i--;
    carousel[i].classList.add("active");
})