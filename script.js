const ham = document.querySelector(".hide-ham");
const menuLink = document.querySelector(".desktop-menu");
const cancelMenu = document.querySelector(".cancel-dropDown");
const navLinks = Array.from(document.getElementsByClassName("link"));
const navH1 = document.querySelector(".greet");
const navP = document.querySelector(".banner-detail");
const letConnect = document.querySelector(".connect");
const logo = document.querySelector(".logo");

ham.addEventListener("click", () => {
  menuLink.classList.toggle("hide");
  navH1.classList.toggle("blur");
  navP.classList.toggle("blur");
  letConnect.classList.toggle("blur");
  ham.classList.toggle("blur");
  logo.classList.toggle("blur");
});

cancelMenu.addEventListener("click", closeMobileMenu);

for (links in navLinks) {
  navLinks[links].addEventListener("click", closeMobileMenu);
}

function closeMobileMenu() {
  menuLink.classList.toggle("hide");
  navH1.classList.toggle("blur");
  navP.classList.toggle("blur");
  letConnect.classList.toggle("blur");
  ham.classList.toggle("blur");
  logo.classList.toggle("blur");
}
