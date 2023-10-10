$(document).ready( function() {

   z=4;
   for(i=0;i<z;i++)
   {

      nuovo = document.createElement('div');
      nuovo.setAttribute('id', 'd'+i);
      nuovo.setAttribute('class', 'miediv');
      $("body").append(nuovo);

      t=10+(i*110);
      l=10;

      $("#d"+i).html("Io sono "+$("#d"+i).attr('id'));
      $("#d"+i).css({
         'top':t,
         'left':l
      });
   }
});   

