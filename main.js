var screenWidth = window.screen.availWidth * window.devicePixelRatio;
var screenHeight = window.screen.availHeight * window.devicePixelRatio;

function responsive() {
  let navbar = document.querySelector(".navbar");

  if (screenWidth < 768) {
    navbar.classList.add("bg-light");
  }
}
