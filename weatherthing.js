

/* Does your browser support geolocation? */

if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Denver lat/long: 39.740002, -104.991997
* Denver WOEID: 2391279
*/
$(document).ready(function() {
  loadWeather('Denver','2391279'); //@params location, woeid
});

  function loadWeather(location, woeid) {
  $.simpleWeather({
    woeid: woeid,
    location: location,
    unit: 'f',
    success: function(weather) {
      html =  '<div class="location"><span class="city">'+weather.city+'</span><span class="state">'+weather.region+'</span> </div><ul>';
      
      html += '<li></li><li><div id="weathercode">'+weather.code+'</div></li><li>'+weather.temp+'&deg;</li>';

       for(var i=0;i<2;i++) {
        html += '<li>'+weather.forecast[i].high+'&deg;</li>';
       
      }
      
     
     
  
      $("#weather").html(html);
    },

    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

}