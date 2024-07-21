//finding date of christmas day if true or false

function timeForMilkAndCookies(date) {
	const day = date.getDate();
	const month = 	date.getMonth();

	return day === 24 && month === 11;
}
	
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));

/*Create a function that takes an array of numbers and return "Boom!" if the digit
7 appears in the array. Otherwise, return "there is no 7 in the array". */

// function sevenBoom(...arr) {
// 	for(let k of arr){
// 		if(k.toString().includes('7')){
// 			return "Boom!";
// 		}
// 		else{
// 			return "there is no 7 in the array";
// 		}
// 	}
// 	return arr;
// }
// console.log(sevenBoom(1,3,5));

//Another solution for Seven Boom!
function sevenBoom(arr) {
    // Convert array to string
    let k = arr.toString();
    
    // Check if the string includes the number '7'
    let found = k.includes('7');
    
    // Return true if '7' was found, false otherwise
    return found;
}

// Test the function with an array
console.log(sevenBoom([1, 3, 5, 7])); // Output: true


/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5. */

function oddishOrEvenish(num) {
	let strNum = String(num); //Convert num to String
	
	//Calculating sum of all digits 
	let sumStr = 0;
	for(let i = 0; i < strNum.length; i++){
		sumStr += parseInt(strNum[i]);//Changing string to a number
	}
	
	//Checking if sum of digits above is even or odd
	if(sumStr % 2 === 0){
		return "Evenish";
	}
	else{
		return "Oddish";
	}
}
