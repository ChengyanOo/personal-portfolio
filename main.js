const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");
const progressBar = document.getElementsByClassName('progress-bar')[0]

// setInterval(() => {
//   const computedStyle = getComputedStyle(progressBar)
//   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
//   progressBar.style.setProperty('--width', width + .1)
// }, 5)

// open nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// close nav menu when menu items are clicked

if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}

// change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

document.getElementById("gravity-button").addEventListener("click", function() {
  this.classList.add('drop');
  let btn = document.createElement('b')
  let newText = document.createTextNode("Email: wang.12517@osu.edu"); 
  btn.appendChild(newText)
  this.innerHTML=''
  this.append(btn)
});