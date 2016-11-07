'use strict';

var $toggle = 0;

$(document).ready(function(){

	
	    $(".side-nav-target").click(function(){
	    	if($toggle == 0){
	        // $(".mobile-main-nav").css("display", "block");
	        $(".side-nav-dropdown-content").slideDown("normal");
	        $toggle = 1;
	    	} else {
	    	$(".side-nav-dropdown-content").slideUp("normal");
	    	$toggle = 0;
	    	};
	  	});

	  	$(".side-nav-target-2").click(function(){
	    	if($toggle == 0){
	        // $(".mobile-main-nav").css("display", "block");
	        $(".side-nav-dropdown-content-2").slideDown("normal");
	        $toggle = 1;
	    	} else {
	    	$(".side-nav-dropdown-content-2").slideUp("normal");
	    	$toggle = 0;
	    	};
	  	});

	  	

});