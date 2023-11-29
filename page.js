// Page 1
let pageOne = document.querySelector("#page-one");
let showPage1 = document.querySelector("#show-page-1");
let nextPage1 = document.querySelector("#next-1");

// Page 2
let pageTwo = document.querySelector("#page-two");
let showPage2 = document.querySelector("#show-page-2");
let nextPage = document.querySelector(".page");

// Page 3
let pageThree = document.querySelector("#page-three");
let showPage3 = document.querySelector("#show-page-3");

// Page 4
let pageFour = document.querySelector("#page-four");
let showPage4 = document.querySelector("#show-page-4");
let changeMth = document.querySelector("#yearly-4");
let disMth = document.querySelector("#month-4");
let disYear = document.querySelector("#yearly-4-1");

// Arrays
let showPages = [showPage1, showPage2, showPage3, showPage4];
let show = document.querySelector(".show");

let pages = [{pageOne}, {pageTwo}, {pageThree}, {pageFour}];
// Loops

// pages.forEach(page => {});
showPages.forEach(b => {});
for (let i = 0; i < pages.length; i++) {}
// Functions
let navPages = function (e) {
    e.preventDefault();
  if (pages[i] === b) {
    pages[i].style.display = "flex";
  } else{
    pages[i].style.display = 'none';
  }
};
let chgPage = function (e) {
  e.preventDefault();
  pageTwo.style.display = "none";
  pageThree.style.display = "flex";
};
let yearly = function () {
  e.preventDefault();
  disMth.style.display = "none";
  disYear.style.display = "block";
};
// Events
nextPage1.addEventListener("click", function (e) {
  e.preventDefault();
  nextPage1.classList.toggle('hide');
  pageTwo.style.display = "flex";
});
show.addEventListener("click", navPages);
// nextPage.addEventListener('click', chgPage);
// changeMth.addEventListener('click', yearly);
