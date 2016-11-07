'use strict';



$(document).ready(function(){
	
    $(".product-img-sub-1").click(function(){
		$(".product-img-main > .main-img").attr("src", "images/gladiator-ring-gold-1.jpg").attr("alt", "Gladiator Ring Gold");
		$(".product-img-main > .alternate-img").attr("src", "images/gladiator-ring-gold-2.jpg").attr("alt", "Gladiator Ring Gold");
    });

   	$(".product-img-sub-2").click(function(){
		$(".product-img-main > .main-img").attr("src", "images/gladiator-ring-silver-1.jpg").attr("alt", "Gladiator Ring Silver");
		$(".product-img-main > .alternate-img").attr("src", "images/gladiator-ring-silver-2.jpg").attr("alt", "Gladiator Ring Silver");
    });

    $(".product-img-sub-3").click(function(){
		$(".product-img-main > .main-img").attr("src", "images/gladiator-ring-both.jpg").attr("alt", "Gladiator Ring Silver and Gold");
		$(".product-img-main > .alternate-img").attr("src", "images/gladiator-ring-both.jpg").attr("alt", "Gladiator Ring Silver and Gold");
	
    });



});
