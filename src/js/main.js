$(document).ready(function(){
    
	// Parallax - Skrollr (destroy on mobile)
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		var s = skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
		});
	}

	// Map Carousel
	$(".map-carousel").tinycarousel({
        axis   : "y",
        animationTime: 500
    });
	
});

window.onload = function() {
    var mapOptions = {
      center: new google.maps.LatLng(51.485672, -0.118554),
      zoom: 15,
      scrollwheel: false,
      disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("london-map"),
      mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(51.485672, -0.118554),
      map: map,
      title: "Hello World!"
    });

    $( '.site-footer' ).hide();
  }