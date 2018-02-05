// --> Presentation content

$("#filmsArticle").hide();
$("#serieArticle").hide();
$("#gamesArticle").hide();
$( ".js-displayClickDebut" ).hide();
$( ".js-displayClickMiddle" ).hide();
$( ".js-displayClickModerne" ).hide();


//HEADER
//Smooth scroll navigation

$(document).ready(function() {
		$('.js-scrollTo').click(function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1000; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Fonction "scrollTop"
			return false;
		});
	});

//carousel FADE

	$(".backstretch").backstretch([
	      "assets/image/comics.jpg"
	    , "assets/image/batmanNolan.jpg"
	    , "assets/image/batman.jpg"
	  ], {duration: 4000, fade: 1000});



//PRESENTATION SECTION
// Reaction over click buttons

$(".js-navMain").click( function() {
	$("#origineArticle").fadeIn( 600);
	$("#filmsArticle").hide();
	$("#serieArticle").hide();
	$("#gamesArticle").hide();
});


$(".js-navFilms").click( function() {
	$("#origineArticle").hide();
	$("#filmsArticle").fadeIn( 600 );
	$("#serieArticle").hide();
	$("#gamesArticle").hide();
});

$(".js-navSerie").click( function() {
	$("#origineArticle").hide();
	$("#filmsArticle").hide();
	$("#serieArticle").fadeIn(600);
	$("#gamesArticle").hide();
});

$(".js-navGames").click( function() {
	$("#origineArticle").hide();
	$("#filmsArticle").hide();
	$("#serieArticle").hide();
	$("#gamesArticle").fadeIn( 600 );
});


//BIOGRAPHIE SECTION
//Toggle du texte

$( ".js-buttonLikeDebut" ).click(function() {
	$(".js-displayClickDebut" ).slideToggle(1000);
	$(".js-displayClickMiddle").hide();
	$(".js-displayClickModerne").hide();

});

$( ".js-buttonLikeMiddle" ).click(function() {
	$(".js-displayClickMiddle" ).slideToggle(1000);
	$(".js-displayClickDebut").hide();
	$(".js-displayClickModerne").hide();
});

$( ".js-buttonLikeModerne" ).click(function() {
	$(".js-displayClickModerne" ).slideToggle(1000);
	$(".js-displayClickMiddle").hide();
	$(".js-displayClickDebut").hide();
});

//CAROUSEL

$(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

      });


$(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

      });


// COMMANDE

$( "#js-commande" ).click(function() {

	var item1 = parseInt(document.getElementById("item1").value)*10;
	var item2 = parseInt(document.getElementById("item2").value)*5;
	var item3 = parseInt(document.getElementById("item3").value)*15;

	var totalObject = item1+item2+item3;
	//incluons les frais de livraisons
	if (totalObject == 0) {
		alert("Veuillez indiquer le nombre de produits désirer.")
	}

	else if (totalObject <= 15) {
		totalObject += 10;
		alert("Votre commande s'élève à "+totalObject+" euros.")
	}
	else if (totalObject >= 16 && totalObject <= 30) {
		totalObject += 7;
		alert("Votre commande s'élève à "+totalObject+" euros.")
	}
	else {
		alert("Votre commande s'élève à "+totalObject+" euros.")
	}
});

