// Page 1
let pageOne = document.querySelectorAll("#page-one");
let showPage1 = document.querySelectorAll("#show-page-1");
let nextPage = document.querySelector("#next");

// Page 2
let pageTwo = document.querySelector("#page-two");
let showPage2 = document.querySelector("#show-page-2");
let togBtn = document.querySelector('.togbtn');

// Page 3
let pageThree = document.querySelector("#page-three");
let showPage3 = document.querySelector("#show-page-3");

// Page 4
let pageFour = document.querySelector("#page-four");
let showPage4 = document.querySelector("#show-page-4");
let mth = document.querySelector('#monthly-4');

let disMth = document.querySelectorAll("#month-4");

let disYear = document.querySelectorAll("#yearly-4-1");


// Arrays
let show = document.querySelector(".show");
let hidPage = document.querySelector(".hidden");
let showPages = [showPage1, showPage2, showPage3, showPage4];
const pages = [{ pageOne }, { pageTwo }, { pageThree }, { pageFour }];
// Loops

// Functions
let navPages = function (e) {
  e.preventDefault();
  for (let i = 0; i < showPages.length; i++) {
  }
  for (let i = 0; i < pages.length; i++) {
    if (pages[i] === showPages[i]) {
      pages[i].style.display = "none";
    }
  }
};

let yearly = function () {
  e.preventDefault();
  disMth.style.display = "none";
  disYear.style.display = "flex";
};
let moveBtn = function(e) {
  e.preventDefault(), 
  togBtn.style.transform = 'translateX(20px)';
} 
// Events
nextPage.addEventListener("click", navPages);
show.addEventListener("click", navPages);
// nextPage.addEventListener('click', chgPage);
mth.addEventListener('click', yearly);(
togBtn.addEventListener('mouseover', moveBtn));
