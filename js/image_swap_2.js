'use strict';



$(document).ready(function(){
	
    $(".product-img-sub-1").click(function(){
		$(".product-img-main > .main-img").attr("src", "images/open-heart-ring-gold.jpg");
		$(".product-img-main > .alternate-img").attr("src", "images/open-heart-ring-gold.jpg");
    });

   	$(".product-img-sub-2").click(function(){
		$(".product-img-main > .main-img").attr("src", "images/open-heart-ring-silver.jpg");
		$(".product-img-main > .alternate-img").attr("src", "images/open-heart-ring-silver.jpg");
    });

    $(".product-img-sub-3").click(function(){
		$(".product-img-main > .main-img").attr("src", "images/open-heart-ring-both.jpg");
		$(".product-img-main > .alternate-img").attr("src", "images/open-heart-ring-both.jpg");
	
    });



});
