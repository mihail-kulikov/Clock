var content_hours_left   = document.getElementById('hours_left')
var content_hours_right  = document.getElementById('hours_right')
var content_minute_left  = document.getElementById('minute_left')
var content_minute_right = document.getElementById('minute_right')
var content_second_left  = document.getElementById('second_left')
var content_second_right = document.getElementById('second_right');

const STEP = 22;

var date = new Date();

var hours   = date.getHours().toString(), 
	minutes = date.getMinutes().toString(), 
	seconds = date.getSeconds().toString();

var oldHours   = hours,
	oldMinutes = minutes,
	oldSeconds = seconds;

var ul = document.querySelectorAll('ul');

/* 
==================================
	* ul[0] - content_hours_left
	* ul[1] - content_hours_right
	* ul[2] - content_minute_left
	* ul[3] - content_minute_right
	* ul[4] - content_second_left
	* ul[5] - content_second_right
==================================
*/

var TimeSet = {
	SetForSecondRight: {
		0: STEP * 9,
		1: STEP * 8,
		2: STEP * 7,
		3: STEP * 6,
		4: STEP * 5,
		5: STEP * 4,
		6: STEP * 3,
		7: STEP * 2,
		8: STEP,
		9: 0
	},
	SetForSecondLeft: {
		0: STEP * 5,
		1: STEP * 4,
		2: STEP * 3,
		3: STEP * 2,
		4: STEP,
		5: 0
	},
	SetForMinuteRight: {
		0: STEP * 9,
		1: STEP * 8,
		2: STEP * 7,
		3: STEP * 6,
		4: STEP * 5,
		5: STEP * 4,
		6: STEP * 3,
		7: STEP * 2,
		8: STEP,
		9: 0
	},
	SetForMinuteLeft: {
		0: STEP * 5,
		1: STEP * 4,
		2: STEP * 3,
		3: STEP * 2,
		4: STEP,
		5: 0
	},
	SetForHourRight: {
		0: STEP * 9,
		1: STEP * 8,
		2: STEP * 7,
		3: STEP * 6,
		4: STEP * 5,
		5: STEP * 4,
		6: STEP * 3,
		7: STEP * 2,
		8: STEP,
		9: 0
	},
	SetForHourLeft: {
		0: STEP * 2,
		1: STEP,
		2: 0
	}
};

setLocation(hours, minutes, seconds);

function UpdateDateTime() {
	hours   = date.getHours().toString();
	minutes = date.getMinutes().toString();
	seconds = date.getSeconds().toString();

	setLocation(hours, minutes, seconds);
	setOpacity(hours, minutes, seconds);
};

function setLocation(hours, minutes, seconds) {
	content_hours_left.style.top   = hours.length == 1   ? TimeSet['SetForHourLeft'][0] + 'px'             : TimeSet['SetForHourLeft'][hours[0]] + 'px';
	content_hours_right.style.top  = hours.length == 1   ? TimeSet['SetForHourRight'][hours[0]] + 'px'     : TimeSet['SetForHourRight'][hours[1]] + 'px';

	content_minute_left.style.top  = minutes.length == 1 ? TimeSet['SetForMinuteLeft'][0] + 'px'           : TimeSet['SetForMinuteLeft'][minutes[0]] + 'px';
	content_minute_right.style.top = minutes.length == 1 ? TimeSet['SetForMinuteRight'][minutes[0]] + 'px' : TimeSet['SetForMinuteRight'][minutes[1]] + 'px';

	content_second_left.style.top  = seconds.length == 1 ? TimeSet['SetForSecondLeft'][0] + 'px'           : TimeSet['SetForSecondLeft'][seconds[0]] + 'px';
	content_second_right.style.top = seconds.length == 1 ? TimeSet['SetForSecondRight'][seconds[0]] + 'px' : TimeSet['SetForSecondRight'][seconds[1]] + 'px';
};

function setOpacity(hours, minutes, seconds)
{
	if ( hours.length == 1 ) {
		if (oldHours == 2) {
			ul[0].children[oldHours[0]].style.opacity = .5;
			ul[1].children[oldHours[1]].style.opacity = .5;
		}
		else
			ul[1].children[oldHours].style.opacity = .5;

		ul[0].children[0].style.opacity = 1;
		ul[1].children[hours].style.opacity = 1;
	}
	else
	{
		if (oldHours.length == 2) {
			ul[0].children[oldHours[0]].style.opacity = .5;
			ul[1].children[oldHours[1]].style.opacity = .5;
		}
		else
			ul[1].children[oldHours].style.opacity = .5;

		ul[0].children[hours[0]].style.opacity = 1;
		ul[1].children[hours[1]].style.opacity = 1;
	}

	if ( minutes.length == 1 ) {
		if (oldMinutes.length == 2) {
			ul[2].children[oldMinutes[0]].style.opacity = .5;
			ul[3].children[oldMinutes[1]].style.opacity = .5;
		}
		else
			ul[3].children[oldMinutes].style.opacity = .5;

		ul[2].children[0].style.opacity = 1;
		ul[3].children[minutes].style.opacity = 1;
	}
	else
	{
		if (oldMinutes.length == 2) {
			ul[2].children[oldMinutes[0]].style.opacity = .5;
			ul[3].children[oldMinutes[1]].style.opacity = .5;
		}
		else
			ul[3].children[oldMinutes].style.opacity = .5;

		ul[2].children[minutes[0]].style.opacity = 1;
		ul[3].children[minutes[1]].style.opacity = 1;
	}

	if ( seconds.length == 1 ) {
		if (oldSeconds.length == 2) {
			ul[4].children[oldSeconds[0]].style.opacity = .5;
			ul[5].children[oldSeconds[1]].style.opacity = .5;
		}
		else
			ul[5].children[oldSeconds].style.opacity = .5;

		ul[4].children[0].style.opacity = 1;
		ul[5].children[seconds].style.opacity = 1;
	}
	else
	{
		if (oldSeconds.length == 2) {
			ul[4].children[oldSeconds[0]].style.opacity = .5;
			ul[5].children[oldSeconds[1]].style.opacity = .5;
		}
		else
			ul[5].children[oldSeconds].style.opacity = .5;

		ul[4].children[seconds[0]].style.opacity = 1;
		ul[5].children[seconds[1]].style.opacity = 1;
	}

	if (oldHours != hours)
		oldHours = hours;

	if (oldMinutes != minutes)
		oldMinutes = minutes;

	if (oldSeconds != seconds)
		oldSeconds = seconds;

	/*
	 * fix
	 */

	if (oldSeconds.length == 2 && oldSeconds[0] == 1)
		ul[4].children[0].style.opacity = .5;

	if (oldMinutes.length == 2 && oldMinutes[0] == 1)
		ul[2].children[0].style.opacity = .5;

	if (oldHours.length == 2 && oldHours[0] == 1)
		ul[0].children[0].style.opacity = .5;
};

var interval = setInterval(function (){
	date = new Date();
	UpdateDateTime();
}, 1000);