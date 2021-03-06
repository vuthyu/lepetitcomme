//carroussel (owl carousel 2
// https://owlcarousel2.github.io/OwlCarousel2/
//Plugin Owl Carousel
$("div.owl-carousel").owlCarousel({
  autoplay: true,
  loop: true, //boucle sur la liste d'image une fois la dernière afficher on revient à la première
  margin: 10,
  nav: false, //pour afficher la navigation avec les flèches
  dots: false, //fait apparaître et disparaître des points
  paginationSpeed: true,
  paginationSpeed: 80,
  responsive: {
    //design responsive adapter au smartphone, tablette et pc fixe ou portable
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

function imprimer() {
  alert("vous avez lancé une impression");
}

// Ajout d'un article au panier
function ajouter_panier() {
  alert("l'article est dans le panier");
}

// Recherche d'un article
let article = [
  "pantalons",
  "chemises",
  "t-shirts",
  "robes",
  "jupes",
  "manteaux",
  "pulls",
];
$(".produit").autocomplete({ source: article });
