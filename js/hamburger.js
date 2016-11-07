'use strict';




$(document).ready(function(){
var $toggle = 0;
	
	    $(".fa-bars").click(function(){
	    	if($toggle == 0){
	        // $(".mobile-main-nav").css("display", "block");
	        $(".mobile-main-nav").slideDown("normal");
	        $toggle = 1;
	    	} else {
	    	$(".mobile-main-nav").slideUp("normal");
	    	$toggle = 0;
	    	};
	  	});

	  	

});