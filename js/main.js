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


var bar = new ProgressBar.Circle(progress, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.7);  // Number from 0.0 to 1.0
