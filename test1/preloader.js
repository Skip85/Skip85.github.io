
$(function() {
  var map;
   function initMap() {
        var uluru = {lat: 56.726668, lng: 37.146396};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}
    setTimeout(initMap, 100);
    var i =0;
    var d = setInterval(function(){
        if(map.tilesloading== false){
          $('.preload').css('display', 'none');
          clearInterval(d);
        }
        else{
        }
    }, 500);
    });