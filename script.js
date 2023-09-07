// Vidéo bannière

var video = document.querySelector('#background-video');

// Menu burger

var sidenav = document.querySelector('#mySidenav');
var openBtn = document.querySelector('.menu_burger');
var closeBtn = document.querySelector('.croix_burger');
let logo = document.querySelector('.petit-logo');


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

// Scroll

// Experimentation Observer

// Nuages

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

// Dire à l'Observer les éléments à suivre
observer.observe(document.querySelector('.cloud-wrapper'));


// Titre 'L'histoire'

const observer_titre = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   
    const titre = entry.target.querySelector('.section-title');
  
    if(entry.isIntersecting) {
      
      titre.classList.add('animation-titre');
      return;
    }
    titre.classList.remove('animation-titre');
  });
});

observer_titre.observe(document.querySelector('.titre-wrapper'));

// Titre 'Studio Koukaki'

const observer_studio = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   
    const studio_titre = entry.target.querySelector('.studio-title');
  
    if(entry.isIntersecting) {

      studio_titre.classList.add('animation-titre');
      return;
    }
    studio_titre.classList.remove('animation-titre');
  });
});

observer_studio.observe(document.querySelector('.studio-wrapper'));

// Rotation des fleurs

// Selection de la valeur de la vitèsse d'animation dans la classe :root
var root = document.querySelector(':root');

var timer = null;
window.addEventListener('scroll', function(){
  // Si la durée est strictement inégale à rien (null) renvoie false
  if(timer !== null) {
    this.clearTimeout(timer);
    // ClearTimeout remet à 0 la variable 'timer'.
    root.style.setProperty('--o-animation-duration', '2s');
  }
  timer = this.setTimeout(function(){
    root.style.setProperty('--o-animation-duration', '8s');
  }, 150
  );
});
root.style.setProperty('--o-animation-duration', '8s');

// Bonus: fermeture du menu lors du clic sur une rubrique

var histoire = document.querySelector('.histoire');
var personnage = document.querySelector('.perso');
var lieu = document.querySelector('.lieu');
var studio = document.querySelector('.studio');

// Fermeture menu burger
histoire.addEventListener('click', function(){
  // Disparition du menu déroulant
  document.querySelector('.burger').style.display="none";
  // Disparition de l'image de la croix
  document.querySelector('.croix_burger').style.display="none";
  // Apparition de l'image du menu burger
  document.querySelector('.menu_burger').style.display="flex";
});

// Fermeture menu burger
personnage.addEventListener('click', function(){
  // Disparition du menu déroulant
  document.querySelector('.burger').style.display="none";
  // Disparition de l'image de la croix
  document.querySelector('.croix_burger').style.display="none";
  // Apparition de l'image du menu burger
  document.querySelector('.menu_burger').style.display="flex";
});

// Fermeture menu burger
lieu.addEventListener('click', function(){
  // Disparition du menu déroulant
  document.querySelector('.burger').style.display="none";
  // Disparition de l'image de la croix
  document.querySelector('.croix_burger').style.display="none";
  // Apparition de l'image du menu burger
  document.querySelector('.menu_burger').style.display="flex";
});

// Fermeture menu burger
studio.addEventListener('click', function(){
  // Disparition du menu déroulant
  document.querySelector('.burger').style.display="none";
  // Disparition de l'image de la croix
  document.querySelector('.croix_burger').style.display="none";
  // Apparition de l'image du menu burger
  document.querySelector('.menu_burger').style.display="flex";
});






