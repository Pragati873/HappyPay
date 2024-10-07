const slidePage = document.querySelector(".form-outer form");
const nextBtnFirst = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let currents = 0; // Track the current page index
let max=4;
let current=1;
// Handle Next Button Clicks
nextBtnFirst.addEventListener("click", function() {
    slidePage.style.marginLeft = "-102.2%";
    currents = 1;
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current+=1;
});

nextBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "-205.2%";
    currents = 2;
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current+=1;
});

nextBtnThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-308.2%";
    currents = 3;
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current+=1;
});
submitBtn.addEventListener("click",function(){
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current+=1;
    setTimeout(function(){
        alert("You successfully Signed up");
        location.reload();
    },800);

});

// Handle Previous Button Clicks
prevBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "0%";
    currents = 0;
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current+=1;
});

prevBtnThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-100.2%";
    currents = 1;
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current+=1;
});

prevBtnFourth.addEventListener("click", function() {
    slidePage.style.marginLeft = "-204.2%";
    currents = 2;
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current+=1;
});
