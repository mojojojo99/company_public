$(document).ready(function(){
		$("#toilets").click(function() {
			window.location.href = "toilets";
 	    });
		$("#about").click(function() {
			window.location.href = "about";
 	    });
		$("#fridges").click(function() {
			window.location.href = "fridges";
 	    });
		$("#contact").click(function() {
			window.location.href = "contact";
 	    });

		var pagenum = 1;
		function AutoRotate() {
		   var allElements = document.getElementsByClassName('control_comments');
		   count = 0;
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null)) {
				   count ++;
				   var radio = document.getElementById(myfor);
			   		if (radio.checked) {
						pagenum = parseInt(myfor.substring(8), 10);
					}
			   }
		   }

		   if (pagenum == allElements.length) {
			   pagenum = 1;
		   } else {
			   pagenum++;
		   }
	
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
				   var radio = document.getElementById(myfor);
				   radio.checked = true;
				   break;
			   }
		   }
		}

		var timer = setInterval(AutoRotate, 7000);
		$( "body" ).data("timer", timer);

		function radioclickcallback() {
		    var allElements = document.getElementsByClassName('control_comments');
		    for (var i = 0, n = allElements.length; i < n; i++) {
			    var myfor = allElements[i].getAttribute('for');
			    if ((myfor !== null)) {
				    var radio = document.getElementById(myfor);
			    		if (radio.checked) {
					 	pagenum = parseInt(myfor.substring(8), 10);
					 }
			    }
		    }
			clearInterval(timer);
			timer = setInterval(AutoRotate, 7000);
		}

		$( ".radio_comments" ).click( radioclickcallback );

	
	
	// Get the <span> element that closes the modal
	var modals = document.getElementsByClassName("modal2");
	for (var i = 0, n = modals.length; i < n; i++) {
		var modal = document.getElementById("myModal" + (i + 1));
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
	  		if (event.target == modal) {
	    		modal.style.display = "none";
	  		}
		}
		var span = document.getElementById("closemodal" + (i + 1) );
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
		// Get the button that opens the modal
		var btn = document.getElementById("myBtn" + (i + 1));
		// When the user clicks on the button, open the modal
		if (btn != null) {
			btn.onclick = function() {
				// Get the <span> element that closes the modal
				span = document.getElementById("closemodal" + pagenum);
				// Get the modal
				modal = document.getElementById("myModal" + pagenum);
			  	modal.style.display = "block";
			}
		}
	}
	
	let touchstartX = 0
	let touchendX = 0
	function checkDirection() {
	  if (touchendX + 30 < touchstartX) pagenum++;
	  if (touchendX - 30 > touchstartX) pagenum--;

	  var allElements = document.getElementsByClassName('control_comments');
	  if (pagenum > allElements.length) {
		   pagenum = 1;
	  } 
	  if (pagenum < 0) {
		   pagenum = allElements.length;
	  }
	  clearInterval(timer);
	  for (var i = 0, n = allElements.length; i < n; i++) {
		   var myfor = allElements[i].getAttribute('for');
		   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
			    var radio = document.getElementById(myfor);
			    radio.checked = true;
			    break;
		   }
	  }
	
	}

	document.getElementById("testimonial_slider").addEventListener('touchstart', e => {
	  touchstartX = e.changedTouches[0].screenX
	})

	document.getElementById("testimonial_slider").addEventListener('touchend', e => {
	  touchendX = e.changedTouches[0].screenX
	  checkDirection()
	})
});

 function submitForm(event){
     var radios = document.getElementsByName("fields[rating]");
     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
			alert("Response is received! We will review the feedback, thank you!");
			event.preventDefault();
            return true;
          }
     }
	$(".apparent-message").css('display', 'block');
    return false;
 }

function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
	if (num.length <= 4) {
		return;
	}
    $(this).val(num.substring(0,4) + ' ' + num.substring(4,8)); 
}
$('[type="tel"]').keyup(phoneMask);

function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}


function showChineseTimeline(ch_button) {
	ch_button.classList.add("disabled");
	var eng_button = document.getElementById("engTimelineButton");
	eng_button.classList.remove("disabled");
	var ch_timeline = document.getElementById("ch-timeline");
	ch_timeline.style.display="unset";
	var eng_timeline = document.getElementById("eng-timeline");
	eng_timeline.style.display="none";

}

function showEnglishTimeline(eng_button) {
	eng_button.classList.add("disabled");
	var ch_button = document.getElementById("chTimelineButton");
	ch_button.classList.remove("disabled");
	var ch_timeline = document.getElementById("ch-timeline");
	ch_timeline.style.display="none";
	var eng_timeline = document.getElementById("eng-timeline");
	eng_timeline.style.display="unset";
}