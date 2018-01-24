function myFunction() {
	  document.getElementById("buttonicon").classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
	window.onclick = function(e) {
	  if (!e.target.matches('.dropbtn')) {
	    var myDropdown = document.getElementById("myDropdown");
	    var myIcon = document.getElementById("buttonicon")
	      if (myDropdown.classList.contains('show')) {
	        myDropdown.classList.remove('show');
	        myIcon.classList.remove('change');
	      }
	  }
	}


var bar1 = new ProgressBar.Circle(progress1, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#df988c',
  trailColor: '#8f9595',
  trailWidth: 2,
  svgStyle: null
});

var bar2 = new ProgressBar.Circle(progress2, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#df988c',
  trailColor: '#8f9595',
  trailWidth: 1,
  svgStyle: null
});

var bar3 = new ProgressBar.Circle(progress3, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#df988c',
  trailColor: '#8f9595',
  trailWidth: 2,
  svgStyle: null
});

var bar4 = new ProgressBar.Circle(progress4, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#df988c',
  trailColor: '#8f9595',
  trailWidth: 1,
  svgStyle: null
});

bar1.animate(0.9);  // Number from 0.0 to 1.0
bar2.animate(0.8);  // Number from 0.0 to 1.0
bar3.animate(0.7);  // Number from 0.0 to 1.0
bar4.animate(0.5);  // Number from 0.0 to 1.0




(function($){
$(document).ready(function () {
  //initialize swiper when document ready
   var swiper1 = new Swiper('.swiper-1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
    });
});

   var swiper = new Swiper('.swiper-2', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
});


  //contact box animation
   $(".contact-container").hover(
  function () {
    $("#info-normal").stop().hide(500);
    $("#info-hover").stop().fadeIn(800);
    $(".social-links").stop().fadeIn(800);

  },
  function () {
    $("#info-hover").stop().fadeOut(500);
    $(".social-links").stop().fadeOut(500);
    $("#info-normal").stop().show(800);
  }
);


 //scroll to top
  $(window).scroll(function(){
  var height=$(window).scrollTop();
  if (height>100){
    $("#up-button").fadeIn();
  } else {
    $("#up-button").fadeOut();
  }
 });

 $("#up-button").click(function(event){

  $("html, body").animate({ scrollTop:0 }, "slow");
  return false;
 });

 // Select all links with hashes
$('a[href*="#"]')
  .click(function(event) {
      // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });

})(jQuery);
































