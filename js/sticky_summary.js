'use strict';


var s = $(".summary");
var   ss = "summary-stop";
var   fh = $("#global-footer").height();
var csh = $(".checkout-section").height();
var cah = $(".cart-section").height();



$(window).scroll(function() {
  if( $(this).scrollTop() > fh) {
    s.addClass(ss);
    $(".summary-container").css("height", csh);
    $(".summary-container-cart").css("height", cah);

  } else {
    s.removeClass(ss);
  }
});

