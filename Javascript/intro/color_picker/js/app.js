//VANILLA JS

/* //Ajouter un évenement au clic
document.querySelector('.red').addEventListener('click', function(){
  //On change la couleur de fond de l'élément class="color"
  document.querySelector('.color').style.backgroundColor = 'red';
  //Changer la couleur du h2
  document.querySelector('h2').style.color = 'white'
  document.querySelector('p').style.color = 'white'
})
//Ajouter un évenement au clic
document.querySelector('.blue').addEventListener('click', function(){
  //On change la couleur de fond de l'élément class="color"
  document.querySelector('.color').style.backgroundColor = 'blue';
  //Changer la couleur du h2
  document.querySelector('h2').style.color = 'white'
  document.querySelector('p').style.color = 'white'
}) */


//JQUERY

//Ajouter un évenement au clic
$('.red').on('click', function(){
	//On change la couleur de fond de l'élément class="color"
  $('.color').css('background-color', 'red');
  //Changer la couleur du h2
  $('h2, p').css('color', 'white');
})
  
//Ajouter un évenement au clic
$('.blue').on('click', function(){
	//On change la couleur de fond de l'élément class="color"
  $('.color').css('background-color', 'blue');
  //Changer la couleur du h2
  $('h2, p').css('color', 'white');
})