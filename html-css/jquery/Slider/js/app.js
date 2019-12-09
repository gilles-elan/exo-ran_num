$(document).ready(function(){

    $('.slider-content').css('left', '-100%'); //Position de départ du UL

    $('.prev').on('click', function(event){ // Au click sur le bouton précédent
        event.preventDefault(); // On annule l'action par défaut du lien

        $('.slider-content').animate({ //On anime le UL de gauche vers la droite
            left: "+=100%"
        }, 1000, function(){ // A la fin de l'animation, 1000 = durée de l'animation (ms)
            $('.slider-content').prepend($('.slider-content li:last-child')); //On ajoute au début du UL le dernier LI
            $('.slider-content').css('left', '-100%'); // On réinitialise la position CSS du UL
        });
    });
    $('.next').on('click', function(event){
        event.preventDefault();

        $('.slider-content').animate({
            left: "-=100%"
        }, 1000, function(){
            $('.slider-content').append($('.slider-content li:first-child'));
            $('.slider-content').css('left', '-100%');
        });
    });

});