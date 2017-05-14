

$(document).ready(function (){
//--------------------------------------------------------------------
	var interval;

	var min = 0;
	var sec = 0;
	var minsec = 0;

	// functions :
	function displayMin(){
		if(min < 10) return "0" + min; return min;
	}

	function displaySec(){
		if(sec < 10) return "0" + sec; return sec;
	}

	function displayMinsec(){
		if(minsec < 10) return "0" + minsec; return minsec;
	}

	function startTime(){

			interval = setInterval(() => {
				if (!$('#timer').hasClass('pauseInterval')){
					minsec++;
					if(minsec == 99){
						minsec = 0;
						sec++
						if(sec == 59){
							sec = 0;
							min++
						}		
					}
				}
				$('#timer').html(displayMin() + ":" + displaySec() + ":" + displayMinsec());	
			},10);
	}

	function saveTime(){
		//$("#output").html("");		// uncomment to save only one time-record.
		$("#output").prepend("<li><p>"+ displayMin() + ":" + displaySec() + ":" + displayMinsec() +"</p></li>");
	}

	function resetTime(){
			clearInterval(interval);
			min = 0;
			sec = 0;
			minsec = 0;
			$('#timer').html(displayMin() + ":" + displaySec() + ":" + displayMinsec());
			$("#output").html("");
	}
	// handling events:
	$('#startStop').click( () => {
		$('#timer').toggleClass('pauseInterval');
		clearInterval(interval);
		startTime();

	});	

	document.getElementById('reset').addEventListener('click', () => {
		resetTime()
	});	

	document.getElementById('recordTime').addEventListener('click', () => {
		saveTime()
	});	

	document.onkeypress = handleKeyPress;

    function handleKeyPress(event){
        var keyPressed= event.key; //event.key contains the key that was pressed
        if(keyPressed == 's'){
			$('#timer').toggleClass('pauseInterval');
			clearInterval(interval);
			startTime()
		} 
		if(keyPressed == 't') saveTime();
		if(keyPressed == 'r') resetTime();
    } 

//--------------------------------------------------------------------
});

