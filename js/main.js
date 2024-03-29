    
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active gggg Js ----------//
  $(".default-header").gggg({topSpacing:0});


     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });



  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

  //  Counter Js 

  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});



    $('.active-feature-carusel').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        margin:30,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],
        responsive:{    
        0:{
          items: 1
        },
        414:{
          items: 2
        },
        768:{
          items: 3
        }
    }
    });


  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-50
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  });


      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      });   

 });

 /*Dark Mode*/
function darkmode() {
    localStorage.setItem("dark", "true");
    var element = document.body;

    console.log(element.classList);
    if (!element.classList.contains("dark-mode")) {
        element.classList.toggle("dark-mode");
        document.getElementById("slider-switch").checked = true;
    }
}

function lightmode() {
    localStorage.setItem("dark", "false");
    var element = document.body;

    console.log(element.classList);
    if (element.classList.contains("dark-mode")) {
        element.classList.toggle("dark-mode");
        document.getElementById("slider-switch").checked = false;
    }
}

function theme() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
        lightmode();
    } else {
        darkmode();
    }
}

if (localStorage.getItem("dark") == "true") {
    darkmode();
} else if (localStorage.getItem("dark") == "false") {
    lightmode();
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkmode();
}
