/*
Au clic sur le lien
    image apparait à 80vw
*/

// JQUERY
/* Lightbox */
$('.gallery a').on('click', function (event) {
    event.preventDefault();
    let test = $(this).attr('href')
    $('body').append(`<div class="overlay">
                        <img src="${test}" alt="" class="lightbox-img">
                        <div class="close">&times;</div>
                    </div>`)
}),
$(document).on('click', '.close', function(){
    $('.overlay').fadeOut()
    $('.overlay').remove()
})

/* Tri */
$('.tri a').on('click', function(event){
    event.preventDefault();
    let attribut = $(this).attr('title')    
    if( attribut == 'all'){
        $('.gallery div').fadeIn()
    } else {
        $('.gallery div:not([data-file-type='+attribut+'])').hide(function(){
            $('.gallery div[data-file-type='+attribut+']').fadeIn()
        })
    }
})

//JAVASCRIPT
// const liens = document.querySelectorAll('.gallery a')
// for(lien of liens){
//     lien.addEventListener('click', function(e){
//         e.preventDefault()
//         let test = this.getAttribute('href')
//         document.querySelector('body').innerHTML += '<img src="'+test+'" class="lightbox">'
//     })
// }