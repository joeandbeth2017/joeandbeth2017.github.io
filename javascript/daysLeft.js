---
---

$(function(){
	var date_ms = new Date("{{ site.date | date: "%B %-d, %Y" }}").getTime();
	var now_ms = Date.now();
	
	// Get 1 day in milliseconds
	var oneDay=1000*60*60*24;
	  
	// Calculate the difference in milliseconds
	var difference_ms = date_ms - now_ms;
	
	// Convert back to days
	var daysLeft = Math.round(difference_ms/oneDay);
	
	if(daysLeft > 0) {
		$("#countdown").text(daysLeft + " days left!");
	} else if(daysLeft < 0) {
		daysLeft = 0 - daysLeft;
		$("#countdown").text(daysLeft + " days of bliss!");
	} else {
		$("#countdown").text("Today's the day!");
	}
	
});
