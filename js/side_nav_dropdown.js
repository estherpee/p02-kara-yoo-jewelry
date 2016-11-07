'use strict';

var $toggle = 0;

$(document).ready(function(){

	
	    $(".categories-target").click(function(){
	    	if($toggle == 0){
	        // $(".mobile-main-nav").css("display", "block");
	        $(".categories-side-nav-dropdown-content").slideDown("normal");
	        $toggle = 1;
	    	} else {
	    	$(".categories-side-nav-dropdown-content").slideUp("normal");
	    	$toggle = 0;
	    	};
	  	});

	  	$(".collections-target").click(function(){
	    	if($toggle == 0){
	        // $(".mobile-main-nav").css("display", "block");
	        $(".collections-side-nav-dropdown-content").slideDown("normal");
	        $toggle = 1;
	    	} else {
	    	$(".collections-side-nav-dropdown-content").slideUp("normal");
	    	$toggle = 0;
	    	};
	  	});

	  	

});