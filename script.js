// Vidéo bannière

var video = document.getElementById("background-video");

// Menu burger

var sidenav = document.getElementById("mySidenav");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");
var openBtn = document.getElementsByClassName("menu_burger");
var closeBtn = document.getElementsByClassName("croix_burger");


let logo = document.querySelector('.petit-logo');
// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// logo.addEventListener("click", function() {
//   console.log("Test");

// });

// Ouverture menu burger
openBtn.addEventListener("click", function(){
  document.getElementById("site-navigation").classList.toggle("croix_burger");
  // Si click sur la croix, faire disparaitre le menu
  document.getElementById("site-navigation").classList.remove("menu_burger");

});

// Fermeture menu burger
closeBtn.addEventListener("click", function(){
  document.getElementById("site-navigation").classList.toggle("croix_burger");
  // Si click sur la croix, faire apparaitre le menu burger
  document.getElementById("site-navigation").classList.remove("menu_burger");
});

/* Largeur 1440px */
// function openNav() {
//   sidenav.classList.add("active");
// }

/* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove("active");
// }




