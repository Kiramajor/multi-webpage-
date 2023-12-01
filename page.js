// Page 1
let pageOne = document.querySelector("#page-one");
let showPage1 = document.querySelectorAll("#show-page-1");
let nextPage1 = document.querySelector("#next-1");
let page = document.querySelector(".page");

// Page 2
let pageTwo = document.querySelector("#page-two");
let showPage2 = document.querySelector("#show-page-2");
let togBtn = document.querySelector(".togbtn");
let nextPage2 = document.querySelector("#next-2");

// Page 3
let pageThree = document.querySelector("#page-three");
let showPage3 = document.querySelector("#show-page-3");
let nextPage3 = document.querySelector("#next-3");

// Page 4
let pageFour = document.querySelector("#page-four");
let page_four = document.querySelector(".page-four");
let showPage4 = document.querySelector("#show-page-4");
let confirm = document.querySelector("#confirm");
let successText = document.querySelector("#success");
let mth = document.querySelector("#monthly-4");

let disMth = document.querySelectorAll("#month-4");

let disYear = document.querySelectorAll("#yearly-4-1");

// Arrays
let show = document.querySelector(".show");
let hidPage = document.querySelector(".hidden");
let showPages = [showPage1, showPage2, showPage3, showPage4];
const pages = [{ pageOne }, { pageTwo }, { pageThree }, { pageFour }];
// Loops
let nav_Pages = [{ navPages1 }, { navPages2 }, { navPages3 }];
let next_Page = [{ nextPage1 }, { nextPage2 }, { nextPage3 }];

function navPages(e) {
  e.preventDefault();
  for (let i = 0; i < next_Page.length; i++) {
    for (let i = 0; i < nav_Pages.length; i++) {
      for (let i = 0; i < pages.length; i++) {
        if (next_Page[i] === nav_Pages[i]) {
          pages[i].style.display = "flex";
        }
      }
    }
  }
}

// Functions
function navPages1(e) {
  e.preventDefault();
  pageOne.style.display = "none";
  pageTwo.style.display = "flex";
  // for (let i = 0; i < showPages.length; i++) {
  // }
  // for (let i = 0; i < pages.length; i++) {
  //   if (pages[i] === showPages[i]) {
  //     pages[i].style.display = "none";
  //   }
  // }
}
function navPages2(e) {
  e.preventDefault();
  pageTwo.style.display = "none";
  pageThree.style.display = "flex";
}
function navPages3(e) {
  e.preventDefault();
  pageThree.style.display = "none";
  pageFour.style.display = "flex";
}
function success(e) {
  e.preventDefault();
  page_four.style.display = "none";
  successText.style.display = "block";
}

let yearly = function () {
  e.preventDefault();
  disMth.style.display = "none";
  disYear.style.display = "flex";
};

// Events
nextPage1.addEventListener("click", navPages1);
nextPage2.addEventListener("click", navPages2);
nextPage3.addEventListener("click", navPages3);

show.addEventListener("click", navPages1);
// nextPage.addEventListener('click', chgPage);
mth.addEventListener("click", yearly);
confirm.addEventListener("click", success);
// togBtn.addEventListener('mouseover'));
