var Weather = function () {
    var wundergroundKey = '0def10027afaebb7';
    var init = function () {
    	$('.progress').show();
    	$('#weather').empty().hide();
    	navigator.geolocation.getCurrentPosition(function (position) {
    	  console.log(position);
    	  var lat = position.coords.latitude;
    	  var lng = position.coords.longitude;
    	  console.log('latitude: ' + lat + ' longitude: ' + lng);
    	  _getWeather(lat, lng);
    	}, function (error) {
    	  console.log(error);
    	  alert('code: '    + error.code    + '\n' +
    		 'message: ' + error.message + '\n' +
    		 'Please turn on your GPS');
    	}, { timeout: 5000, enableHighAccuracy: true });
    };

    var _getWeather = function (lat, lng) {
   $.getJSON('http://api.wunderground.com/api/' + wundergroundKey + '/forecast/geolookup/lang:NL/q/' + lat + ',' + lng + '.json', function (data) {
	  console.log(data);
	  $('#city').text(data.location.city);
	  var forecast = data.forecast.txt_forecast.forecastday;
	  $.each(forecast, function () {
		 var txt = this.fcttext_metric;
		 var gc = txt.split(/(Maximaal |Minimaal |C)/);
		 console.log(gc);
		 $('#weather').append(
			`<div class="card horizontal">
			    <div class="card-image">
				   <img src="${ this.icon_url }">
				   <h5>${ gc[2] }&#176;</h5>
			    </div>
			    <div class="card-stacked">
				   <div class="card-content">
					  <h5>${ this.title }</h5>
					  <p>${ this.fcttext_metric }</p>
				   </div>
			    </div>
			</div>`
		 );
	  });
   })
   .done(function () {
	  $('.progress').hide();
	  $('#weather').show();
	  _getCity(lat, lng);
   })
};
}();
