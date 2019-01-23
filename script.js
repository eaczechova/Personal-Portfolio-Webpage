let mainNav = document.getElementById('ul-menu');
let navBarToggle = document.getElementById('menu-toggle');
let welcomeSectionH1 = document.getElementById('welcome-section-h1');
navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

let navItem = document.getElementsByClassName('nav-item');
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function(event) {
    // let e = event.target;
    // if(!e.parentNode.parentNode.classList.contains('ul-menu')) {

      mainNav.classList.remove('active'); }
  )
}

// navItem.addEventListener('click', function(e) {
//   let e = e.target;
//   if(!e.parentNode.parentNode.classList.contains('ul-menu')) {
//     mainNav.style.display = 'none'  }
// })

    // $(document).click(function (e) {
    //     var $e = $(e.target);
    //     if (!$e.parents().hasClass('menu')) {
    //        $('.menu').css({ 'display': 'none' });
    //     }
    // });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         this.getAttribute('href') === '#home' || this.getAttribute('href') === '#contact'  ?
//          document.querySelector(this.getAttribute('href')).scrollIntoView({
//              behavior: 'smooth',
//              block: 'end'
//          });
//      });) :
//          document.querySelector(this.getAttribute('href')).scrollIntoView({block: 'start'});
//     });
// });
