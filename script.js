// Vidéo bannière

var video = document.querySelector('#background-video');

// Menu burger

var sidenav = document.querySelector('#mySidenav');

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
  document.querySelector('.menu_burger').style.display="none";
  // Apparition de la croix
  document.querySelector('.croix_burger').style.display="flex";
 

});

// Fermeture menu burger
closeBtn.addEventListener('click', function(){
  // Disparition du menu déroulant
  document.querySelector('.burger').style.display="none";
  // Disparition de l'image de la croix
  document.querySelector('.croix_burger').style.display="none";
  // Apparition de l'image du menu burger
  document.querySelector('.menu_burger').style.display="flex";
  
});

/* Largeur 1440px */
// function openNav() {
//   sidenav.classList.add('active');
// }

/* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove('active');
// }

// Scroll

// Titres

const titreH2 = document.querySelector('animation-titre');

// window.addEventListener("scroll", () => {
  // const scrollY = window.scrollY;
  // Vitesse de l'animation
  // const translateY = scrollY * 0.5;

  // titreH2.style.transform = `translateY(${translateY}px)`;
  // document.querySelector('animation-titre').style.transform = `translateY(${translateY}px)`;
// });



