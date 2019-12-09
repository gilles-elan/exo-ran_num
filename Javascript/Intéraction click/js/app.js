// $(document).ready(function(){

//     let colorChange = function(){
//        let color = true;
//         $('.btn').click(function(){ //On écoute le clic sur le bouton
//             if(color){
//                 $('.answer').css('background-color', 'blue');
//                 color = false;
//                 console.log('C\'est false');
//             } else {
//                 $('.answer').css('background-color', 'red');
//                 color = true;
//                 console.log('C\'est true');
//             }
//         }) 
//     }
//     colorChange();
//     console.log(color);
// })

document.querySelector('.btn').addEventListener('click', changeColor);
let color = true;

function changeColor(){
    
    if(color != false){
        document.querySelector('.answer').innerHTML = "<strong>Bonjour tout le monde</strong>";
        document.querySelector('.answer').style.backgroundColor = "blue";
        document.querySelector('.answer').style.color = "white";
        color = false;
        console.log('C\'est false');
    } else {
        document.querySelector('.answer').innerHTML = "";
        document.querySelector('.answer').style.backgroundColor = "red";        
        document.querySelector('.answer').style.color = "black";
        color = true;
        console.log('C\'est true');
    }
}