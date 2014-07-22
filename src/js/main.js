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
	$('.map-carousel').carousel({ 
		overflow: true, 
		visible: 2, 
		itemMinWidth: 200, 
		itemMargin: 10 
	});
	
});