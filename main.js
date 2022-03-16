var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;

function responsive() {
  let navbar = document.querySelector(".navbar");

  if (screenWidth < 768) {
    navbar.classList.add("bg-light");
  } else {
    navbar.classList.remove("bg-light");
  }
}
