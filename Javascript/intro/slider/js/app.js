$(document).ready(function(){

    $('.next').on('click', function(){
        $('.content').animate({
            left : '-=100%'
        }, 1000, 'swing', function(){
            //Changer de place l'image la plus à gauche
            $('.content').append($('.content .item:first-child'));
            //$('.content').css('left', '-100%');
        })
    })
    $('.prev').on('click', function(){
        $('.content').animate({
            left : '+=100%'
        }, 1000, 'swing', function(){
            //Changer de place l'image la plus à gauche
            $('.content').prepend($('.content .item:last-child'));
            //$('.content').css('left', '-100%');
        })
    })

})