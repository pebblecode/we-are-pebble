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

	// ======= HOMEPAGE ONLY ======= //
	// Map Carousel - first checks if .map-carousel exists then creates carousel
	if ($('.map-carousel').length > 0) {
		$(".map-carousel").tinycarousel({
        axis   : "y",
        start: 0,
        animationTime: 500
	    });
		var mapCarousel = $(".map-carousel").data("plugin_tinycarousel");
		$('.map-carousel-nav a').click(function(){
			$('.map-carousel-nav a').removeClass('active');
			$(this).addClass('active');
		});
	    $('.map-carousel .london').click(function(){
	        mapCarousel.move(0);
	        return false;
	    });
	    $('.map-carousel .edinburgh').click(function(){
	        mapCarousel.move(1);
	        return false;
	    });
	    $('.map-carousel .brighton').click(function(){
	        mapCarousel.move(2);
	        return false;
	    });
	    $('.map-carousel .newcastle').click(function(){
	        mapCarousel.move(3);
	        return false;
	    });
	    $('.map-carousel .sofia').click(function(){
	        mapCarousel.move(4);
	        return false;
	    });
	}


	// ======= UMBRACO PAGE ONLY ======= //
	// Fit width text - first checks if .umbraco-page exists
	if ($('.umbraco-page').length > 0) {
		$('.bigtext').bigtext();
	}

});

// Google Maps
window.onload = function() {

	// ======= HOME PAGE ONLY ======= //

	// Checks if Map Carousel exists, then gets google maps
	if ($('.map-carousel').length > 0) {
		var mapLondon = {
		  center: new google.maps.LatLng(51.485672, -0.118554),
		  zoom: 15,
		  scrollwheel: false,
		  disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("london-map"),
		  mapLondon);
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(51.485672, -0.118554),
		  map: map,
		  title: "we are pebble"
		});

		var mapEdinburgh = {
		  center: new google.maps.LatLng(55.8959774, -3.296969),
		  zoom: 15,
		  scrollwheel: false,
		  disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("edinburgh-map"),
		  mapEdinburgh);
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(55.8959774, -3.296969),
		  map: map,
		  title: "we are pebble"
		});

		// Google map: Brighton
		var mapBrighton = {
		  center: new google.maps.LatLng(50.834318, -0.1823678),
		  zoom: 15,
		  scrollwheel: false,
		  disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("brighton-map"),
		  mapBrighton);
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(50.834318, -0.1823678),
		  map: map,
		  title: "we are pebble"
		});

		// Google map: Newcastle
		var mapNewcastle = {
		  center: new google.maps.LatLng(55.0016746, -1.6156206),
		  zoom: 15,
		  scrollwheel: false,
		  disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("newcastle-map"),
		  mapNewcastle);
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(55.0016746, -1.6156206),
		  map: map,
		  title: "we are pebble"
		});

		// Google map: Sofia
		var mapSofia = {
		  center: new google.maps.LatLng(42.6742392, 23.3543577),
		  zoom: 15,
		  scrollwheel: false,
		  disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("sofia-map"),
		  mapSofia);
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(42.6742392, 23.3543577),
		  map: map,
		  title: "we are pebble"
		});
	}

};