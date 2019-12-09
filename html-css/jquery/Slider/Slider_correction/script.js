$(document).ready(function(){
	
    // Au clic sur le bouton gauche
      $('.left').on('click', function(){
        // Animer le carré
        $('ul').animate({
          /* Propriété CSS */
        left: "+=100%"
      }, 500/* DUREE */, function(){
          //Déplacer le dernier li en premier
          // li:last-child avec la fonction prepend() sur UL
          $('ul').prepend( $('.carousel li:last-child ') );
          // remettre le css de left sur -100%
          $('ul').css('left', '-100%');
      })
    
    })
    
    // Au clic sur le bouton gauche
      $('.right').on('click', function(){
        // Animer le carré
        $('ul').animate({
          /* Propriété CSS */
        left: "-=100%"
      }, 500/* DUREE */, function(){
          //Déplacer le premier li en dernier
          // li:first-child avec la fonction append() sur UL
          $('ul').append( $('.carousel li:first-child ') );
          // remettre le css de left sur -100%
          $('ul').css('left', '-100%');
      })
    
    })
})