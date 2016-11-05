'use strict';


$("[name='billing-address']").change(function() {
  if ($(this).is(':checked')) {
    console.log('Checked');
    $(".billing-address-form").css("display", "none");


  } else {
    console.log('Unchecked');
    $(".billing-address-form").css("display", "block");
  }
});


