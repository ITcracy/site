jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

	$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.

    if ($(window).scrollTop() > 10) {

      $('#nav_bar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 11) {

      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });

});