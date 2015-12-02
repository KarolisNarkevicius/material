(function ( $ ) {
 
    $.fn.menuIcon = function( options ) {
    	

    	var settings = $.extend({
    		active: false,						// boolean for checking if arrow is active or not
    		hamburgerClass:"hamburger", 		// class added when transitioning to hamburger
    		arrowClass:"arrow", 				// class added when arrow is active
    		contrainerClass:"hamburger-arrow", 	// icons default container class
    		
        }, options );

    	// inside divs for hamburger lines
    	this.append("<div class='f'></div><div class='s'></div><div class='t'></div>");

    	// adds containers class for css
    	this.addClass(settings.contrainerClass);

    	this.on("click",function() {
    		if (settings.active) {
				$(this).removeClass(settings.arrowClass).addClass(settings.hamburgerClass);
				settings.active = false;
			} else {
				// if is preventing animation reversing when going arrow -> hamburger
				if (!$(this).hasClass(settings.hamburgerClass)) { 
					$(this).removeClass(settings.hamburgerClass).addClass(settings.arrowClass);
					settings.active = true;
				}

			}
    	});


    	// remove hamburger class when transition arrow -> hamburger ends
    	// to set the rotate property in css to 0deg
		this.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			if ($(this).hasClass(settings.hamburgerClass)) {
				$(this).removeClass(settings.hamburgerClass);
			}
		});

    	return this;
    }
 
}( jQuery ));

