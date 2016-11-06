'use strict';


var s = $(".summary");
var ss = "summary-stop";
var scw = $(".summary-container").width();
var fh = $("#global-footer").height();
var csh = $(".checkout-section").height();
var cah = $(".cart-section").height();
var width = $(window).width();

// s.css("width", s.parent().width());



$(window).scroll(function() {
  if( $(this).scrollTop() > ($(window).height() - (fh + 10))) {
    s.addClass(ss);
    $(".summary-container").css("height", csh);
   	$(".summary-container-cart").css("height", cah);


  } else {
    s.removeClass(ss);
    // s.css("width", s.parent().width());


  }

    console.log($(this).scrollTop());
  	console.log(fh);
});