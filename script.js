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
  // Disparition du menu burger
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

// Nuages

// Appel de la classe des nuages
// const image = document.querySelector(".cloud");
// // Ajout évènement de scroll via la constante scrollY
// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   const translateX = -300;
//   // Activation de l'effet de scroll si ce dernier est entre les 2 valeurs de la section "lieu". Sinon, pas effet de scroll.
//   if (scrollY > 2010  && scrollY < 2709){
//     image.classList.add('cloud-animation-active')
//   }else{
//     image.classList.remove('cloud-animation-active')
//   }
// });

// Experimentation Observer

// Créer l'Observer
const observer = new IntersectionObserver(entries => {
  // Lecture des entrées
  entries.forEach(entry => {
    const nuage = entry.target.querySelector('.cloud');
    // 'entry' est l'objet donné à nous par l'Observer
    if(entry.isIntersecting) {
      // Animation quand c'est visible
      nuage.classList.add('cloud-animation');
      return;
    }
    // Si pas d'aperçu de l'Observer, ne pas faire d'animation
    nuage.classList.remove('cloud-animation');
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.cloud-wrapper'));





