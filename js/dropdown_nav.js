'use strict';

$(document).ready(function(){
    $(".shop-target").mouseenter(function(){
        // $("#shop").css("display", "block");
        $("#shop").slideDown("normal");
    });

    $("#shop").mouseleave(function(){
    	// $("#shop").css("display", "none");
    	$("#shop").slideUp("normal");
    });

     $(".dropdown-nav").mouseleave(function(){
    	// $("#shop").css("display", "none");
    	$("#shop").slideUp("normal");
    	$("#about").slideUp("normal");
    });

    $(".about-target").mouseenter(function(){
        // $("#shop").css("display", "block");
        $("#about").slideDown("normal");
    });

    $("#about").mouseleave(function(){
    	// $("#shop").css("display", "none");
    	$("#about").slideUp("normal");
    });




});