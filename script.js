"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
  document.getElementById("body").classList.toggle("overflow-hidden");
  document.getElementById("html").classList.toggle("overflow-hidden");
}

function checkSpinner() {
  document.getElementById("spinner").classList.add("_active");

  setTimeout(() => {
    document.getElementById("spinner").classList.remove("_active");
    document
      .getElementById("desc")
      .innerHTML = 'Spinner is finished';
  }, 3000);
}

$(".owl-carousel").owlCarousel({
  items: 3,
  lazyLoad: true,
  loop: false,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
      margin: 0,
    },
    592: {
      items: 2,
      nav: false,
    },
    991: {
      items: 3,
      nav: false,
    },
  },
});
