'use strict';


var s = $(".summary");
var ss = "summary-stop";
var sstacked = "summary-stacked";
var sc = $(".summary-container");
var scc = $(".summary-container-cart");
var fh = $("#global-footer").height();
var csh = $(".checkout-section").height();
var cah = $(".cart-section").height();
var ww = $(window).width();



if (ww > 879) {
	$(".summary-container").css("height", csh);
   	$(".summary-container-cart").css("height", cah);

   	
	$(window).scroll(function() {
	  if(($(this).scrollTop() + 560) > ($(document).height() - (fh + 15))) {
	  // if((s.position().top + s.height()) > ($(document).height() - (fh + 40))) {
	  // if( (s.position().top + s.height()) > ($("#global-footer").position().top)) {

	    s.addClass(ss);

	  } else {
	    s.removeClass(ss);


	  }
		

		console.log(($(document).scrollTop() + 570));
		console.log(($(document).height() - (fh + 50)));


	});
	
} else {
		s.addClass(sstacked);
		scc.addClass("summary-container-cart-stacked");
		sc.addClass("summary-container-stacked");
  		
}

$(window).bind('resize', function() {
     location.reload();
});

