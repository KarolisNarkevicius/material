(function ( $ ) {
 

    $.fn.menuIcon = function() {
    	this.append("<div class='f'></div><div class='s'></div><div class='t'></div>");
    	this.addClass("menu back");

    	this.on("mouseenter",function() {
    		if (!$(this).hasClass("mouseover")) {
				$(this).removeClass("mouseout").addClass("mouseover");
			}
    	});
    	this.on("mouseleave",function() {
			$(this).removeClass("mouseover").addClass("mouseout");
		});
		this.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			if ($(this).hasClass("mouseout")) {
				$(this).removeClass("mouseout");
			}
		});

    	return this;
    }
 
}( jQuery ));