// Vidéo bannière

var video = document.querySelector('#background-video');

// Menu burger

var sidenav = document.querySelector('#mySidenav');
// var openBtn = document.getElementById('openBtn');
// var closeBtn = document.getElementById('closeBtn');
var openBtn = document.querySelector('.menu_burger');
var closeBtn = document.querySelector('.croix_burger');


let logo = document.querySelector('.petit-logo');
// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// logo.addEventListener('click', function() {
//   console.log('Test');

// });

// Ouverture menu burger
openBtn.addEventListener('click', function(){
  // Ajout du style pour modifier propriétés du style de la classe et permettre la bascule du display "none" à "flex".
  document.querySelector('.burger').style.display="flex";
  // Si click sur la croix, faire disparaitre le menu
  // document.querySelector('#site-navigation').classList.remove('.menu_burger');


});

// Fermeture menu burger
closeBtn.addEventListener('click', function(){
  // document.querySelector('#site-navigation').classList.toggle('.croix_burger');
  document.classList.remove.querySelector('.burger');
  
  // document.querySelector('#site-navigation').classList.remove('.menu_burger');
});

/* Largeur 1440px */
// function openNav() {
//   sidenav.classList.add('active');
// }

/* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove('active');
// }




