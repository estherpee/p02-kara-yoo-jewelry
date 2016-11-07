'use strict';


var s = $(".summary");
var ss = "summary-stop";
var scw = $(".summary-container").width();
var fh = $("#global-footer").height();
var csh = $(".checkout-section").height();
var cah = $(".cart-section").height();
var ww = $(window).width();
var cas = $(".cart-section");


// s.css("width", s.parent().width());

// if (ww < 879) {
//  	$(".summary-stop").css("position", "relative"); 
//  	$(".summary").css("position", "relative");
//  	s.css("width", "100%");
//  	$(".summary-container-cart").css("height", "10px");
// }

if (ww > 879) {
	$(window).scroll(function() {
	  // if( $(this).scrollTop() > 250) {
	  if( (s.position().top + s.height()) > ($("#global-footer").position().top)) {

	    s.addClass(ss);
	    $(".summary-container").css("height", csh);
	   	$(".summary-container-cart").css("height", cah);


	  } else {
	    s.removeClass(ss);
	    // s.css("width", s.parent().width());


	  }
		console.log("summary" + (s.position().top + s.height()));
	    console.log($(this).scrollTop());
	  	console.log("footer" + ($("#global-footer").position().top));
	});
} else {
	$(".summary").css("position", "relative");
  	s.css("width", "100%");
}

// if (ww > 879) {
// 	$(window).scroll(function() {
// 	  if( $(this).scrollTop() > ($(window).height() - (fh + 15))) {
// 	  // if( (s.position().top + s.height()) > ($("#global-footer").position().top)) {

// 	    s.addClass(ss);
// 	    $(".summary-container").css("height", csh);
// 	   	$(".summary-container-cart").css("height", cah);


// 	  } else {
// 	    s.removeClass(ss);
// 	    // s.css("width", s.parent().width());


// 	  }
// 		console.log("summary" + (s.position().top + s.height()));
// 	    console.log($(this).scrollTop());
// 	  	console.log("footer" + ($("#global-footer").position().top));
// 	});
// } else {
// 	$(".summary").css("position", "relative");
//   	s.css("width", "100%");
// }
