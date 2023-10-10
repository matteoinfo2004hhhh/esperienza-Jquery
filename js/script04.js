$(document).ready( function() {

   nuovo = document.createElement('div');
   nuovo.setAttribute('id', 'uno');
   nuovo.setAttribute('class', 'miediv');
   $("body").append(nuovo);

   nuovo = document.createElement('div');
   nuovo.setAttribute('id', 'due');
   nuovo.setAttribute('class', 'miediv');
   $("body").append(nuovo);

   nuovo = document.createElement('div');
   nuovo.setAttribute('id', 'tre');
   nuovo.setAttribute('class', 'miediv');
   $("body").append(nuovo);

   $("#uno").html("PRIMO");
   $("#uno").css({
      'top':'10px',
      'left':'10px'
   });

   $("#due").html("SECONDO");
   $("#due").css({
      'top':'120px',
      'left':'10px'
   });

   $("#tre").html("TERZO");
   $("#tre").css({
      'top':'230px',
      'left':'10px'
   });

});   

