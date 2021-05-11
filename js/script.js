// STICKY NAV
const nav = document.getElementById("navEl");
const section1 = document.getElementById("section1");

window.addEventListener("scroll", function () {
 // const initialCoords = section1.getBoundingClientRect();
 console.log(window.scrollY);
 if (nav) {
  console.log("Nav is here");
 } else {
  console.log("Nav is absent");
 }
 // if (nav && nav.length > 0) {
 if (window.scrollY >= 150) {
  nav.classList.add("sticky");
 } else {
  nav.classList.remove("sticky");
 }
 // }
});
console.log("here");
/* PRELOADER FUNCTIONALITY */

/* HAMBURGER BUTTON FUNCTIONALITY */
// grab items
const hamIcon = document.querySelector(".hamburger-menu");
const hamNav = document.querySelector(".mob-nav");

window.addEventListener("load", function () {
 if (hamIcon) {
  change();
 } else {
  return;
 }
});

function change() {
 hamIcon.addEventListener("click", function () {
  hamNav.classList.toggle("change");
 });
}

/* SHOW-HIDE PASSWORD FUNCTIONALITY */
// grab item
const btnSHP = document.querySelectorAll(".fa-eye");

btnSHP.forEach((button) => {
 const forElement = document.getElementById(button.dataset.for);

 if (forElement && forElement instanceof HTMLInputElement) {
  ["mousedown", "touchstart"].forEach((eventName) => {
   button.addEventListener(eventName, () => {
    forElement.setAttribute("type", "text");
   });
  });

  ["mouseup", "mouseleave", "touchend", "touchcancel"].forEach((eventName) => {
   button.addEventListener(eventName, (e) => {
    e.preventDefault();
    forElement.setAttribute("type", "password");
   });
  });
 }
});

/* DYNAMIC FOOTER YEAR FUNCTIONALITY */
// grab items
const thisYear = new Date().getFullYear();
const currentYear = document.getElementById("dynamicYear");

if (currentYear) {
 currentYear.textContent = thisYear;
}

/* SCROLL TO TOP BUTTON FUNCTIONALITY */
// listen for scroll on window
const scroll = document.getElementById("scrollTop");

window.document.addEventListener("load", function () {
 const scroll = document.getElementById("scrollTop");
 if (scroll) {
  addScroll();
 } else {
  return;
 }
});

function addScroll() {
 window.addEventListener("scroll", function () {
  scroll.classList.toggle("pinned", window.scrollY > 100);
 });

 scroll.addEventListener("click", function () {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 });
}

/* CAROUSEL ON BLOG PAGE FUNCTIONALITY */
const nextImageDelay = 5000;
let currentImageCounter = 0;
let slideShowImages = document.querySelectorAll(".intro .slideshow-img");

if (slideShowImages && slideShowImages.length > 0) {
 const nextImage = function () {
  if (typeof slideShowImages != "undefined" && slideShowImages != null) {
   slideShowImages[currentImageCounter].style.zIndex = -2;
   const tempCounter = currentImageCounter;
   setTimeout(() => {
    slideShowImages[tempCounter].style.opacity = 0;
   }, 1000);
   currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
   slideShowImages[currentImageCounter].style.opacity = 1;
   slideShowImages[currentImageCounter].style.zIndex = -1;
  }
 };
 setInterval(nextImage, nextImageDelay);
}

//////////////////////////////////////////////////////////////////
/* SEE MORE BUTTON FUNCTIONALITY */
if ((seeMoreBtn = document.getElementById("see-icon"))) {
 const seeMore = document.querySelector(".see-more");
 const projections = document.querySelector(".projections");
 const hideProjections = document.querySelector("hide-projections");
 seeMoreBtn.addEventListener("click", function () {
  if (projections.classList.contains("hide-projections")) {
   projections.classList.remove("hide-projections");
   seeMoreBtn.style.transform = `rotate(${90}deg)`;
  } else {
   projections.classList.add("hide-projections");
   seeMoreBtn.style.transform = `rotate(${0}deg)`;
  }
 });
}

// const basicN = basic.getElementsByTagName("li");
// // console.log(basicN.length);
// // console.log("yes");
// const basic = document.getElementById("basicProjectsList");
// const list = basic.getElementsByTagName("h6");
// console.log(list.childNodes.length);
// const countItems = function (listID) {
//  const ul = document.getElementById(`${listID}`);

//  const itemsInList = ul.getElementsByTagsName("li");
//  const itemNum = itemsInList.length;
//  if (basic && itemsInList) {
//   for (i = 0; i < itemsInList.length; i++) console.log(i);
//  }
//  return itemNum;
// };
// countItems(basic);
// if (basic) {
//  console.log("yes");
// } else {
//  console.log("no");
// }

// ENABLING TOOLTIPS
const tooltipTriggerList = [].slice.call(
 document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl);
});
