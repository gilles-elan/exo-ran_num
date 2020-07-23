$(document).ready(function () {

    $('.burger').on('click', function () {
        if($('.navbar').hasClass('active')){
            $('.navbar').animate({
                opacity: 0
            }, 500, function(){
                $('.navbar').toggleClass('active');
            });
        } else {
            $('.navbar').toggleClass('active');
            $('.navbar').animate({
                opacity: 1
            }, 500);
        }
    })

})