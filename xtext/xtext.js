(function ( $ ) {
 
    $.fn.xtext = function() {


        var content = this.attr('x-content');
        var contentArray = content.split('');


        for (i=0;i<contentArray.length;i++) {
            this.find('.x-content').append(
                "<div class='x-letter x-letter"+i+"'>"+contentArray[i]+"</div>"
            );
        }


    	this.on('mouseover',function() {
    		var container = $(this).find(".x-container");
    		container.addClass('t1');
    	});
        var c=0;
    	this.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
            if ($(e.target).hasClass('x-line1')) {
     			var container = $(this).find(".x-container");
    			if (!container.hasClass("t2")) {
    				container.addClass("t2");
    			} else {
                    container.addClass("t3");
                }
            }
		});

    	return this;
    }
 
}( jQuery ));

