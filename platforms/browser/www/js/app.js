$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);

    // jQuery AJAX error
    $(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
        console.log(thrownError);
        alert('Triggered ajaxError handler');
    });

    $('#renew').click(function(){
        Weather.init();
    });
});

$(document).ready( function() {

  //Datum van vandaag inladen
  var today = new Date();
  var day = today.getDate();
  if(day<10){day='0'+day}
  var monthNames = ["Januarie", "Februarie", "Maart", "April", "Mei", "Juni",
  "July", "Augustus", "September", "Oktober", "November", "December"
  ];
  var month =  monthNames[today.getMonth()];

  today = day+' '+month;

  //Met javascript datum in span zetten
  document.getElementById("datumVandaag").innerHTML=today;

  //Het Weer Initialiseren
  Weather.init();
  
  $('.button-collapse').sideNav({
      menuWidth: 250,
      closeOnClick: true,
      draggable: true,
  });

  $('.side-nav a').click(function(){
      $('.spa').hide();
      $('#' + $(this).data('show')).show();
      $('.button-collapse').sideNav('hide');
   });


  $('ul.tabs').tabs({
    swipeable:true
  });

});
