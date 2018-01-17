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
   var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
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
})(jQuery);






