'use strict';



var width = $(window).width();

if (width > 879){
$(document).ready(function(){

	
	    $(".shop-target").mouseenter(function(){
	        $("#shop").slideDown("normal");
	    });

	    $("#shop").mouseleave(function(){
	    	$("#shop").slideUp("normal");
	    });

	     $(".dropdown-nav").mouseleave(function(){
	    	$("#shop").slideUp("normal");
	    	$("#about").slideUp("normal");
	    });

	    $(".about-target").mouseenter(function(){
	        $("#about").slideDown("normal");
	    });

	    $("#about").mouseleave(function(){
	    	$("#about").slideUp("normal");
	    });

});

}