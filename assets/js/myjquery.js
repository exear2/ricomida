$(document).ready(function () {

    $('p').on({
        'click': function () {
            let fecha= new Date();
            console.log('clickeado');
            $('#fecha').text(fecha);
        },
        'mouseover': function () {
            console.log('sobrepasado');
            $('h1').css('color', 'red');
        },
        'mouseleave': function () {
            console.log('salida');
            $('h1').css('color', 'black');

        }
    })


$('#llamar').on({

'click': function(){   

alert("Procesando...." + screen.width + " x " + screen.height)
$("#box").animate({height: "100px"})
$("#box").animate({width: "100px"})
$('h1').addClass('bg-success')
}

})

let contador=0
$('#btn').on({
    'click': function(){

        
     $("#box").animate({height: "300px"})

     contador=contador+1

     $('#contador').text(contador)






    },

    'mouseleave': function () {
        $("#box").animate({width: "300px"})
        $('h1').removeClass('bg-success')
        $('title').text('hola pagian')

    }




})












});