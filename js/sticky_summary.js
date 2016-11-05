'use strict';


// var s = $(".summary");
// var   ss = "summary-stop";
// var   fh = $(".footer").height();
// var	position = s.position();


// $(window).scroll(function() {
//   if( $(s)position.bottom > fh ) {
//     s.addClass(ss);
//   } else {
//     s.removeClass(ss);
//   }
// });


// Position of fixed element from top of the document
var fixedElementOffset = $('.summary').offset().top;
// Position of footer element from top of the document.
// You can add extra distance from the bottom if needed,
// must match with the bottom property in CSS
var footerOffset = $('.footer').offset().top - 36;

var fixedElementHeight = $('.summary').height(); 

// Check every time the user scrolls
$(window).scroll(function (event) {

    // Y position of the vertical scrollbar
    var y = $(this).scrollTop();

    if ( y >= fixedElementOffset && ( y + fixedElementHeight ) < footerOffset ) {
        $('.summary').addClass('fixed');
        $('.summary').removeClass('bottom');          
    }
    else if ( y >= fixedElementOffset && ( y + fixedElementHeight ) >= footerOffset ) {
        $('.summary').removeClass('fixed');           
        $('.summary').addClass('bottom');
    }
    else {
        $('.summary').removeClass('fixed bottom');
    }

 });