$(document).ready(function(){

    // $('.hamburger').on('click', function(){
    //     $('nav').slideToggle(500);
    //     $('.hamburger').toggleClass('is-active');
    // });

    $(document).on('click','.open', function(){
        $('.hamburger').addClass( "is-active close" ).removeClass('open');
        $('nav').animate({
            width: '50%'
        }, 500);
        $('main').animate({
            left: '-50%'
        }, 500);   
    });
    $(document).on('click','.close', function(){
        $('.hamburger').removeClass( "is-active close" ).addClass('open');
        $('nav').animate({
            width: '0'
        }, 500);
        $('main').animate({
            left: '0'
        }, 500);   
    });

})