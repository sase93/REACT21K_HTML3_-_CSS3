// ********** Header functions **********

let header = document.querySelector(".logo_and_nav");
let mobileLinks = document.querySelector(".menu-links");

const scrollHeader = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        header.style.background = "#eaf0f5";
        mobileLinks.style.background = "#eaf0f5";
    } else {
        header.style.background = "transparent";
        mobileLinks.style.background = "transparent";
    }
};

window.addEventListener("scroll", scrollHeader);

function toggleMenu() {
    var x = document.querySelector('.menu-links');
    if (x.style.display === "initial") {
      x.style.display = "none";
    } else {
      x.style.display = "initial";
    }
}

// ********** Back to top button functions **********

let topButton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function returnTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}