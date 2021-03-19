let header = document.querySelector(".logo_and_nav");

const scrollHeader = () => {
    if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
        header.style.background = "#eaf0f5";
        header.style.padding = "1%";
    } else {
        header.style.background = "transparent";
        header.style.padding = "1%";
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