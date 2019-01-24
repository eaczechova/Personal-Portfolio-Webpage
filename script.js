// scroll to the top on reload

window.onload = function() {
  setTimeout (function () {
    scrollTo(0,0);
  }, 100);
}

// Navigation toggle

let mainNav = document.getElementById('ul-menu');
let navBarToggle = document.getElementById('menu-toggle');
let welcomeSectionH1 = document.getElementById('welcome-section-h1');
navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

// Close naviagtion bar once menu item is clicked

let navItem = document.getElementsByClassName('nav-item');
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function(event) {
    mainNav.classList.remove('active'); }
  )
}

//Smooth scroll to/back from anchor element

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  });
});
