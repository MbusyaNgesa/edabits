//finding date of christmas day if true or false

function timeForMilkAndCookies(date) {
	const day = date.getDate();
	const month = 	date.getMonth();
	
	return day === 24 && month === 11;
}
	
timeForMilkAndCookies(new Date(2013, 11, 24))