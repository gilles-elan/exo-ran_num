$(document).ready(function(){

    //Déclaration des variables
    let nb1 = 0, 
        nb2 = 0, 
        result = 0, 
        symbole = '';

    //Au clic sur un nombre du clavier (ou la virgule)
    $('.clavier .nbr').on('click', function(e){
        $('.aff').append($(this).text()); //Ajout à .aff le contenu de .nbr
    });

    //Au clic sur la touche C
    $('.del').on('click', function(){
        $('.aff').text(''); //On nettoie .aff
    });

    //Au clic sur la touche AC
    $('.reset').on('click', function(){
        $('.result').text('0'); //On change la valeur de .result sur 0
        symbole = ''; //On vide la variable symbole
    })

    //Au clic sur un opérateur
    $('.symbol').on('click', function(){
        if(symbole != ''){  //S'il n'y a pas de symbole de stocké
            calcule();      //On exécute la fonction calcule()
            nb1 = parseFloat($('.result').text());  //On récupère la valeur calculée et on l'attribue à nb1
            $('.aff').text('');                     //On nettoie l'affichage
        } else {            //Sinon
            nb1 = parseFloat($('.aff').text());     //On récupère la valeur saisie et on l'attribue à nb1
            $('.aff').text('');                     //On nettoie l'affichage
        }
        symbole = $(this).text();   // On attribue à symbole la valeur du symbole cliqué
    });

    // Au clic sur égale
    $('.equal').on('click', function(){
        calcule();     //On déclenche la fonction calcule
        $('.aff').text(''); //On nettoie l'affichage
    });

    //fonction qui calcule!
    function calcule(){
        nb2 = parseFloat($('.aff').text()); //On récupère la valeur saisie et on l'attribue à nb2
        if(symbole == '+'){         //Si le symbole est ... alors on effectue le calcul correspondant
            result = nb1 + nb2; 
        } else if(symbole == '-'){
            result = nb1 - nb2;
        } else if(symbole == 'x'){
            result = nb1 * nb2;
        } else {
            result = nb1 / nb2;
        }
        $('.result').text(result);  //On affiche le résultat
    }
})