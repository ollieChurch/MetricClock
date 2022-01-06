let clockHidden = false;

setInterval ("updateClock()", 1000);

function updateClock() {
    let currentTimeString;
    
    let fractionHours;
    let fractionMinutes;
    let metricTime;
    
 	let currentTime = new Date ( );
  	let currentHours = currentTime.getHours ( );
  	let currentMinutes = currentTime.getMinutes ( );
  	let currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Compose the string for display
  	currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    
    //Divide the hours
    fractionHours = ((10 / 24)*currentHours);
    
    //Divide the minutes
    fractionMinutes = ((10/24)*(currentMinutes / 60));
    
    //Create Metric Equivalent
    metricTime = (fractionHours + fractionMinutes).toFixed(2);	
    metricTime = (metricTime === 0.0 ? metricTime = 10.00 : metricTime);
  	
   	$("#clock").text(currentTimeString);	
    $("#metricClock").text(metricTime);
 }

function hideOldTime() {
    $("#oldTitle").toggle(this);
    $("#clock").toggle(this);
    $("#buttonBlurb").toggle(this);
    clockHidden = !clockHidden;
    
    if (clockHidden === true) {
        $("#clockHide").text("Show Old Time");
        $("#hideButton").css("max-width", "400px");
    } else {
        $("#clockHide").text("Hide Old Time");
        $("#hideButton").css("max-width", "1000px");
    }
}