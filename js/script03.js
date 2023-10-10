$(document).ready( function() {

   nuovo = document.createElement('p');
   nuovo.setAttribute('id', 'uno');
   $("body").append(nuovo);

   nuovo = document.createElement('p');
   nuovo.setAttribute('id', 'due');
   $("body").append(nuovo);

   nuovo = document.createElement('p');
   nuovo.setAttribute('id', 'tre');
   $("body").append(nuovo);

   $("#uno").html("PRIMO");
   $("#due").html("SECONDO");
   $("#tre").html("TERZO");

   $("#due").css({
      'font-size':'25px',
      'background-color':'rgb(255,255,255)',
      'color':'rgb(150,0,0)'
   });

});   

